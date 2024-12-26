'use client'
import Image from "next/image"
import { anek_gujarati, lato } from "@/app/fonts"
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BurgerCard = ({ name, src, alt }) => {
    return (
        <div className="rounded-lg overflow-hidden min-w-[240px] max-w-[280px] sm:min-w-[280px] sm:max-w-[320px]">
            <div className="relative h-40 sm:h-48 w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="rounded-lg sm:rounded-xl object-cover"
                />
            </div>
            <div className="py-3">
                <h3 className="text-lg font-bold">{name}</h3>
            </div>
        </div>
    );
};

export default function BestSeller() {

    const router = useRouter();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleOrder = () => {
        router.push('#orderOnline')
    }

    return (
        <div className="mt-20 sm:mt-[10%] flex flex-col items-center bg-[#130902] py-[6%] xl:py-[10%] text-white w-full"
            style={{ backgroundImage: "url('bgPattern.png')", backgroundSize: "auto" }}
        >
            <div className="flex flex-col items-center justify-center max-w-[1560px]">
                <div>
                    <h2 className={`${anek_gujarati.className} text-5xl md:text-6xl md:leading-normal xl:text-7xl xl:leading-tight text-center mx-[2%] sm:mx-none w-full font-bold tracking-wide`}>
                        CRAFTED TO PERFECTION, <br className="hidden sm:block" />
                        <span className="relative">
                            <span className="relative z-10">LOVED BY ALL</span>

                            <motion.div
                                ref={ref}
                                className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "105%" } : {}}
                                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                            />
                        </span>
                    </h2>
                    <p className={`text-lg md:text-xl xl:text-2xl text-center ${lato.className} mt-6`}>
                        Our popular dishes wanting to make your taste buds dance with delight.
                    </p>
                </div>

                <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-10 xl:gap-16 pt-10 md:pt-16 xl:pt-20 pb-4 w-full px-[10%] sm:px-[5%] lg:justify-center">
                    <div className="snap-center">
                        <BurgerCard src="/lucyBurger.jpg" alt="Lucy Burger image" name="Signature Saint Lucy Burger" />
                    </div>
                    <div className="snap-center">
                        <BurgerCard src="/cheese.png" alt="Double Cheese Burger Image" name="Double Cheese Burger" />
                    </div>
                    <div className="snap-center">
                        <BurgerCard src="/lassi.png" alt="Lassi Image" name="Lassi" />
                    </div>
                </div>

                <div className="pt-10">
                    <button onClick={handleOrder} className="button xl:font-bold hover:text-white hover:rounded-lg transition-all ease-in-out duration-300">Order Online</button>
                </div>
            </div>
        </div>
    )
}
