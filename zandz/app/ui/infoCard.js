'use client'
import Image from "next/image"
import { anek_gujarati, lato, merienda } from "../fonts"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ImageTextCard({ imgSource, altProp, title, subTitle, Details, buttonText, buttonFunction, isImageLeft, third, second }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex flex-col md:flex-row mx-[5%] items-center justify-between gap-[40px] py-[40px] ">
            <div className={`${!isImageLeft ? "md:order-2" : "md:order-1 justify-start"} flex-1 flex `}>
                <div >
                    <Image
                        src={imgSource}
                        alt={altProp}
                        width={400}
                        height={800}
                        className=" max-h-[250px] md:max-h-none min-[1380px]:min-h-[700px] xl:min-w-[520px] min-[1380px]:min-w-[619px] rounded-[40px] object-cover"
                    />
                </div>
            </div>

            <div className={`${!isImageLeft ? "md:order-1" : "md:order-2"} flex-1 flex flex-col gap-6 xl:gap-12`}>
                <h2 className={`${anek_gujarati.className} text-5xl leading-tight md:text-6xl md:leading-tight xl:text-7xl xl:leading-tight sm:mx-none w-full tracking-wide font-bold`}>
                    {title}<br />
                    <div className="relative min-[380px]:block">
                        <span className="text-white min-[380px]:relative whitespace-pre-line">
                            <span className="relative z-10">{third ? "Become \na member" : second ? "Buy a \nGift Card" : subTitle}</span>
                            <motion.div
                                ref={ref}
                                className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "105%" } : {}}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            />
                        </span>
                    </div>
                </h2>
                <article className={`${lato.className} text-sm sm:text-lg xl:text-[24px] text-gray-800 max-w-[600px]  xl:tracking-wide xl:leading-normal`}>
                    {Details}
                </article>
                <div className={`${lato.className}`}>
                    <button onClick={() => buttonFunction()} className={`bg-button hover:bg-transparent border-2 border-button hover:text-black text-white py-2 px-4 lg:min-w-[155px] hover:rounded-xl transition-all ease-in-out duration-300 md:text-xl ${lato.className} font-bold tracking-wide`}>{buttonText}</button>
                </div>
            </div>
        </div>

    )
}