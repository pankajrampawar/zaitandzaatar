'use client'
import { anek_gujarati, merienda, raleway } from "@/app/fonts";
import MenuItemCard from "@/app/ui/menuItemCard";
import { useEffect, useState } from "react";
import { breakfastAllDay, appetizers, plates, sandwiches, soupsAndSalads, specialty, kidsMeal, sides, desserts, drinks } from "./menuItems";

export default function DesktopMenu() {
    const [currentItem, setCurrentItem] = useState(1);
    console.log(breakfastAllDay)

    const toggleItem = (toggleTo) => {
        setCurrentItem(toggleTo);
    };

    useEffect(() => {
        scrollToTopWithOffset();
    }, [toggleItem])

    function scrollToTopWithOffset() {
        window.scrollTo({
            top: 80,
            behavior: 'smooth'
        });
    }

    const renderItems = () => {
        switch (currentItem) {
            case 1:
                return breakfastAllDay.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 2:
                return appetizers.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "" : undefined}
                    />
                ));
            case 3:
                return plates.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 4:
                return sandwiches.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 5:
                return soupsAndSalads.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 6:
                return specialty.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 7:
                return kidsMeal.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 8:
                return sides.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 9:
                return desserts.map((item, index) => (
                    <MenuItemCard
                        key={index}
                        itemName={item.name}
                        itemPrice={item.price}
                        itemInfo={item.content || ""}
                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                    />
                ));
            case 10:
                return (
                    <>
                        <div>
                            <h2 className="text-xl font-bold mb-4 sm:text-2xl">Cold Drinks</h2>
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h3 className={`text-lg sm:text-[1.5rem] font-semibold ${raleway.className} tracking-wide mb-4`}>Lemonades</h3>
                                    <div className="flex flex-col gap-4">
                                        {drinks.Cold.Lemonades.map((item, index) => (
                                            <MenuItemCard
                                                key={`lemonade-${index}`}
                                                itemName={item.name}
                                                itemPrice={item.price}
                                                img={item.exclusive ? "/exclusive.jpeg" : item.speciality ? "/special.jpeg" : undefined}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className={`text-lg sm:text-[1.5rem] font-semibold ${raleway.className} tracking-wide mb-4`}>Lassi</h3>
                                    <div className="flex flex-col gap-4">
                                        {drinks.Cold.Lassi.map((item, index) => (
                                            <MenuItemCard
                                                key={`lassi-${index}`}
                                                itemName={item.name}
                                                itemPrice={item.price}
                                                img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className={`text-lg sm:text-[1.5rem] font-semibold ${raleway.className} tracking-wide mb-4`}>Other Cold Drinks</h3>
                                    <div className="flex flex-col gap-4">
                                        {drinks.Cold[""]?.map((item, index) => (
                                            <MenuItemCard
                                                key={`other-${index}`}
                                                itemName={item.name}
                                                itemPrice={item.price}
                                                img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-4 sm:text-2xl">Hot Drinks</h2>
                            <div className="flex flex-col gap-4">
                                {drinks.Hot.map((item, index) => (
                                    <MenuItemCard
                                        key={`hot-${index}`}
                                        itemName={item.name}
                                        itemPrice={item.price}
                                        img={item.speciality ? "/special.jpeg" : item.exclusive ? "/exclusive.jpeg" : undefined}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <div className="relative flex flex-col items-center">
            <div className="sticky top-4 bg-background pt-28 w-full z-10">
                <div className={`flex justify-between text-2xl ${anek_gujarati.className} font-semibold w-full gap-4 py-2 px-4 border-b-2 border-button max-[400px]:max-w-[320px] max-[460px]:max-w-[380px] max-[540px]:max-w-[440px] max-w-[540px] overflow-x-scroll sm:max-w-[700px] mx-auto`}>
                    <button onClick={() => toggleItem(1)} className={`whitespace-nowrap flex gap-2 items-center ${currentItem === 1 ? 'text-foreground underline' : ''}`}>Breakfast All Day</button>
                    <button onClick={() => toggleItem(2)} className={`whitespace-nowrap ${currentItem === 2 ? 'text-foreground underline' : ''}`}>Appetizers</button>
                    <button onClick={() => toggleItem(3)} className={`whitespace-nowrap ${currentItem === 3 ? 'text-foreground underline' : ''}`}>Plates</button>
                    <button onClick={() => toggleItem(4)} className={`whitespace-nowrap ${currentItem === 4 ? 'text-foreground underline' : ''}`}>Sandwiches</button>
                    <button onClick={() => toggleItem(5)} className={`whitespace-nowrap ${currentItem === 5 ? 'text-foreground underline' : ''}`}>Soups and Salads</button>
                    <button onClick={() => toggleItem(6)} className={`whitespace-nowrap ${currentItem === 6 ? 'text-foreground underline' : ''}`}>Speciality</button>
                    <button onClick={() => toggleItem(7)} className={`whitespace-nowrap ${currentItem === 7 ? 'text-foreground underline' : ''}`}>Kids Meal</button>
                    <button onClick={() => toggleItem(8)} className={`whitespace-nowrap ${currentItem === 8 ? 'text-foreground underline' : ''}`}>Sides</button>
                    <button onClick={() => toggleItem(9)} className={`whitespace-nowrap ${currentItem === 9 ? 'text-foreground underline' : ''}`}>Desserts</button>
                    <button onClick={() => toggleItem(10)} className={`whitespace-nowrap ${currentItem === 10 ? 'text-foreground underline' : ''}`}>Drinks</button>
                </div>
            </div>
            {currentItem === 1 && (
                <p className="text-center text-sm italic mt-4">* All burgers come with fries.</p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start px-4 w-full max-w-[1100px] mt-10">
                {renderItems()}
            </div>
        </div>
    );
}
