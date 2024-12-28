import { anek_gujarati, lato } from "@/app/fonts";

export default function InfoSection() {
    return (
        <section className="flex flex-col md:flex-row  justify-between items-start md:items-center gap-4 md:gap-8 max-w-[1560px] px-[5%]">
            <article className="flex-1 max-w-[546px]">
                <div className={`${lato.className} text-xl mb-[3%]`}>
                    What is
                </div>
                <div className={` ${anek_gujarati.className} text-3xl min-[500px]:text-5xl xl:text-6xl font-semibold leading-snug tracking-wide`}>
                    <h2>
                        <span className="bg-green-700 text-white px-2">ZAIT & ZA'ATAR</span> <div className="pt-4 sm:pt-6 text-2xl min-[500px]:text-4xl sm:text-5xl">MEDITERRANEAN DHABA</div>
                    </h2>
                </div>
            </article>

            <article className={`flex-1 flex flex-col gap-4 text-sm lg:text-lg ${lato.className}`}>
                <div>

                    "Zait" is Arabic for "olive oil," an essential ingredient in Mediterranean cooking, while "Za'atar" is a fragrant spice blend made from dried herbs like thyme, sumac, and sesame seeds, commonly used in Middle Eastern cuisine. This blend adds a distinctive and aromatic touch to many dishes. When you step into Zait & Za'atar, you'll find a menu filled with an enticing variety of options, including mouthwatering shawarmas, crispy falafels, fresh salads, flavorful wraps, and much more. Each dish is carefully prepared to showcase the authentic flavors of the Mediterranean and Middle East, making it a delightful adventure for your taste buds.
                </div>
                <div>
                    Whether you're a fan of savory delights like shawarma sandwiches or prefer vegetarian options like falafel wraps, Zait & Za'atar offers something for everyone. The restaurant's commitment to using high-quality ingredients and traditional recipes ensures an unforgettable dining experience, leaving you with a newfound appreciation for the diverse and delicious world of Mediterranean and Middle Eastern cuisine. So, if you're looking to explore new culinary horizons and savor dishes bursting with flavors, Zait & Za'atar is the perfect place to embark on a flavorful journey through the Mediterranean and Middle East right in your own neighborhood.
                </div>
            </article>
        </section>
    )
}