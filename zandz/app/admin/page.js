'use client';
import { useState, useEffect } from 'react';
import { anek_gujarati } from '../fonts';

const AdminLogin = () => {
    const [adminName, setAdminName] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [clients, setClients] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    // Load stored state on component mount
    useEffect(() => {
        const storedClients = localStorage.getItem('clients');
        const storedLoggedIn = localStorage.getItem('loggedIn');
        if (storedClients) setClients(JSON.parse(storedClients));
        if (storedLoggedIn === 'true') setLoggedIn(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/checkAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ adminName, adminPassword }),
            });

            const data = await response.json();

            if (data.message === 'ok') {
                setClients(data.contacts);
                setLoggedIn(true);
                // Save data to localStorage
                localStorage.setItem('clients', JSON.stringify(data.contacts));
                localStorage.setItem('loggedIn', 'true');
            } else {
                setError(data.error || 'An unknown error occurred');
            }
        } catch (error) {
            setError('Error connecting to server');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        // Clear localStorage and reset state
        localStorage.removeItem('clients');
        localStorage.removeItem('loggedIn');
        setClients([]);
        setLoggedIn(false);
        setAdminName('');
        setAdminPassword('');
    };

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            {!loggedIn ? (
                <div className="bg-white p-10 sm:p-14 lg:p-20 rounded-xl flex flex-col shadow-xl space-y-8">
                    <h2
                        className={`text-4xl lg:text-5xl text-center ${anek_gujarati.className} font-bold text-gray-800`}
                    >
                        Admin Login
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="adminName" className="text-lg font-medium text-gray-700">
                                Admin Name:
                            </label>
                            <input
                                type="text"
                                id="adminName"
                                value={adminName}
                                onChange={(e) => setAdminName(e.target.value)}
                                className="border border-gray-300 p-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                placeholder="Enter your admin name"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="adminPassword" className="text-lg font-medium text-gray-700">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="adminPassword"
                                value={adminPassword}
                                onChange={(e) => setAdminPassword(e.target.value)}
                                className="border border-gray-300 p-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex w-full justify-center mt-8">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-xl rounded-lg shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Logging in...' : 'Log in'}
                            </button>
                        </div>
                    </form>

                    {error && (
                        <p className="text-center text-red-500 text-lg font-medium">
                            {error}
                        </p>
                    )}
                </div>
            ) : (
                <div className="w-full max-w-6xl mx-auto p-5">
                    <h2 className={`text-2xl lg:text-3xl ${anek_gujarati.className} font-bold text-gray-800 mb-6`}>
                        Welcome, Admin
                    </h2>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg mb-6 transition"
                    >
                        Log Out
                    </button>
                    <div className="bg-gray-100 p-6 rounded-lg shadow">
                        <h3 className="text-xl font-semibold mb-4">Client List:</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-300">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="border border-gray-300 p-3">Name</th>
                                        <th className="border border-gray-300 p-3">Email</th>
                                        <th className="border border-gray-300 p-3">Contact Number</th>
                                        <th className="border border-gray-300 p-3">Messages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client, index) => (
                                        <tr key={index} className="even:bg-gray-100">
                                            <td className="border border-gray-300 p-3">{client.name}</td>
                                            <td className="border border-gray-300 p-3">{client.email}</td>
                                            <td className="border border-gray-300 p-3">{client.contactNumber}</td>
                                            <td className="border border-gray-300 p-3">
                                                <details>
                                                    <summary className="cursor-pointer text-blue-600">View Details</summary>
                                                    <ul className="mt-2 space-y-2 list-disc list-inside">
                                                        {client.messageContent.map((messageObj, msgIndex) => (
                                                            <li key={msgIndex} className="text-gray-800">
                                                                <div className="font-semibold">Message:</div>
                                                                <div>{messageObj.message}</div>
                                                                <div className="text-sm text-gray-500">
                                                                    Sent at: {new Date(messageObj.sentAt).toLocaleString()}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminLogin;
