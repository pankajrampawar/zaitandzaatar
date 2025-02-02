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
        <div className="h-screen flex justify-center items-center text-primary mx-[5%]">
            <motion.div
                className="w-full flex justify-between items-center"
                initial="hidden"
                animate="visible"
            >
                {/* Left Section */}
                <section className="flex-1 flex flex-col gap-4">
                    <motion.div
                        className={`${poppins.className} text-[64px] font-light text-primary tracking-wide leading-tight`}
                        variants={textVariants}
                        custom={0.5} // Delay for this section
                    >
                        <h1>
                            Nourishing <span className="italic font-normal tracking-normal">Lives,</span> <br />
                            Igniting <span className="italic tracking-normal font-normal">Hopes.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        className={`${lora.className} text-lg tracking-wide leading-relaxed flex flex-col gap-2`}
                        variants={textVariants}
                        custom={0.7} // Delay for this section
                    >
                        <p>
                            Hunger knows no boundaries, but neither does kindness. Your support turns empathy into action, one meal at a time.
                        </p>

                        <p className="font-medium italic">Start making a difference.</p>
                    </motion.div>

                    <motion.div
                        variants={textVariants}
                        custom={0.9} // Delay for the button
                    >
                        <button
                            onClick={() => { router.push('/h4h/buyAMeal') }}
                            className={`${poppins.className} bg-primary text-secondary p-2 rounded-md text-lg mt-2`}
                        >
                            Buy a Meal
                        </button>
                    </motion.div>
                </section>

                {/* Right Section */}
                <motion.section
                    className="flex-1 p-10 flex justify-end"
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-zinc-800/40 min-w-[430px] max-w-[430px] min-h-[500px] rounded-xl"
                    >
                        <Image
                            src="/childFood.jpg"
                            alt="child having food"
                            priority={true}
                            loading="eager"
                            quality={100}
                            width={430}
                            height={500}
                            className="rounded-xl"
                        />
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default H4hHeroSection;