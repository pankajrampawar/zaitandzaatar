'use client'
import RamadanCard from "../ui/ramadanCard";
import { useCart } from "../context/cart";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { anek_gujarati } from "../fonts";
import { useRouter } from "next/navigation";

export default function Ramadan() {
    const { items } = useCart();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const router = useRouter();
    console.log(items)

    return (
        <div className="my-[10%] px-6 lg:px-12">
            <div className="text-center mb-12 flex flex-col gap-4">
                <p className="text-lg font-semibold">Celebrate Ramadan with Our</p>
                <h1 className={`text-4xl font-extrabold text-white ${anek_gujarati.className} text-5xl`}>
                    <span className="relative">
                        <span className="text-white relative z-10">Specially Curated Iftar Box</span>
                        <motion.div
                            ref={ref}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "105%" } : {}}
                            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                        />
                    </span>
                </h1>
                <h2 className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
                    Fresh, delicious, and thoughtfully prepared – perfect for making your Iftar gatherings truly special.
                </h2>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <RamadanCard
                    name="Middle Eastern Rice Box"
                    image="/box3.png"
                    description="Chicken Over Yellow Rice, Salad & Samosas"
                    price="11.99"
                />
                <RamadanCard
                    name="Middle Eastern Shawarma Box"
                    image="/box2.png"
                    description="Chicken Shawarma Wrap, Samosa & Drink"
                    price="10.99"
                />
                <RamadanCard
                    name="Homestyle Iftar Box"
                    image="/catering.png"
                    description="Rice Daal, Tandoori Chicken & Samosas"
                    price="12.49"
                />
                <RamadanCard
                    name="Indian Iftar Box"
                    image="/box1.png"
                    description="Description of Indian Iftar Box"
                    price="12.99"
                />
            </div>

            {items.length > 0 && (
                <motion.div
                    className="fixed right-10 bottom-20 z-50"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <motion.button
                        className="bg-red-600 text-white p-4 text-xl relative rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            boxShadow: [
                                "0 0 0px rgba(255,   255, 255, 0)",
                                "0 0 15px rgba(255, 0, 0, 1)",
                                "0 0 0px rgba(255, 255, 255, 0)"
                            ]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 1.5
                        }}

                        onClick={() => { router.push('/ramadan/cart') }}
                    >
                        Go To Cart
                        <motion.div
                            className="absolute inset-0 border-2 border-red-500 rounded-lg pointer-events-none"
                            animate={{
                                opacity: [0, 1, 0],
                                borderColor: [
                                    "rgba(255, 255, 255, 0.5)",
                                    "rgba(255, 0, 0, 1)",
                                    "rgba(255, 255, 255, 0.5)"
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 1.5
                            }}
                        ></motion.div>
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
}