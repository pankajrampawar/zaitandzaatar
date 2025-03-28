import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import nodemailer from "nodemailer";

// Setup nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password (or app-specific password)
    },
});

// Disable Next.js body parsing for this route
export const config = {
    api: {
        bodyParser: false, // Disable Next.js body parser to handle raw body manually
    },
};

export async function POST(req) {
    const sig = req.headers.get("stripe-signature");  // Get the stripe-signature header from the request
    console.log("headers: ", req.headers);
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!sig) {
        console.log("Missing stripe-signature header");
        return new NextResponse(JSON.stringify({ error: "Missing stripe-signature header" }), { status: 400 });
    }

    let event;

    // Verify webhook signature
    try {
        const clonedReq = req.clone();
        const body = await clonedReq.text();
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret); // Verify event
    } catch (err) {
        console.log("Webhook signature verification failed.", err);
        return new NextResponse(JSON.stringify({ error: `Webhook Error: ${err.message}` }), { status: 400 });
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent for ${paymentIntent.amount_received} was successful!`);

            // Extract payment details
            const isRestaurant = paymentIntent.metadata.restaurant === 'true';
            const userEmail = paymentIntent.metadata.email
            const amount = paymentIntent.amount_received / 100; // Convert amount to dollars
            const items = paymentIntent.metadata.items; // Items sent in metadata
            console.log(paymentIntent.metadata);
            const userInfo = {
                name: paymentIntent.metadata.name,
                location: paymentIntent.metadata.location || 'none',
                phone: paymentIntent.metadata.phone || 'none',
            };

            const itemsArray = JSON.parse(items)

            const updatedItems = itemsArray.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }));


            const updatedItemsText = updatedItems
                .map(item => `- ${item.name} (Price: $${item.price}, Quantity: ${item.quantity})`)
                .join('\n');

            if (isRestaurant) {
                const orderMailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER, // Admin email
                    subject: `New Order Received: ${userInfo.name}`,
                    text: `Order Details:\n\n
                   Items:\n${updatedItemsText}\n\n
                   Location: ${userInfo.location}\n
                   Phone: ${userInfo.phone}\n
                   Total Amount: $${amount}`,
                };

                try {
                    // Send Order Email to Admin
                    await transporter.sendMail(orderMailOptions);
                } catch (error) {
                    console.error("Error sending admin order email:", error);
                }
            } else {
                const charityMailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER,
                    subject: `H4H meal donation received from ${userInfo.name}`,
                    text: `Donation Details: \n\n
                    Items:\n${updatedItemsText}\n\n
                    Donor Email: ${userEmail}\n\n
                    `
                }

                try {
                    await transporter.sendMail(charityMailOptions);
                } catch (error) {
                    console.error("Error sending admin order email:", error);
                }
            }

            // Send Payment Confirmation Email to User
            if (isRestaurant) {
                const paymentMailOptions = {
                    from: process.env.EMAIL_USER,
                    to: userEmail,
                    subject: "Payment Confirmation - Order Received",
                    text: `Dear ${userInfo.name},\n\n
                    Thank you for your payment. We have successfully processed your order of $${amount}.
                    Your order includes the following items:\n
                    ${updatedItemsText}\n\n
                    We will notify you once your order is ready for delivery.\n\n
                    Best regards, Zait & Zaatar`,
                };

                try {
                    // Send Payment Confirmation Email to User
                    await transporter.sendMail(paymentMailOptions);
                } catch (error) {
                    console.error("Error sending user payment confirmation email:", error);
                }
            } else {
                const charityMailOptions = {
                    from: process.env.EMAIL_USER,
                    to: userEmail,  // Donor's email
                    subject: "Thank You for Your Generosity! ",
                    text: `Dear ${userInfo.name},
                
                We are incredibly grateful for your generous donation to *Humans for Humanity Meal*! Your support will have a direct and meaningful impact on individuals and families in need across our community.
                
                Because of compassionate donors like you, we are able to provide nourishing meals to those facing hunger. Your gift helps ensure that no one has to go to bed hungry, and your kindness will help create a brighter future for so many.
                
                We truly believe that together, we can make our world a better place, and your donation is a vital part of that change. We are honored to have you as a partner in this mission.
                
                Thank you once again for your kindness and generosity. Your support makes all the difference.
                
                Warm regards,  
                The Humans for Humanity Meal Team`,
                };

                try {
                    await transporter.sendMail(charityMailOptions);
                } catch (error) {
                    console.error("Error sending user payment confirmation email: ", error)
                }
            }

            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            console.log(`Payment method attached: ${paymentMethod.id}`);
            break;
        default:
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    return new NextResponse(JSON.stringify({ received: true }), { status: 200 });
}
