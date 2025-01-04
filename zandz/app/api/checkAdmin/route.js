import clientPromise from '@/app/lib/mongodb';

export const POST = async (req) => {
    try {
        const { adminName, adminPassword } = await req.json();
        console.log('Received adminName:', adminName, 'adminPassword:', adminPassword);

        // Step 1: Validate input fields
        if (!adminName || !adminPassword) {
            return new Response(
                JSON.stringify({ error: 'Admin name and password are required.' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Step 2: Connect to MongoDB
        const client = await clientPromise;
        if (!client) {
            throw new Error('Failed to connect to the database');
        }

        const db = client.db('your-database-name');
        const db2 = client.db('Client-List');

        // Step 3: Check if the admin credentials are correct
        const admin = await db.collection('Admin').findOne({ name: adminName });
        console.log('Admin:', admin);

        if (!admin || !admin.password) {
            return new Response(
                JSON.stringify({ error: 'Invalid admin name or password.' }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        if (admin.password !== adminPassword) {
            return new Response(
                JSON.stringify({ error: 'Invalid admin name or password.' }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Step 4: Fetch the list of users (contacts) from the database
        const contacts = await db2.collection('contacts').find().toArray();
        console.log("db2", db2)
        console.log('Contacts:', contacts);

        if (!Array.isArray(contacts)) {
            throw new Error('Contacts data is not an array');
        }

        // Step 5: Format the contacts list to avoid undefined or null values
        const formattedContacts = contacts.map(contact => ({
            name: contact?.name || 'N/A',
            email: contact?.email || 'N/A',
            contactNumber: contact?.contactNumber || 'N/A',
            messageContent: contact?.messages || 'N/A',
            sentAt: contact?.createdAt || 'N/A',
        }));

        // Step 6: Return success response with formatted contacts
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
};
