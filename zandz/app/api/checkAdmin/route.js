import clientPromise from '@/app/lib/mongodb';

export async function POST(req) {
    try {
        // Parse the request body to get admin name and password
        const { adminName, adminPassword } = await req.json();



        // Validate input fields
        if (!adminName || !adminPassword) {

            return new Response(
                JSON.stringify({ error: 'Admin name and password are required.' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }

        // Connect to MongoDB

        const client = await clientPromise;
        const db = client.db('your-database-name'); // Use the correct database name


        // Fetch and log all documents in the 'Admin' collection

        const allAdmins = await db.collection('Admin').find({}).toArray();


        // Check if the admin credentials are correct

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



        // Verify the password
        if (admin.password === adminPassword) {


            // Fetch the list of users (clients) from the database

            const contacts = await db.collection('contacts').find({}).toArray();
            console.log(contacts)


            // Format the contacts list
            const formattedContacts = contacts.map(contact => ({
                name: contact.name,
                email: contact.email,
                contactNumber: contact.contactNumber,
                messageContent: contact.messages,
                sentAt: contact.createdAt,
            }));

            // Send a success response with the contacts list
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
        } else {

            return new Response(
                JSON.stringify({ error: 'Invalid admin name or password.' }),
                {
                    status: 401,
                    headers: { 'Content-Type': 'application/json' },
                }
            );
        }
    } catch (error) {
        console.error('Error validating admin credentials:', error);

        // Return a generic error response
        return new Response(
            JSON.stringify({ error: `Failed to validate credentials: ${error.message}` }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            }
        );
    }
}
