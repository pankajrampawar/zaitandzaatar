"use client";

import CheckoutPage from "@/app/components/checkOutComponent";
import convertToSubcurrency from "@/app/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "@/app/context/cart";
import { useEffect, useState } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home() {

    const [user, setUser] = useState();

    useEffect(() => {
        const storedUser = localStorage.getItem('userInfo')
        const userInfo = JSON.parse(storedUser)
        setUser(userInfo)
    }, [])

    const { items, finalTotal } = useCart();
    const amount = finalTotal
    const finalAmount = convertToSubcurrency(amount)

    return (
        <main className="max-w-6xl mt-[10%] w-full mx-auto p-10 text-white text-center border m-10 rounded-md bg-[#130902]" style={{ backgroundImage: "url('/bgPattern.png')", backgroundSize: "auto" }}>
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2">Zait & Za'atar</h1>
                <h2 className="text-2xl">
                    has requested
                    <span className="font-bold"> ${finalAmount / 100}</span>
                </h2>
            </div>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                }}
            >
                <CheckoutPage amount={finalAmount / 100} userInfo={user} items={items} />
            </Elements>
        </main>
    );
}