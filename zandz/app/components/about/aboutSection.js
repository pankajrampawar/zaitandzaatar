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
                    <h1 className={`${anek_gujarati.className} font-bold text-5xl md:text-6xl md:leading-normal xl:text-7xl xl:leading-relaxed sm:mx-none w-full leading-snug tracking-wide`}>
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
                    </h1>
                    <p className={`${lato.className} xl:px-[5%] xl:pb-20 xl:pt-20 tracking-wide text-base sm:text-lg lg:text-xl xl:text-2xl mt-[2%]`}>
                        Located on Selby Avenue in Saint Paul, Minnesota, Zait & Za’atar is a unique fusion of Mediterranean and Indian street food traditions, inspired by the warmth and vibrancy of a traditional dhaba. A "dhaba" is a rustic roadside eatery, deeply rooted in South Asian culture, celebrated for its simple yet flavorful dishes served in a welcoming, homely atmosphere. At Zait & Za’atar, we bring this spirit to life while incorporating the rich culinary traditions of the Mediterranean and Middle East.
                        <br /> <br />
                        The name "Zait" is Arabic for "olive oil," symbolizing purity and flavor in Mediterranean cooking. "Za’atar" is a fragrant Middle Eastern spice blend made with thyme, sumac, and sesame seeds. Together, "Zait" and "Za’atar" reflect the authentic flavors of the Middle East while blending seamlessly with Indian spices and recipes, creating a one-of-a-kind dining experience that honors both traditions.
                        <br /> <br />
                        At Zait & Za’atar: Mediterranean Dhaba, you’ll find a menu filled with dishes that bridge continents. From savory Chicken Shawarma Sandwiches and crispy Samosa Appetizers to tender Butter Chicken, fluffy Garlic Naans, and flavorful Falafel Wraps, every bite showcases the comfort and authenticity of dhaba-style cooking paired with the freshness and vibrancy of Mediterranean cuisine.
                        <br /> <br />
                        We pride ourselves on offering freshly prepared dishes made from high-quality ingredients. Whether you’re stopping by for a quick bite or celebrating a special occasion, our cozy atmosphere captures the spirit of a traditional dhaba, making you feel right at home.
                        <br /> <br />
                        Enjoy dining in, or take advantage of our convenient pickup and delivery options to savor our fusion flavors wherever you are. Hosting an event? Let us bring the charm of a dhaba to your celebration with our catering services, designed to delight every guest with a custom menu.
                        <br /> <br />
                        Experience the perfect blend of Mediterranean vibrancy and the heartfelt hospitality of a dhaba at Zait & Za’atar—where tradition meets innovation on your plate.
                    </p>
                </article>
            </section>
        </div >
    )
}