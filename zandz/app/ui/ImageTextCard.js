'use client'
import Image from "next/image"
import { anek_gujarati, lato, merienda } from "../fonts"
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ImageTextCardVariant({ imgSource, altProp, title, subTitle, Details, buttonText, buttonFunction, isImageLeft, third, second, cta }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const router = useRouter();
    const dropdownRef = useRef(null); // Reference for dropdown

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if click is outside the image or dropdown
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                profileImageRef.current &&
                !profileImageRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleDrawerEnter = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerLeave = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className={`flex flex-col md:flex-row mx-[5%] items-center justify-between gap-[40px] py-[40px]`}>
            <div className={`${!isImageLeft ? "md:order-2 " : "md:order-1 justify-center"} flex-1 flex`}>
                <div>
                    <Image
                        src={imgSource}
                        alt={altProp}
                        width={400}
                        height={800}
                        className="max-h-[250px] md:max-h-none min-[1380px]:min-h-[700px] xl:min-w-[520px] min-[1380px]:min-w-[619px] rounded-[40px] object-cover"
                    />
                </div>
            </div>

            <div className={`${!isImageLeft ? "md:order-1" : "md:order-2"} flex-1 flex flex-col gap-4 xl:gap-6`}>
                {/* Title Section with Background */}
                <h2 className={`${anek_gujarati.className} text-5xl leading-tight md:text-6xl md:leading-tight xl:text-7xl xl:leading-tight w-full tracking-wide font-bold`}>
                    <div className="inline-block relative">
                        <motion.div
                            ref={ref}
                            className="absolute top-0 right-0 w-full h-full bg-foreground z-0 rounded-md"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "101%" } : {}}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        ></motion.div>
                        <span
                            className="relative z-10 text-white pr-4 py-2 whitespace-pre-line"
                            style={{
                                display: "inline-block",
                            }}
                        >
                            {title}
                        </span>
                    </div>

                    <div className="text-black text-2xl md:text-4xl mt-2">
                        {subTitle}
                    </div>
                </h2>

                {/* Details Section */}
                <article className={`${lato.className} text-sm sm:text-lg xl:text-[24px] text-gray-800 max-w-[600px] xl:tracking-wide xl:leading-normal`}>
                    {Details}
                </article>

                {/* Button Section */}
                {cta && <div className={`${lato.className}`}>
                    <button
                        onClick={cta}
                        className={`bg-button hover:bg-transparent border-2 border-button hover:text-black text-white py-2 px-4 lg:min-w-[155px] hover:rounded-xl transition-all ease-in-out duration-300 md:text-xl ${lato.className} font-bold tracking-wide`}
                    >
                        {buttonText}
                    </button>
                </div>}

                {!cta &&
                    <div>
                        <div
                            onMouseEnter={handleDrawerEnter}
                            onMouseLeave={handleDrawerLeave}
                            className="relative inline-block"
                        >
                            <button
                                className="bg-button text-white hover:bg-inherit hover:rounded-2xl transition-all ease-in-out duration-300 hover:text-black hover:border-2 hover:border-black md:p-1 lg:p-2 md:text-sm lg-text-base xl:text-lg"
                            >
                                Order Online
                            </button>
                            <div className={`${isDrawerOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white text-2xl absolute top-14 right-0 flex flex-col items-start transition-[max-height] ease-out duration-400 shadow-lg`}>
                                <button className="py-2 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                                    <a href="https://order.online/store/24509526?slug=-11399864&pickup=true&hideModal=true&redirected=true" target="_blank">DoorDash</a>
                                </button>
                                <button className="pt-4 pb-2 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                                    <a href="https://www.order.store/store/zait-%26-zaatar/AkhJK0DPUuqNMNVUqNjsfg" target="_blank" className="hover:cursor-pointer">Uber Eats</a>
                                </button>
                                <button className="py-2 pb-4 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                                    <a href="https://zaitzaatar.dine.online" target="_blank">Grubhub</a>
                                </button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
