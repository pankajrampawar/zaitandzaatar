import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    try {
        // Step 1: Parse the request body to get admin name and password
        const { adminName, adminPassword } = await req.json();

        // Step 2: Validate input fields
        if (!adminName || !adminPassword) {
            return new Response(
                JSON.stringify({ error: 'Admin name and password are required.' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Step 3: Connect to MongoDB
        const client = await clientPromise;
        if (!client) {
            throw new Error('Failed to connect to the database');
        }

        const db = client.db('your-database-name');

        // Step 4: Check if the admin credentials are correct
        const admin = await db.collection('Admin').findOne({ name: adminName });

        if (!admin) {
            return new Response(
                JSON.stringify({ error: 'Invalid admin name or password.' }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Step 5: Verify the password
        if (admin.password !== adminPassword) {
            return new Response(
                JSON.stringify({ error: 'Invalid admin name or password.' }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Step 6: Fetch the list of users (contacts) from the database
        const contacts = await db.collection('contacts').find().toArray();

        // Step 7: Format the contacts list to avoid undefined or null values
        const formattedContacts = contacts.map(contact => ({
            name: contact.name || 'N/A', // Default values if undefined
            email: contact.email || 'N/A',
            contactNumber: contact.contactNumber || 'N/A',
            messageContent: contact.messages || 'N/A',
            sentAt: contact.createdAt || 'N/A',
        }));

        // Step 8: Return success response with formatted contacts
        return new Response(
            JSON.stringify({
                message: 'ok',
                contacts: formattedContacts,
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            }
        );

    } catch (error) {
        // Step 9: Log and return detailed error message
        console.error('Error in /api/checkAdmin:', error);

        return new Response(
            JSON.stringify({
                error: `Failed to process request: ${error.message}`,
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
