import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { userEmail, items, amount, userInfo } = await req.json();
        console.log("lets see")
        // Validate required fields
        if (!userEmail || !items || !amount || !userInfo) {
            return NextResponse.json({
                message: 'Missing required fields'
            }, { status: 400 });
        }

        // Create a transporter to send the email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Format the items list
        let itemsList = items.map((item, index) =>
            `${index + 1}. ${item.name} - Quantity: ${item.quantity}`
        ).join('\n');

        // Compose the email content
        const emailContent = `
Order Details:

Items in Cart:
${itemsList}

Total Amount: $${amount}

Customer Details:
Name: ${userInfo.name}
Email: ${userEmail}
Location: ${userInfo.location}
Phone: ${userInfo.phone}
        `;

        // Set up email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Order Confirmation from ${userInfo.name}`,
            text: emailContent,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: 'Email sent successfully'
        }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({
            message: 'Error sending email',
            error: error.message
        }, { status: 500 });
    }
}