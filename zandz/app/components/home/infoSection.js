'use client'
import { anek_gujarati, lato } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InfoSection() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-4 md:gap-8 max-w-[1560px] px-[5%]">
            <article className="flex-1 max-w-[546px]">
                <div className={`${lato.className} text-xl mb-[3%]`}>
                    What is
                </div>
                <div className={` ${anek_gujarati.className} text-3xl min-[500px]:text-5xl xl:text-6xl font-semibold leading-snug tracking-wide`}>
                    <h2>
                        <span className=" text-white px-2 relative">
                            <span className="relative z-10">ZAIT & ZA'ATAR</span>
                            <motion.div
                                ref={ref}
                                className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "102%" } : {}}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            />
                        </span>
                        <div className="pt-4 sm:pt-6 text-2xl min-[500px]:text-4xl sm:text-5xl">MEDITERRANEAN DHABA</div>
                    </h2>
                </div>
            </article>

            <article className={`flex-1 flex flex-col gap-4 text-sm lg:text-lg ${lato.className}`}>

                <div>
                    "Zait" is Arabic for "olive oil," a cornerstone of Mediterranean cooking, symbolizing richness, health, and authenticity. "Za'atar" is a fragrant spice blend made from dried herbs like thyme, sumac, and sesame seeds, cherished in Middle Eastern cuisine for its distinctive, aromatic touch that elevates any dish. Together, "Zait & Za'atar" captures the essence of Mediterranean and Middle Eastern flavors, offering a taste experience like no other.
                </div>

                <div>
                    The word "dhaba" is a Hindi term referring to a traditional roadside eatery in South Asia, known for serving wholesome, flavorful meals in a warm and welcoming atmosphere. At Zait & Za'atar, we bring this spirit to life by combining the comfort of a dhaba with the vibrant, authentic flavors of the Mediterranean and Middle East.
                </div>
                <div>
                    Our menu is brimming with mouthwatering shawarmas, crispy falafels, fresh salads, and flavorful wraps. Each dish is thoughtfully prepared with high-quality ingredients and traditional recipes, delivering a delightful culinary adventure for your taste buds. Whether you’re savoring a shawarma sandwich or enjoying vegetarian options like falafel wraps, Zait & Za'atar offers something for everyone.
                    If you’re ready to explore new culinary horizons and indulge in dishes bursting with bold, authentic flavors, Zait & Za'atar Mediterranean Dhaba is the perfect destination.
                </div>
            </article>
        </section>
    )
}