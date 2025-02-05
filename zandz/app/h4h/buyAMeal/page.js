"use client";

import { motion } from "framer-motion";
import { lora, poppins } from "@/app/fonts";
import { HeartSvg } from "@/app/components/h4h/heart";
import { MealCard } from "@/app/components/h4h/mealCard";
import { ArrowLeftIcon } from "lucide-react";
import H4hNavbar from "@/app/components/h4h/h4hNavbar";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import PopupForm from "@/app/components/h4h/popupForm";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

export default function BuyAMeal() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [checkOut, setCheckout] = useState(false);
    const [mealCount, setMealCount] = useState({ individual: 0, family: 0 });
    const [totalAmount, setTotalAmount] = useState(0);
    const [popupForm, setShowPopupForm] = useState(false);

    const addMeal = (type) => {
        const newMealCount = {
            ...mealCount,
            [type]: mealCount[type] + 1
        };
        setMealCount(newMealCount);
        setTotalAmount(Number((newMealCount.individual * 10.99 + newMealCount.family * 39.99).toFixed(2)));
    };

    const removeMeal = (type) => {
        const newMealCount = {
            ...mealCount,
            [type]: mealCount[type] > 0 ? mealCount[type] - 1 : 0
        }
        setMealCount(newMealCount);
        setTotalAmount(Number((newMealCount.individual * 10.99 + newMealCount.family * 39.99).toFixed(2)));
    }

    const calculateTax = () => {
        return Number((totalAmount * 0.09875).toFixed(2));
    };

    const handleCheckOut = () => {
        if (session?.user) {
            handleGuestSubmit({ email: session.user.email, name: session.user.name });
        } else {
            setShowPopupForm(true)
        }
    }

    const handleGuestSubmit = ({ email, name }) => {
        localStorage.setItem('DonorInfo', JSON.stringify({ email, name }));
        localStorage.setItem("Donation", JSON.stringify(mealCount))
        router.push('/h4h/checkout')
    }

    if (checkOut) {
        return (
            <div className="bg-secondary text-primary min-h-screen absolute w-full left-0 top-0 p-4 sm:p-6 md:p-[3%]">
                <div
                    className="absolute inset-0 w-full h-full "
                    style={{
                        backgroundImage: "url('/h4hBgPattern.png')",
                        backgroundSize: "auto",
                        backgroundPosition: "center",
                        opacity: 0.5,
                    }}
                ></div>
                <button className="flex items-center gap-2" onClick={() => { setCheckout(false) }}>
                    <ArrowLeftIcon />
                    <span>Go Back</span>
                </button>

                <div className="flex items-center justify-center gap-4 my-8 sm:my-14 px-4">
                    <h1 className={`text-xl sm:text-2xl ${poppins.className} font-medium text-center leading-relaxed tracking-wide`}>
                        Your donation will help us serve {mealCount.individual + mealCount.family * 4} souls <br className="hidden sm:block" /> Thank you for making a difference!
                    </h1>
                </div>

                <div className="w-full flex justify-center items-center p-4 relative z-20">
                    <section className={`bg-white shadow-lg hover:shadow-xl p-4 sm:p-6 gap-4 rounded-xl w-full flex items-start flex-col max-w-[420px] ${lora.className}`}>
                        <div className="mb-2">
                            <h2 className={`${poppins.className} font-medium text-xl sm:text-2xl`}>Your Donation Summary</h2>
                        </div>

                        <div className="flex flex-col w-full gap-1 pb-3 border-b">
                            {mealCount.individual > 0 &&
                                <div className="flex justify-between w-full">
                                    <p>Individual Meal</p>
                                    <p className="flex gap-2">
                                        <span>{mealCount.individual}</span>
                                        <span>x</span>
                                        <span>10.99</span>
                                    </p>
                                </div>
                            }
                            {mealCount.family > 0 &&
                                <div className="flex justify-between w-full">
                                    <p>Family Meal</p>
                                    <p className="flex gap-2">
                                        <span>{mealCount.family}</span>
                                        <span>x</span>
                                        <span>39.99</span>
                                    </p>
                                </div>
                            }
                        </div>

                        <div className="w-full flex flex-col gap-1 pb-3 border-b">
                            <div className="flex w-full justify-between">
                                <p>Subtotal:</p>
                                <p>${totalAmount}</p>
                            </div>
                            <div className="flex w-full justify-between text-base font-normal text-primary/80">
                                <p>Tax (9.875%):</p>
                                <p>${calculateTax().toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <div className="flex justify-between">
                                <p>Total Amount:</p>
                                <p>${(Number(totalAmount) + Number(calculateTax())).toFixed(2)}</p>
                            </div>

                            <button onClick={handleCheckOut} className={`bg-primary text-secondary ${poppins.className} text-lg sm:text-xl p-3 rounded-lg w-full`}>
                                Proceed To Checkout
                            </button>
                        </div>
                    </section>
                </div>

                {popupForm &&
                    <PopupForm onClose={() => { setShowPopupForm(false) }} onSubmit={(info) => handleGuestSubmit(info)} />
                }
            </div>
        )
    }

    return (
        <div className="bg-secondary text-primary min-h-screen absolute top-0 w-full pb-32 sm:pb-60">
            <H4hNavbar />
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('/h4hBgPattern.png')",
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                    opacity: 0.5,
                }}
            ></div>

            {/* Header Section */}
            <motion.article
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex flex-col items-center justify-center text-center gap-4 mt-20 sm:mt-40 px-4"
            >
                <div className="flex items-center justify-center gap-2 sm:gap-4">
                    <h1 className={`text-3xl sm:text-4xl md:text-5xl ${poppins.className} font-medium`}>
                        Your kindness feeds many.
                    </h1>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        <HeartSvg />
                    </motion.div>
                </div>

                <p className={`${lora.className} text-lg sm:text-xl tracking-wide max-w-[800px] px-4`}>
                    Your generosity can make a difference. Choose a meal package below to
                    help someone in need enjoy a warm, nutritious meal.
                </p>
            </motion.article>

            {/* Cards Section */}
            <motion.section
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="flex gap-4 justify-center items-center mt-10 sm:mt-20 relative flex-col px-4"
            >
                <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-20 w-full max-w-[880px]">
                    <MealCard
                        title="Individual Meal"
                        description="Provide a nutritious meal for one person"
                        price="$10.99"
                        priceLabel="meal"
                        features={[
                            "Complete balanced meal",
                            "Fresh ingredients",
                            "Helps one person in need",
                        ]}
                        mealCount={mealCount.individual}
                        addMeal={() => { addMeal('individual') }}
                        removeMeal={() => { removeMeal('individual') }}
                        buttonText="Donate Individual Meal"
                    />
                    <MealCard
                        title="Family Meal Package"
                        description="Feed an entire family with a hearty meal"
                        price="$39.99"
                        priceLabel="meal"
                        features={[
                            "Complete balanced meal",
                            "Fresh ingredients",
                            "Feeds a family of 4-5",
                        ]}
                        mealCount={mealCount.family}
                        addMeal={() => { addMeal('family') }}
                        removeMeal={() => { removeMeal('family') }}
                        buttonText="Donate Family Meal"
                    />
                </div>

                {/* Donation summary */}
                {totalAmount > 0 && (
                    <motion.div
                        className="fixed bottom-6 sm:bottom-20 left-4 right-4 sm:left-auto sm:right-24 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <button
                            className={`bg-primary text-white tracking-wide font-medium text-lg sm:text-xl p-3 rounded-lg relative overflow-hidden w-full sm:w-auto ${poppins.className}`}
                            onClick={() => setCheckout(true)}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 transition-opacity duration-1000 hover:opacity-50 animate-shimmer"></span>
                            <span className="relative z-10">Checkout</span>
                        </button>
                    </motion.div>
                )}
            </motion.section>
        </div>
    );
}