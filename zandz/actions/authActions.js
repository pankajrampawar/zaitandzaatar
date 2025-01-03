"use server";

import { signIn } from "@/auth";

export async function handleSignIn(provider) {
    await signIn(provider); // signin
}
