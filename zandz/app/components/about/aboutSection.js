'use client'
import { anek_gujarati, lato, merienda } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


export default function OurStory() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="max-w-[1440px]">
            <section className="px-[2%]">
                <article className="flex flex-col  border-2 border-foreground text-center p-[5%]">
                    <h2 className={`${anek_gujarati.className} font-bold text-5xl md:text-6xl md:leading-normal xl:text-7xl xl:leading-relaxed sm:mx-none w-full leading-snug tracking-wide`}>
                        <span className="relative">
                            <span className="relative z-10 text-white">Our Story</span>
                            <motion.div
                                ref={ref}
                                className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "105%" } : {}}
                                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                            />
                        </span>
                    </h2>
                    <p className={`${lato.className} xl:px-[5%] xl:pb-20 xl:pt-20 tracking-wide text-base sm:text-lg lg:text-xl xl:text-2xl mt-[2%]`}>
                        Welcome to Zait & Za’atar: Mediterranean Dhaba, located on Selby Avenue in Saint Paul Minnesota. This is where the rich culinary traditions of Mediterranean and some handpicked Indian cuisine come together, offering a unique and flavorful dining experience right in the heart of your neighborhood.
                        <br /> <br />
                        The name "Zait" is Arabic for "olive oil," a fundamental ingredient in Mediterranean cooking. It's a symbol of purity and flavor. "Za’atar" is a fragrant Middle Eastern spice blend made from dried herbs like thyme, sumac, and sesame seeds. "Zait" and "Za’atar" capture the true essence of Middle Eastern flavors. We also blend aromatic Indian spices into our menu, offering a unique fusion of flavors that cater to every taste.
                        <br /> <br />
                        At Zait & Za’atar, we offer Mediterranean and Indian street food, blending the best of both worlds. Our dishes include savory Chicken Shawarma Sandwiches, crispy Samosa Appetizers, tender Butter Chicken, fluffy Garlic Naans, and flavorful Falafel Wraps. With our unique fusion dishes, there’s something for everyone.
                        <br /> <br />
                        Zait & Za’atar stands out for its commitment to authenticity and innovation. We blend Mediterranean and Indian flavors to create a unique and flavorful experience. Every dish is made fresh with high-quality ingredients, served in a welcoming atmosphere that feels like home.
                        <br /> <br />
                        Dine with us and enjoy a warm, welcoming experience, or choose our easy pickup and delivery options to enjoy your favorite dishes at home. Make your events special with our catering services. Whether it’s a wedding, birthday, corporate event, or family gathering, we offer a variety of dishes to please every guest. We’ll work with you to create a menu that suits your event, so you can relax and enjoy the celebration while we take care of the food.
                    </p>
                </article>
            </section>
        </div >
    )
}