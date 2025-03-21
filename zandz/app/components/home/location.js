'use client';
import { merienda, lato, anek_gujarati } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function Location() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col items-center w-full">
            <div className={`${anek_gujarati.className} text-5xl md:text-6xl xl:text-7xl tracking-wide pb-4 md:pb-[80px] font-bold  pt-[100px] xl:pt-[120px]`}>
                <span>
                    <span className="relative">
                        <span className="relative z-10 text-white">Location</span>
                        <motion.div
                            ref={ref}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "105%" } : {}}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        />

                    </span>
                </span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center max-w-[1440px] gap-6 p-4 mx-[5%] w-full  ">
                <section className="flex-1 md:max-w-[600px]">
                    <div className="relative w-full pt-[56.25%]"> {/* Aspect ratio 16:9 */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1065.7740493943295!2d-93.16991541912473!3d44.94649122385986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62a1ab7273d75%3A0x6fb85cffbf79f9ec!2sZait%20%26%20Za&#39;atar%3A%20Mediterranean%20Dhaba!5e1!3m2!1sen!2sin!4v1735768260108!5m2!1sen!2sin"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute top-0 left-0 w-full h-full border-0"
                        ></iframe>
                    </div>
                </section>
                <section className="flex-1 space-y-4 flex flex-col md:pl-[5%] md:max-w-fit">
                    <div>
                        <h3 className={`text-2xl tracking-wide font-bold ${anek_gujarati.className}`}>Address</h3>
                        <p className={`${lato.className}`}>1626 Selby Ave St Paul MN 55104</p>
                    </div>

                    <div>
                        <h3 className={`text-2xl tracking-wide font-bold ${anek_gujarati.className}`}>Operating Hours</h3>
                        <p className={`${lato.className}`}>Open from 10am - 9pm</p>
                        <p className={`${lato.className}`}>Pickup and delivery available</p>
                    </div>

                    <div>
                        <h3 className={`text-2xl tracking-wide font-bold ${anek_gujarati.className}`}>Contact</h3>
                        <a href="tel:+16514937438" className="hover:text-red-600 flex cursor-pointer"><span className={`${lato.className} flex items-center w-full gap-3 cursor-pointer`}><img src="/phone.svg" className="max-w-[30px]" /><div>+1 651-493-7438</div></span></a>
                    </div>
                </section>
            </div>
        </div>
    );
}
