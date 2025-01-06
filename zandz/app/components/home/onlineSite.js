'use client'

import Image from "next/image"
import { anek_gujarati, merienda } from "@/app/fonts"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OnlineSite() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            className="relative w-[95vw] h-[80vh] min-h-[700px] max-h-[900px] rounded-[40px] flex flex-col items-center py-[4%] xl:pt-[10%] gap-10 md:gap-14 lg:gap-16 xl:gap-20 mt-20 sm:mt-[10%] overflow-clip"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/bg3.png')" }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#36312e67]"></div>

            <div className="relative">
                <h2 className={`${anek_gujarati.className} text-white xl:w-full text-5xl md:text-6xl md:leading-normal xl:text-7xl xl:leading-tight text-center sm:mx-none w-full font-bold tracking-wide leading-loose`}>
                    ENJOY <span className="relative">
                        <span className="relative z-10">OUR FOOD</span>
                        <motion.div
                            ref={ref}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "105%" } : {}}
                            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                        />
                    </span> FROM <br className="hidden xl:flex" />COMFORT OF <span className="relative">
                        <span className="relative z-10">YOUR HOME</span>
                        <motion.div
                            ref={ref}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "105%" } : {}}
                            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                        />
                    </span>
                </h2>
            </div>

            <div className="relative flex flex-col md:flex-row px-[10%] justify-evenly w-full items-center gap-4">
                <a href="order.online/store/24509526?slug=-11399864&pickup=true&hideModal=true&redirected=true" target="_blank" className="hover:cursor-pointer">
                    <div>
                        <Image
                            src="/doordash.png"
                            alt="doordash logo"
                            width='341'
                            height='65'
                            className="max-w-100px"
                        />
                    </div>
                </a>
                <a className="cursor-pointer" href="https://www.order.store/store/zait-%26-zaatar/AkhJK0DPUuqNMNVUqNjsfg" target="_blank">
                    <div>
                        <Image
                            src="/uberEats.png"
                            alt="uber eats logo"
                            width='263'
                            height='73'
                            className="max-w-100px"
                        />
                    </div>
                </a>
                <a className="cursor-pointer" href="https://zaitzaatar.dine.online" target="_blank">
                    <div>
                        <Image
                            src="/grubhub.png"
                            alt="grubhub logo"
                            width='223'
                            height='82'
                            className="max-w-100px"
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}
