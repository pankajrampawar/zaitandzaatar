'use client'
import DesktopMenu from "../components/menu/desktopMenu";
import { anek_gujarati, merienda } from "../fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Menu() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="mt-10">
            <section className={`${anek_gujarati.className} text-4xl md:text-5xl xl:text-6xl sm:mx-none w-full text-center font-semibold tracking-wide`}>
                <div>Explore the Complete Range of</div>
                <div className="mt-2 xl:mt-4">
                    <span className="text-white px-2 relative">
                        <span className="relative z-10">OUR MENU</span>
                        <motion.div
                            ref={ref}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "105%" } : {}}
                            transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                        />
                    </span>
                </div>
            </section >

            <section>
                <DesktopMenu />
            </section>
        </div >
    )
}