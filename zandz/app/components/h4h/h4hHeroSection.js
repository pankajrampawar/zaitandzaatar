'use client';

import Image from "next/image";
import { lora, poppins } from "@/app/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useEffect, useState } from "react";

const H4hHeroSection = () => {
    const router = useRouter();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // State to track screen size
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Update screen size on resize
    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 1024); // lg breakpoint
        };
        updateScreenSize(); // Initial check
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    // Transform width based on scrollYProgress only for small screens
    const dynamicWidth = useTransform(
        scrollYProgress,
        [0, 1],
        isSmallScreen ? ["10%", "150%"] : ["100%", "100%"] // Only animate width on small screens
    );

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (delay) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className="min-h-screen flex justify-center items-center text-primary px-4 sm:px-6 md:px-[5%] py-20 md:pt-12 relative">
            <div
                className="absolute inset-0 w-full h-full -z-20"
                style={{
                    backgroundImage: "url('/h4hBgPattern.png')",
                    backgroundSize: "auto",
                    backgroundPosition: "center",
                    opacity: 0.5,
                }}
            ></div>
            <motion.div
                className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4"
                initial="hidden"
                animate="visible"
            >
                {/* Left Section */}
                <section className="flex-1 flex flex-col gap-4 text-center lg:text-left">
                    <motion.div
                        className={`${poppins.className} text-4xl sm:text-5xl md:text-[64px] md:leading-tight font-light text-primary tracking-wide leading-tight`}
                        variants={textVariants}
                        custom={0.5}
                    >
                        <h1>
                            Nourishing <span className="italic font-normal tracking-normal">Lives,</span> <br className="hidden sm:block" />
                            Igniting <span className="italic tracking-normal font-normal">Hopes.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className={`${lora.className} text-base sm:text-lg tracking-wide leading-relaxed flex flex-col gap-2 max-w-2xl lg:max-w-none mx-auto lg:mx-0`}
                        variants={textVariants}
                        custom={0.7}
                    >
                        <p>
                            Hunger knows no boundaries, but neither does kindness. Your support turns empathy into action, one meal at a time.
                        </p>

                        <p className="font-medium italic">Start making a difference.</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        custom={0.9}
                        className="flex justify-center lg:justify-start"
                    >
                        <button
                            onClick={() => {
                                router.push("/h4h/buyAMeal");
                            }}
                            className={`${poppins.className} bg-primary text-secondary px-6 py-3 rounded-md text-lg mt-2 hover:opacity-90 transition-opacity`}
                        >
                            Gift a Meal
                        </button>
                    </motion.div>
                </section>

                {/* Right Section */}
                <motion.section ref={ref}
                    className="flex-1 p-4 sm:p-6 lg:p-10 flex justify-center lg:justify-end w-full overflow-hidden"
                    variants={containerVariants}
                >
                    <motion.div
                        style={{
                            width: dynamicWidth,
                        }}
                        className="bg-zinc-800/40 max-w-[350px] sm:max-w-[430px] min-h-[400px] sm:min-h-[500px] rounded-xl"
                    >
                        <Image
                            src="/childFood.jpg"
                            alt="child having food"
                            priority={true}
                            loading="eager"
                            quality={100}
                            width={430}
                            height={500}
                            className="rounded-xl w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default H4hHeroSection;