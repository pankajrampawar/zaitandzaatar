import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        // Parse the request body
        const { name, email, contactNumber, message } = await req.json();

        // Validate input fields
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Set up Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        // Prepare email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender email address
            to: process.env.EMAIL_USER,   // Recipient email address (you can send it to yourself or a team inbox)
            subject: 'New Contact Form Submission',
            text: `You have received a new message from your website contact form:
            
            Name: ${name}
            Email: ${email}
            Contact Number: ${contactNumber || 'Not provided'}
            Message:
            ${message}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Contact form email sent:', info.response);

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
