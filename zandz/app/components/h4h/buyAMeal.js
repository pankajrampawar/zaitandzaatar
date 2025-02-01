'use client'

import Image from "next/image";
import UiCard from "@/app/h4h/uiCard";
import { poppins } from "@/app/fonts";
import { animate, motion } from "framer-motion";
import { easeInOut } from "motion";

export default function BuyAMeal() {
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
        <div className="bg-primary text-secondary h-screen px-[5%] py-10 leading-normal relative">

            <div className="absolute top-0 right-0">
                <Image
                    src="/circles.svg"
                    alt="illustrations of circle"
                    width={400}
                    height={400}
                    className="opacity-60"
                />
            </div>

            <motion.div className="absolute bottom-0 right-32"
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
                />
            </motion.div>

            <div>
                <h2 className={`text-5xl ${poppins.className} font-thin`}>
                    How Your Generosity <br />
                    <span className="relative flex items-center">
                        Feeds <span className="italic font-medium ml-3"> Hope.</span>

                        <div>
                            <Image
                                src="/handHeart.svg"
                                alt="Hand with a heart above it depicting kindness and sharing love"
                                width="100"
                                height="100"
                            />
                        </div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 280 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            viewport={{ once: true, amount: 0.3, }}
                            className="absolute bg-secondary/60 min-h-[4px] top-[90px] w-[280px] left-0">

                        </motion.div>
                    </span>
                </h2>
            </div>

            <div className="flex justify-between mt-[200px]">
                {[ // Array for easier mapping
                    {
                        title: "Share Your Generosity",
                        img: "/donation.svg",
                        alt: "hand with heart",
                        description: "Your giving starts here, you buy a meal of your choice. Donate a meal and spread kindness",
                        number: "1",
                    },
                    {
                        title: "We Deliver to Those Who Need",
                        img: "/plate.svg",
                        alt: "hand with heart",
                        description: "We bring hope to their doorstep, Your Meal Our Mission",
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
                        custom={index} // Pass index to variants
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3, }}
                        variants={cardVariant}
                        style={{ bottom: index * 70 }} // Adjust positions dynamically
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
        </div >
    );
}