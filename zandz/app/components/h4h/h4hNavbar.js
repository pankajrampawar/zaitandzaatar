'use client'
import { useRouter } from "next/navigation"

export default function H4hNavbar() {

    const router = useRouter();

    return (
        <div className="flex justify-between px-[5%] w-screen text-xl my-5 fixed top-0 text-primary">
            <div>H4H</div>
            <button onClick={() => { router.push('/h4h/buyAMeal') }} className="underline underline-offset-4">Buy a Meal</button>
        </div>
    )
}