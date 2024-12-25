import Image from "next/image";
import { anek_gujarati, lato } from "@/app/fonts";
import { motion, useInView } from "framer-motion";

export default function HeroSection() {
    return (
        <div className="max-w-[1560px] w-full">
            <div className="flex w-full items-center justify-between max-w-[1560px] mt-[10%] px-[5%]">
                <section className="">
                    {/* text */}
                    <div>
                        <p className="text-sm mb-[2%  ]">Best Mediterranean & Select Indian Food In Saint Paul</p>
                        <h1 className={`text-7xl tracking-wide leading-snug ${anek_gujarati.className} font-semibold`}><span>MEDITERRANEAN SOUL,</span>
                            <br />
                            <span className="relative">
                                <span className="text-white">HANDPICKED INDIAN SPICE</span>
                                <div className="absolute left-0 top-0 bg-green-700 w-full h-full -z-10"></div>
                            </span>
                        </h1>
                    </div>

                    {/* Call To Action */}
                    <div className="flex gap-6 mt-[5%]">
                        <button className={`bg-button hover:bg-transparent border-2 border-button hover:text-black text-white py-2 px-4 lg:min-w-[155px] hover:rounded-xl transition-all ease-in-out duration-300 md:text-xl ${lato.className} font-bold tracking-wide`}>Order Online</button>
                        <button className={`bg-button hover:bg-transparent border-2 border-button hover:text-black text-white py-2 px-4 lg:min-w-[155px] hover:rounded-xl transition-all ease-in-out duration-300 md:text-xl ${lato.className} font-bold tracking-wide`}>View Menu</button>
                    </div>
                </section>
                <section className="">
                    <div>
                        <Image
                            src="/heroImage.png"
                            width="450"
                            height="870"
                            priority={true}
                            loading="eager"
                            alt="Image with mediterranean food"
                            className="relative"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
