'use client'
import Image from "next/image";
import { anek_gujarati, lato } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";


export default function HeroSection() {

    const router = useRouter();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="xl:max-w-[1560px] w-full max-w-screen mt-[20%] sm:mt-[10%] md:mt-[5%]">
            <div className="flex flex-col sm:flex-row w-full items-center justify-between max-w-[1560px] mt-[10%] px-[5%]">
                <section className="">
                    {/* text */}
                    <div>
                        <p className="text-xs sm:text-sm mb-[2%]">Best Mediterranean & Select Indian Food In Saint Paul</p>
                        <h1 className={`${anek_gujarati.className} text-4xl sm:text-5xl md:text-6xl min-[1480px]:text-7xl md:leading-normal text-start sm:mx-none w-full font-bold tracking-wide`}><span>MEDITERRANEAN SOUL,</span>
                            <br />
                            <div className="relative mt-3 p-1 sm:py-2 sm:mt-0">
                                <span className="text-white sm:mt-0 relative">
                                    <span className="relative z-10 p-1 sm:py-2">HANDPICKED INDIAN SPICES</span>
                                    <motion.div
                                        ref={ref}
                                        className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "102%" } : {}}
                                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                                    />
                                </span>
                            </div>
                        </h1>
                    </div>

                    {/* Call To Action */}
                    <div className="flex gap-6 mt-[8%] sm:mt-[5%] relative z-10">
                        <button className={`bg-button hover:bg-transparent border-2 border-button hover:text-black text-white py-2 px-4 lg:min-w-[155px] hover:rounded-xl transition-all ease-in-out duration-300 md:text-xl ${lato.className} font-bold tracking-wide`}>Order Online</button>
                        <button onClick={() => { router.push('/menu') }} className={`bg-button hover:bg-transparent border-2 border-button hover:text-black text-white py-2 px-4 lg:min-w-[155px] hover:rounded-xl transition-all ease-in-out duration-300 md:text-xl ${lato.className} font-bold tracking-wide`}>View Menu</button>
                    </div>
                </section>
                <section className="hidden xl:block ">
                    <div>
                        <Image
                            src="/heroImage.png"
                            width="450"
                            height="870"
                            priority={true}
                            loading="eager"
                            alt="Image with mediterranean food"
                            className="relative max-h-[800px] max-w-[350px] min-[1310px]:max-h-[870px] min-[1310px]:max-w-[400px] min-[1480px]:max-w-[380px] min-[1540px]:max-w-[450px]"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
