'use client'
import PopUpCard from "@/app/UI/popUpCard";
import { useState } from "react";
import Image from "next/image";

export default function Checkout({ itemsInCart }) {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const togglePopUp = () => {
        setIsPopUpOpen(prev => !prev);
    }


    return (
        <div className="bg-gray-100 w-full max-w-md p-4 shadow-md rounded-md xl:w-[300px] max-h-[80vh] h-full flex flex-col overflow-hidden">
            <section className="flex-1 flex flex-col overflow-y-auto">
                <div className="flex justify-between font-semibold mb-2">
                    <span>Item</span>
                    <span>Qty</span>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {itemsInCart.map((item) => (
                        <div key={item.name} className="flex justify-between py-1 text-sm">
                            <span>{item.name}</span>
                            <span>{item.quantity}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full p-4">
                <section className="border-t border-gray-300 mt-4 pt-4">
                    <button className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600" onClick={togglePopUp}>Place Order Request</button>
                </section>
            </section>


            {
                isPopUpOpen &&
                <div className="backdrop-blur-xl top-0 left-0 w-screen h-screen z-[100] fixed flex justify-center items-center">
                    <PopUpCard itemsInCart={itemsInCart} />
                    <div className="absolute top-0 right-0 m-5">
                        <button onClick={togglePopUp}>
                            <Image
                                src="/close.svg"
                                alt="close"
                                width="50"
                                height="50"
                                className="invert max-w-[20px] sm:invert-0 sm:max-w-none"
                            />
                        </button>
                    </div>
                </div>
            }
        </div>
    );
}
