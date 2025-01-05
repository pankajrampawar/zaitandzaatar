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
            <div className="flex overflow-x-scroll w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 z-10 px-10">
                <div className="flex w-full gap-6">
                    <RatingCard
                        review="I have been wanting falafel for a long time, found this place while cruising through St Paul. I got 5 orders for my family to share. Sooooo yummy. Crispy, not too greasy at all, perfect flavor. I could’ve eaten 50 of them. Tahini sauce was delicious. This was during the virus thing so had to do a quick stop, but would love to go there again when we have more time. Cute place with middle eastern flavor."
                        name="Melissa H"
                        src="/melissa.png"
                    />
                    <RatingCard
                        review="Love this place for it's simple menu, homey decor, and good food. Staff are great about explaining the flavor profiles of the different dishes. They offer samples of the unique beverages (teas and juice drinks). They really aim to please. I had the Sampler Plate as my dinner and it was a great amount of food. Definitely coming back again!"
                        name="Eric L"
                        src="/eric.png"
                    />
                    <RatingCard
                        review="The falafels are by far the best we've ever eaten, and the chicken msakhan sandwich was wonderful, really moist chicken with sauteed onions. Prices are very reasonable, and Adriana was a delight to talk with."
                        name="david43501"
                        src=""
                    />
                    <RatingCard
                        review="Zait & Za'atar has a small menu but has friendly and quick service. This place is on my way to work and I stop in often to grab a filling and delicious lunch."
                        name="Ashley F"
                        src="/ashley.png"
                    />
                    <RatingCard
                        review="What a wonderful place! The mix of Indian and Mediterranean cuisine means you get the best of everything. I love the falafel burger! The atmosphere is calm and tasteful. They also have a free library! What a plus!"
                        name="Meander34941569547"
                        src=""
                    />
                </div>
            </div>
        </div>
    );
}
