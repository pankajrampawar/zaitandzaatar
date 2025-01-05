'use client'
import PopUpCard from "@/app/ui/popUpCard";
import { useState } from "react";
import Image from "next/image";

export default function Checkout({ itemsInCart }) {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const togglePopUp = () => {
        setIsPopUpOpen(prev => !prev);
    }


    return (
        <div className="bg-gray-100 w-full max-w-md p-4 shadow-md rounded-md xl:w-[300px] max-h-[80vh] h-full flex flex-col overflow-hidden ">
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
                isPopUpOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg flex justify-center items-center z-50">
                        <PopUpCard itemsInCart={itemsInCart} />
                        <button
                            onClick={togglePopUp}
                            className="absolute top-5 right-5 bg-gray-800 text-white rounded-full p-2 z-50"
                        >
                            <Image
                                src="/close.svg"
                                alt="close"
                                width="20"
                                height="20"
                                className="invert"
                            />
                        </button>
                    </div>
                )
            }

        </div>
    );
}
