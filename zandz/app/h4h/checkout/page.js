"use client";

import CheckoutPage from "@/app/components/checkOutComponent";
import CheckoutPageH4h from "@/app/components/h4h/checkoutComponentH4H";
import convertToSubcurrency from "@/app/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {
    const [user, setUser] = useState(null);
    const [donation, setDonation] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedUser = localStorage.getItem('DonorInfo');
        const storedDonation = localStorage.getItem('Donation');

        if (storedUser) {
            const userInfo = JSON.parse(storedUser);
            setUser(userInfo);
        }

        if (storedDonation) {
            const parsedDonation = JSON.parse(storedDonation);
            setDonation(parsedDonation);
        }
    }, []);

    useEffect(() => {
        if (donation) {
            const updatedItems = [
                ...(donation.individual > 0 ? [{ name: 'individual', quantity: donation.individual, price: 10.99 }] : []),
                ...(donation.family > 0 ? [{ name: 'family', quantity: donation.family, price: 39.99 }] : [])
            ];
            setItems(updatedItems);
        }
    }, [donation]);

    // Only render the Elements component if the user and donation data are loaded
    if (!user || !donation) {
        return (
            <main className="max-w-6xl mt-[10%] w-full mx-auto p-10 text-white text-center border m-10 rounded-md bg-[#130902]" style={{ backgroundImage: "url('/bgPattern.png')", backgroundSize: "auto" }}>
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold mb-2">Zait & Za'atar</h1>
                    <h2 className="text-2xl">Loading user and donation information...</h2>
                </div>
            </main>
        );
    }

    // Proceed with the checkout flow
    const finalAmount = convertToSubcurrency(items.reduce((acc, item) => acc + item.price * item.quantity, 0));

    return (
        <main className="max-w-6xl mt-[10%] w-full mx-auto p-10 text-white text-center border m-10 rounded-md bg-primary" >
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2"><span>H4H</span></h1>
                <h2 className="text-2xl">
                    has requested
                    <span className="font-bold"> ${finalAmount / 100}</span>
                </h2>
            </div>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: finalAmount,
                    currency: "usd",
                }}
            >
                <CheckoutPageH4h amount={finalAmount / 100} userInfo={user} items={items} />
            </Elements>
        </main>
    );
}