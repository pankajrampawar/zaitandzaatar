'use client'
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function H4hNavbar() {

    const pathname = usePathname()
    const router = useRouter();

    return (
        <div className="flex justify-between px-[5%] w-screen text-xl my-5 fixed top-0 text-primary">
            <div>H4H</div>
            <div className="flex gap-4">
                <button
                    onClick={(() => { router.push('/h4h') })}
                >
                    Home
                </button>
                <button
                    onClick={() => { router.push('/h4h/buyAMeal') }} className="underline underline-offset-4"

                >
                    Buy a Meal
                </button>
            </div>
        </div>
    )
}