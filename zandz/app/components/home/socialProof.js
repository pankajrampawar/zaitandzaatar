'use client'
import { anek_gujarati } from "@/app/fonts";
import RatingCard from "@/app/ui/ratingCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SocialProof() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="max-w-screen overflow-scroll flex flex-col items-center mt-[10%] gap-20">
            <h2 className={`${anek_gujarati.className} text-5xl leading-tight  md:text-6xl md:leading-normal xl:text-7xl xl:leading-tight text-center mx-[2%] sm:mx-none w-full font-bold tracking-wide`}>
                HEAR WHAT OUR CUSTOMERS <br />
                <span className="text-white px-2 relative">
                    <span className="relative z-10">LOVE ABOUT US</span>
                    <motion.div
                        ref={ref}
                        className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "102%" } : {}}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    />
                </span>
            </h2>
            <div className="flex overflow-x-scroll w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 z-10">
                <div className="flex w-full gap-6">
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                </div>
            </div>
        </div>
    );
}
