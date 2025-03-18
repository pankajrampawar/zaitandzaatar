'use client'
import RamadanCard from "../ui/ramadanCard";
import { useCart } from "../context/cart";
import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { anek_gujarati } from "../fonts";
import { useRouter } from "next/navigation";
import RamdaanCard from "../ui/ramdaanCard";
import { XIcon } from "lucide-react";

export default function Ramadan() {
    const { items } = useCart();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [popup, setPopup] = useState(false);
    const router = useRouter();
    const cardRef = useRef(null);
    const individualRef = useRef(null);
    const individualInView = useInView(individualRef, { once: true });

    useEffect(() => {
        const timer = setTimeout(() => {
            setPopup(true);
        }, 12000);

        return () => clearTimeout(timer);
    }, []);

    const handleBackdropClick = (e) => {
        if (cardRef.current && !cardRef.current.contains(e.target)) {
            setPopup(false);
        }
    };

    const bulkItems = [
        { name: "Middle Eastern Rice Box", image: "/box3.jpeg", description: "Chicken Over Yellow Rice, Salad & Samosas", price: "11.99" },
        { name: "Middle Eastern Shawarma Box", image: "/box2.jpeg", description: "Chicken Shawarma Wrap, Samosa & Drink", price: "10.99" },
        { name: "Homestyle Iftar Box", image: "/box4.jpeg", description: "Rice Daal, Tandoori Chicken & Samosas", price: "12.49" },
        { name: "Indian Iftar Box", image: "/box1.jpeg", description: "Description of Indian Iftar Box", price: "12.99" },
    ];

    const individualItems = bulkItems.map(item => ({
        ...item,
        price: (parseFloat(item.price) + 0.50).toFixed(2),
    }));

    return (
        <div className="my-[10%] px-6 lg:px-12">
            {/* Header Section */}
            <div className="text-center mb-16 flex flex-col gap-6">
                <p className="text-xl font-semibold"    >Celebrate Ramadan with Our</p>
                <h1 className={`text-5xl md:text-6xl font-extrabold ${anek_gujarati.className}`} style={{ color: "#103A12" }}>
                    <div className="w-full flex justify-center">
                        <div className="relative w-fit p-[12px]">
                            <span className="relative z-10 drop-shadow-lg text-white">Specially Curated Iftar Box</span>
                            <motion.div
                                ref={ref}
                                className="absolute h-full w-[105%] top-0 left-1/2 -translate-x-1/2 rounded-lg"
                                style={{ backgroundColor: "#149954" }}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "105%" } : {}}
                                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </h1>
                <h2 className="text-xl md:text-2xl mt-4 max-w-3xl mx-auto drop-shadow-md" style={{ color: "#103A12" }}>
                    Fresh, delicious, and thoughtfully prepared – perfect for making your Iftar gatherings truly special.
                </h2>
            </div>

            {/* Bulk Orders Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pb-12"
            >
                <h2 className="text-4xl font-bold text-center mb-10 " style={{ color: "#103A12" }}>Bulk Orders</h2>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {bulkItems.map((item, index) => (
                        <motion.div
                            key={index}
                            id={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(20, 153, 84, 0.2)" }}
                        >
                            <RamadanCard
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                                type="bulk" // Added type parameter
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Divider */}
            <div className="w-full h-px my-12 relative" style={{ backgroundColor: "#149954" }}>
                <motion.div
                    className="absolute inset-0"
                    style={{ backgroundColor: "#E4312B" }}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>

            {/* Individual Orders Section */}
            <motion.div
                ref={individualRef}
                className="pb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={individualInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-bold text-center mb-10 " style={{ color: "#103A12" }}>Individual Orders</h2>
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {individualItems.map((item, index) => (
                        <motion.div
                            key={index}
                            id={index + 5}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={individualInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <RamadanCard
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                                type="individual" // Added type parameter
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Cart Button */}
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
                                "0 0 0px rgba(255, 255, 255, 0)",
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

            {/* Popup */}
            {popup && (
                <motion.div
                    className=" h-screen w-screen top-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50 fixed inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleBackdropClick}
                >
                    <motion.button
                        className="absolute top-6 right-6 md:top-10 md:right-10 p-2 rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleBackdropClick}
                        style={{ backgroundColor: "#F3FCF4" }}
                    >
                        <XIcon height={30} width={30} style={{ color: "#103A12" }} />
                    </motion.button>
                    <motion.div
                        ref={cardRef}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <RamdaanCard />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}