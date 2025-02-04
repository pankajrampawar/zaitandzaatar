"use client";

import { motion } from "framer-motion";
import { poppins } from "@/app/fonts";
import { useRouter } from "next/navigation";

export default function Hope() {

    const router = useRouter();
    // Animation variants for the text
    const wordVariants = {
        hidden: { opacity: 0, filter: "blur(4px)" },
        visible: (i) => ({
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.25, // Stagger effect for each word
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    // Animation variants for the button
    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.5, // Delay to ensure text animation completes
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // Split sentences
    const firstSentence = "Be The Hope That Someone".split(" ");
    const secondSentence = "Needs Today".split(" ");

    return (
        <div className="h-screen flex justify-center items-center bg-secondary relative">
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('h4hBgPattern.png')",
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                    opacity: 0.5
                }}
            ></div>
            <div
                className={`text-4xl leading-tight sm:text-5xl sm:leading-normal lg:text-6xl ${poppins.className} text-center text-primary lg:leading-normal flex flex-col gap-1`}
            >
                {/* Animated First Sentence */}
                <div>
                    {firstSentence.map((word, index) => (
                        <motion.span
                            key={index}
                            custom={index} // Pass index to the animation variant
                            variants={wordVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="inline-block mr-5"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                {/* Animated Second Sentence */}
                <div className="mb-4 sm:mb-0 lg:-mb-2">
                    {secondSentence.map((word, index) => (
                        <motion.span
                            key={index}
                            custom={index + firstSentence.length} // Add offset for delay
                            variants={wordVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="inline-block mr-5"
                        >
                            {word}
                        </motion.span>
                    ))}
                </div>

                {/* Animated Button */}
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <button onClick={() => { router.push('/h4h/buyAMeal') }} className="bg-primary text-secondary text-xl p-3 rounded-md shadow-md hover:shadow-lg">
                        Gift a Meal
                    </button>
                </motion.div>
            </div>
        </div>
    );
}