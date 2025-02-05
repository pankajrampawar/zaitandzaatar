'use client'
import Image from "next/image";
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function H4hNavbar() {

    const pathname = usePathname()
    const router = useRouter();

    return (
        <div className="flex justify-between px-[5%] w-screen text-xl py-2 fixed top-0 text-primary z-50 bg-secondary/20 backdrop-blur-sm lg:items-center">
            <button onClick={() => { router.push('/h4h') }}>
                <Image
                    src="/logoh4h.png"
                    alt="Logo for h4h"
                    width={100}
                    height={100}
                />
            </button>
            <div className="flex gap-4 items-center">
                <button
                    onClick={(() => { router.push('/h4h') })} className={`${pathname === '/h4h' ? "hidden" : ""}`}
                >
                    Home
                </button>
                <button
                    onClick={() => { router.push('/h4h/buyAMeal') }} className={` ${pathname === '/h4h/buyAMeal' ? "hidden" : ""} bg-primary text-secondary px-2 rounded-lg leading-none h-fit py-3`}

                >
                    Gift a Meal
                </button>
            </div>
        </div>
    )
}