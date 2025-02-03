import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
    try {
        const { amount, items, userInfo } = await request.json();

        // Inside your current payment intent creation API
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
            metadata: {
                restaurant: false,
                items: JSON.stringify(items),
                name: userInfo.name,
                email: userInfo.email,
            },
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error("Internal Error:", error);
        // Handle other errors (e.g., network issues, parsing errors)
        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}