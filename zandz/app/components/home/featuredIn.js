'use client'

import { anek_gujarati, merienda } from "@/app/fonts"
import Image from "next/image"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function FeaturedIn() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col items-center mt-20 sm:mt-[10%] w-full max-w-[1440px] relative z-10">
            <h2 className={`${anek_gujarati.className} text-4xl md:text-5xl xl:text-7xl font-bold tracking-wide  text-white`}>
                <span className="relative">
                    <span className="text-white relative z-10">FEATURED IN</span>
                    <motion.div
                        ref={ref}
                        className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "105%" } : {}}
                        transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                    />
                </span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 min-[420px]:gap-8 mt-[1rem] xl:mt-[2.5rem] w-full xl:mx-[5%]">
                <div className="sm:flex-1 flex justify-center items-center">
                    <Image
                        src="/sahanJournal.png"
                        alt="Sahan Journal Logo"
                        height="50"
                        width="215"
                        className="max-w-[150px] md:max-w-[180px] xl:max-w-none"
                    />
                </div>

                <div className="sm:flex-1 flex justify-center items-center">
                    <Image
                        src="/eaterLogo.png"
                        alt="Eater Logo"
                        height="40"
                        width="260"
                        className="max-w-[150px] md:max-w-[180px] xl:max-w-none"
                    />
                </div>

                <div className="w-full min-[540px]:w-fit sm:w-max flex items-center justify-center min-[624px]:mt-0 -mt-3 flex-1">
                    <Image
                        src="/Nstar.png"
                        alt="Neighborhood Star Logo"
                        height="80"
                        width="405"
                        className="max-w-[260px] xl:max-w-[340px] "
                    />
                </div>
            </div>
        </div>
    )
}