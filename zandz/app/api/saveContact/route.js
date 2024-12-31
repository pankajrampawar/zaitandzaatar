import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    try {
        // Parse the request body
        const { name, email, contactNumber, message } = await req.json();

        // Validate input fields
        if (!name || !email) {
            return new Response(JSON.stringify({ error: 'Name, email, and message content are required.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        // Connect to MongoDB
        const client = await clientPromise;
        const db = client.db('your-database-name'); // Replace with your database name

        // Check if the contact number already exists in the database
        const existingContact = await db.collection('contacts').findOne({ contactNumber });

        // Prepare the message object
        const newMessage = {
            message,
            sentAt: new Date(),
        };

        if (existingContact) {
            // If the contact number exists, append the new message to the existing contact's messages array
            const result = await db.collection('contacts').updateOne(
                { contactNumber },
                { $push: { messages: newMessage } } // Add the new message to the messages array
            );

            console.log('Contact info updated with new message:', result);
        } else {
            // If the contact number doesn't exist, insert the full contact info
            const result = await db.collection('contacts').insertOne({
                name,
                email,
                contactNumber,
                messages: [newMessage], // Initialize the messages array with the first message
                createdAt: new Date(),
            });

            console.log('Contact info saved:', result);
        }

        // Send success response
        return new Response(JSON.stringify({ message: 'Contact info saved successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error saving contact info:', error);

        // Send error response
        return new Response(JSON.stringify({ error: `Failed to save contact info: ${error.message}` }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
