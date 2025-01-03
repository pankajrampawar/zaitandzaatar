"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
    const handleSignIn = async () => {
        try {
            await signIn("google");
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <button onClick={handleSignIn} type="button">
            Sign in
        </button>
    );
}
