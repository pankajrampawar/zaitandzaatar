import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        // Get the request body
        const { itemsInCart, location, deliveryDate, deliveryTime, phone, email } = await req.json();

        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("items in Cart: ", typeof itemsInCart)

        const cartItems = itemsInCart.itemsInCart;
        let itemsList = '';
        cartItems.forEach((item, index) => {
            itemsList += `${index + 1}. ${item.name} - Quantity: ${item.quantity}\n`;
        });

        // Prepare email data
        const mailOptions = {
            from: process.env.EMAIL_USER,  // Sender email address (Your email)
            to: process.env.EMAIL_USER,    // Recipient email address (Your email)
            subject: 'Catering Order Request',
            text: `Order Details:
                   \n\nItems in Cart:
                   ${itemsList}
                   \nLocation: ${location}
                   Delivery Date: ${deliveryDate}
                   Delivery Time: ${deliveryTime}
                   Phone: ${phone}
                   Customer Email: ${email}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);

        // Send success response
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);

        // Send error response
        return new Response(JSON.stringify({ error: `Failed to send email: ${error.message}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
