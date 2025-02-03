'use client'

import Image from "next/image";
import UiCard from "@/app/h4h/uiCard";
import { poppins } from "@/app/fonts";
import { animate, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function BuyAMeal() {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // Determine screen size on client side
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        return () => {
            // Cleanup event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Animation variants
    const cardVariant = {
        hidden: { blur: 10, opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            blur: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: index * 0.5,
            },
        }),
    };

    return (
        <div className="bg-primary text-secondary min-h-screen px-4 sm:px-6 md:px-[5%] py-8 md:py-10 leading-normal relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 -z-0">
                <Image
                    src="/circles.svg"
                    alt="illustrations of circle"
                    width={400}
                    height={400}
                    className="opacity-60 w-[200px] sm:w-[300px] md:w-[400px]"
                />
            </div>

            <motion.div
                className="absolute bottom-0 right-8 sm:right-16 md:right-32 -z-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Image
                    src="/plant.svg"
                    alt="Illustration of plant"
                    width={100}
                    height={100}
                    className="w-[60px] sm:w-[80px] md:w-[100px]"
                />
            </motion.div>

            {/* Main content */}
            <div className="relative z-10">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl ${poppins.className} font-thin`}>
                    How Your Generosity <br />
                    <span className="relative flex flex-wrap items-center gap-3">
                        Feeds <span className="italic font-medium">Hope.</span>

                        <div className="ml-auto sm:ml-0">
                            <Image
                                src="/handHeart.svg"
                                alt="Hand with a heart above it depicting kindness and sharing love"
                                width={100}
                                height={100}
                                className="w-[60px] sm:w-[80px] md:w-[100px]"
                            />
                        </div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="absolute bg-secondary/60 min-h-[4px] top-[60px] sm:top-[70px] md:top-[90px] w-full max-w-[280px] left-0"
                        />
                    </span>
                </h2>
            </div>

            {/* Cards section */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 mt-20 sm:mt-32 lg:mt-[200px]">
                {[
                    {
                        title: "Share Your Generosity",
                        img: "/donation.svg",
                        alt: "hand with heart",
                        description: "Your giving starts here, you buy a meal of your choice. Donate a meal and spread kindness",
                        number: "1",
                    },
                    {
                        title: "We serve to Those Who Need",
                        img: "/plate.svg",
                        alt: "hand with heart",
                        description: "We bring food to there table, Your Meal Our Mission",
                        number: "2",
                    },
                    {
                        title: "You Make a Difference.",
                        img: "/share.svg",
                        alt: "hand with heart",
                        description: "Your Contribution Their Future, Together We Make an Impact.",
                        number: "3",
                    },
                ].map((card, index) => (
                    <motion.div
                        key={card.number}
                        className="relative"
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={cardVariant}
                        style={{
                            bottom: index * (isLargeScreen ? 70 : 0),
                        }}
                    >
                        <UiCard
                            title={card.title}
                            img={card.img}
                            alt={card.alt}
                            description={card.description}
                            number={card.number}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
