'use client'
import { anek_gujarati } from "../fonts"
import { lato } from "../fonts"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function Rewards() {

    const ref1 = useRef(null);
    const ref2 = useRef(null)
    const isInView1 = useInView(ref1, { once: true });
    const isInView2 = useInView(ref2, { once: true });

    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex flex-col text-center mb-[30px] xl:mb-[90px] max-w-[1840px] w-full">
                <div className="flex h-[100vh]  max-h-[900px] items-center relative overflow-x-clip">
                    <article className="sm:max-w-[60%] md:ml-[2%] xl:ml-[5%]">
                        <h2 className={`${anek_gujarati.className} font-bold text-4xl md:text-5xl md:leading-snug xl:leading-snug xl:text-6xl tracking-whide sm:mx-none w-full`}>Loyalty has its Perks, <br className="hidden sm:block" /><span className="relative"><span className="relative z-10 text-white">JOIN US!</span><motion.div
                            ref={ref1}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView1 ? { width: "105%" } : {}}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        />
                        </span></h2>
                        <p className={`${lato.className} text-sm mt-4 sm:text-lg xl:text-[24px] text-gray-800 max-w-[600px]  xl:tracking-wide xl:leading-normal`}>Earn rewards and exclusive perks with our Loyalty Program. Rack up points to redeem for discounts, gifts, and VIP treatment. Stay in the know about our latest launches and offers.</p>
                        <button className="bg-button hover:bg-transparent hover:border-2 hover:text-black text-white py-2 px-4 lg:min-w-[155px] md:text-xl font-bold mt-[5%]">
                            <a href="https://www.toasttab.com/zait-za-atar-1626-selby-avenue/rewardsSignup">Become a Member</a>
                        </button>
                    </article>
                    <div className="absolute hidden sm:flex h-screen aspect-square bg-red-400 top-1/2 left-[100%] -translate-y-1/2 -translate-x-1/2 rotate-45 max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] xl:max-h-[700px] xl:max-w-[700px]">

                    </div>
                </div>
                <div className="flex justify-end h-[100vh] max-h-[900px] items-center relative overflow-x-clip">
                    <article className="sm:max-w-[60%] flex flex-col items-center mr-[2%] xl:mr-[5%]">
                        <h2 className={`${anek_gujarati.className} font-bold  text-4xl md:text-5xl xl:text-6xl xl:leading-tight tracking-whide sm:mx-none w-full leading-snug md:leading-snug max-w-[800px]`}>Make Every Occasion Special with a<br className="hidden min-[336px]:block min-[399px]:hidden sm:block min-[650px]:hidden min-[768px]:block min-[870px]:hidden" /> <span className="relative"><span className="relative z-10 text-white">GIFT CARD</span><motion.div
                            ref={ref2}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView2 ? { width: "105%" } : {}}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        />
                        </span></h2>
                        <p className={`${lato.className} mt-4 text-sm sm:text-lg xl:text-[24px] text-gray-800 max-w-[600px]  xl:tracking-wide xl:leading-normal`}>Our Gift Cards are the ultimate thoughtful present. Available in multiple values, they let your loved ones choose what they really want.</p>
                        <button className="bg-button hover:bg-transparent hover:border-2 hover:text-black text-white py-2 px-4 lg:min-w-[155px] md:text-xl font-bold mt-[5%]">
                            <a href="https://www.toasttab.com/zait-za-atar-1626-selby-avenue/giftcards">Buy a Gift Card</a>
                        </button>
                    </article>

                    <div className="absolute hidden sm:flex h-screen bg-red-400 aspect-square top-1/2 right-[100%] -translate-y-1/2 translate-x-1/2 rotate-45 max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] xl:max-h-[700px] xl:max-w-[700px]">

                    </div>
                </div>
            </div>
        </div>
    )
}