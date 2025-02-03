'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function H4hNavbar() {

    const pathname = usePathname()
    const router = useRouter();

    return (
        <div className="flex justify-between px-[5%] w-screen text-xl py-2 fixed top-0 text-primary z-50 bg-secondary/20 backdrop-blur-sm">
            <button onClick={() => { router.push('/h4h') }}>
                <Image
                    src="/logoh4h.png"
                    alt="Logo for h4h"
                    width={100}
                    height={100}
                />
            </button>
            <div className="flex gap-4">
                <button
                    onClick={(() => { router.push('/h4h') })} className={`${pathname === '/h4h' ? "hidden" : ""}`}
                >
                    Home
                </button>
                <button
                    onClick={() => { router.push('/h4h/buyAMeal') }} className={`underline underline-offset-4 ${pathname === '/h4h/buyAMeal' ? "hidden" : ""}`}

                >
                    Buy a Meal
                </button>
            </div>
        </div>
    )
}