import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import nodemailer from "nodemailer";

// Setup nodemailer transporter for sending emails
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password (or app-specific password)
    },
});

export async function POST(req) {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    // Verify webhook signature
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log("Webhook signature verification failed.");
        return NextResponse.json(
            { error: `Webhook Error: ${err.message}` },
            { status: 400 }
        );
    }

    if (event.type === "payment_intent.succeeded") {
        const paymentIntent = event.data.object;
        const userEmail = paymentIntent.charges.data[0].billing_details.email;
        const amount = paymentIntent.amount_received / 100; // Stripe returns amount in cents
        const items = paymentIntent.metadata.items; // Assuming items are passed in metadata
        const userInfo = {
            name: paymentIntent.metadata.name,
            location: paymentIntent.metadata.location,
            phone: paymentIntent.metadata.phone,
        };

        // Send Order Email to Admin
        const orderMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Admin email
            subject: `New Order Received: ${userInfo.name}`,
            text: `Order Details:\n\n
                   Items: ${items}\n
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

        // Send Payment Confirmation Email to User
        const paymentMailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "Payment Confirmation - Order Received",
            text: `Dear ${userInfo.name},\n\n
                   Thank you for your payment. We have successfully processed your order of $${amount}.
                   Your order includes the following items:\n
                   ${items}\n\n
                   We will notify you once your order is ready for delivery.\n\n
                   Best regards, Your Company Name`,
        };

        try {
            // Send Payment Confirmation Email to User
            await transporter.sendMail(paymentMailOptions);
        } catch (error) {
            console.error("Error sending user payment confirmation email:", error);
        }

        return NextResponse.json({ received: true });
    } else {
        return NextResponse.json({ error: "Unhandled event type" }, { status: 400 });
    }
}