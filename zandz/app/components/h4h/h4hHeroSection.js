'use client';

import Image from "next/image";
import { lora, poppins } from "@/app/fonts";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const H4hHeroSection = () => {
    const router = useRouter();

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
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
                ease: "easeOut"
            },
        }),
    };

    return (
        <div className="min-h-screen flex justify-center items-center text-primary px-4 sm:px-6 md:px-[5%] py-20 md:pt-12">
            <motion.div
                className="w-full flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4"
                initial="hidden"
                animate="visible"
            >
                {/* Left Section */}
                <section className="flex-1 flex flex-col gap-4 text-center lg:text-left">
                    <motion.div
                        className={`${poppins.className} text-4xl sm:text-5xl md:text-[64px] font-light text-primary tracking-wide leading-tight`}
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
                            onClick={() => { router.push('/h4h/buyAMeal') }}
                            className={`${poppins.className} bg-primary text-secondary px-6 py-3 rounded-md text-lg mt-2 hover:opacity-90 transition-opacity`}
                        >
                            Buy a Meal
                        </button>
                    </motion.div>
                </section>

                {/* Right Section */}
                <motion.section
                    className="flex-1 p-4 sm:p-6 lg:p-10 flex justify-center lg:justify-end"
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-zinc-800/40 w-full max-w-[350px] sm:max-w-[430px] min-h-[400px] sm:min-h-[500px] rounded-xl"
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