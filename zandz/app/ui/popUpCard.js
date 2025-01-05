'use client'
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function PopUpCard(itemsInCart) {
    const [location, setLocation] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        if (session) {
            setName(session.user.name);
            setEmail(session.user.email);
        }
    }, [session])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset error message

        // Check if the delivery date is at least 24 hours after current time
        const currentDate = new Date();
        const selectedDate = new Date(`${deliveryDate}T${deliveryTime}`);
        const timeDifference = selectedDate - currentDate;

        if (timeDifference < 86400000) { // 86400000ms = 24 hours
            setErrorMessage("Delivery time must be at least 24 hours from the current time.");
            return;
        }

        // Check if mobile and email are provided
        if (!mobile || !email) {
            setErrorMessage("Please provide a valid mobile number and email.");
            return;
        }

        // Send form data to API
        setIsLoading(true);
        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    itemsInCart,
                    name,
                    location,
                    deliveryDate,
                    deliveryTime,
                    phone: mobile,
                    email,
                }),
            });

            if (response.ok) {
                setFormSubmitted(true);
                localStorage.removeItem('cart')
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Failed to send the order request, Please try again later.");
            }

            const saveResponse = await fetch('/api/saveContact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email, contactNumber: mobile }),
            });

            if (!saveResponse.ok) {
                const saveError = saveResponse.json();
                console.log(`Save Error: ${saveError.error}`);
            }

        } catch (error) {
            console.error("Error sending order request:", error);
            setErrorMessage("An error occurred while sending the order request.");
        } finally {
            setIsLoading(false);
        }
    };


    if (formSubmitted) {
        return (
            <div className="bg-white h-[90vh] w-[90vw] p-8 flex flex-col items-center justify-center rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center">Order Request Sent</h2>
                <p className="text-lg text-center mt-4 mb-6">You will receive a confirmation call/text from the restaurant within the next 18 hours. To directly contact the restaurant, click the button below.</p>
                <button
                    className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
                >
                    <a href="tel:+16516832722">Place a call</a>
                </button>
            </div>
        );
    }

    return (
        <div className="max-h-screen overflow-y-scroll w-full flex justify-center z-[40] absolute ">
            <div className="bg-[#130902] rounded-2xl text-white py-[5%] px-[6%] w-full max-w-[700px] flex flex-col items-center justify-center m-5 min-h-fit"
                style={{ backgroundImage: "url('bgPattern.png')", backgroundSize: "auto" }}
            >
                <h2 className="text-3xl font-semibold mb-6 text-center">Order Request Form</h2>
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-2 p-3 w-full border bg-background text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-lg font-medium">Location (Minnesota only):</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            className="mt-2 p-3 w-full border bg-background text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="deliveryDate" className="block text-lg font-medium">Delivery Date:</label>
                        <input
                            type="date"
                            id="deliveryDate"
                            value={deliveryDate}
                            onChange={(e) => setDeliveryDate(e.target.value)}
                            required
                            className="bg-background text-black mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="deliveryTime" className="block text-lg font-medium">Delivery Time:</label>
                        <input
                            type="time"
                            id="deliveryTime"
                            value={deliveryTime}
                            onChange={(e) => setDeliveryTime(e.target.value)}
                            required
                            className="bg-background text-black mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="mobile" className="block text-lg font-medium">Mobile Number:</label>
                        <input
                            type="tel"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                            className="bg-background text-black mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-background text-black mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full mt-6 px-6 py-3 bg-button text-white rounded-lg shadow-lg hover:bg-inherit border-2 border-button transition duration-200"
                    >
                        {isLoading ? "Submitting..." : "Proceed"}
                    </button>
                </form>
            </div>
        </div>
    );
}
