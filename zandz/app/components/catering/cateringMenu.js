'use client'
import { anek_gujarati, merienda } from "@/app/fonts"
import CateringPricingCard from "@/app/ui/cateringPricingCard";
import { breakfastAllDay, appetizers, plates, sandwiches, soupsAndSalads, specialty, kidsMeal, sides, desserts, drinks } from "../menu/menuItems";
import { useEffect, useState, useRef } from "react";

export default function CateringMenu({ addItemsInCart, updateQuantity, itemsInCart }) {

    const [activeSection, setActiveSection] = useState("");
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: `-33% 0px -67% 0px`, // Triggers when the section is near 1/3 of the viewport height
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);


    const BreakfastAllDay = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id}>
                <p className="text-sm italic m-4"></p>
                <div className="flex flex-col gap-4">
                    {breakfastAllDay.map((burger, index) => {
                        // Find if this burger is in the itemsInCart array
                        const itemInCart = itemsInCart.find(item => item.name === burger.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;

                        return (
                            <CateringPricingCard
                                key={index}
                                name={burger.name}
                                content={burger.content}
                                image={burger.image}
                                alt={burger.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        );
                    })}
                </div>
            </div>
        );
    };

    const DrinksList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id}>
                <h2 className="text-2xl font-bold mb-4">Our Drinks</h2>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Hot Drinks</h3>
                    <div className="flex flex-col gap-4">
                        {drinks.Hot.map((drink, index) => {
                            const itemInCart = itemsInCart.find(item => item.name === drink.name);
                            const quantity = itemInCart ? itemInCart.quantity : 0;
                            return (<CateringPricingCard
                                key={index}
                                name={drink.name}
                                content={drink.content}
                                image={drink.image}
                                alt={drink.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />)
                        })}
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Cold Drinks</h3>
                    {Object.keys(drinks.Cold).map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-6">
                            {category && <h4 className="text-lg font-medium mb-2">{category}</h4>}
                            <div className="flex flex-col gap-4">
                                {drinks.Cold[category].map((drink, index) => {
                                    const itemInCart = itemsInCart.find(item => item.name === drink.name);
                                    const quantity = itemInCart ? itemInCart.quantity : 0;
                                    return (
                                        <CateringPricingCard
                                            key={index}
                                            name={drink.name}
                                            image={drink.image}
                                            content={drink.content}
                                            alt={drink.alt}
                                            quantity={quantity}
                                            addItemsInCart={addItemsInCart}
                                            updateQuantity={updateQuantity}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    const SandwichesList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sandwich-list">
                <h2 className="text-2xl font-bold mb-4">Our Sandwiches</h2>
                <div className="flex flex-col gap-4">
                    {sandwiches.map((sandwich, index) => {

                        const itemInCart = itemsInCart.find(item => item.name === sandwich.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={sandwich.name}
                                content={sandwich.content}
                                image={sandwich.image}
                                alt={sandwich.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }

    const SidesList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Our Sides</h2>
                <div className="flex flex-col gap-4">
                    {sides.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                content={side.content}
                                image={side.image}
                                alt={side.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };

    const AppetizersList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Appetizers</h2>
                <div className="flex flex-col gap-4">
                    {appetizers.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                content={side.content}
                                image={side.image}
                                alt={side.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };

    const PlatesList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Plates</h2>
                <div className="flex flex-col gap-4">
                    {plates.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                content={side.content}
                                image={side.image}
                                alt={side.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };

    const SoupsList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Soups & Salads</h2>
                <div className="flex flex-col gap-4">
                    {soupsAndSalads.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                image={side.image}
                                alt={side.alt}
                                content={side.content}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };

    const SpecialityList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Speciality</h2>
                <div className="flex flex-col gap-4">
                    {specialty.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                content={side.content}
                                image={side.image}
                                alt={side.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };

    const KidsMealLIst = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Kids Meal</h2>
                <div className="flex flex-col gap-4">
                    {kidsMeal.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                content={side.content}
                                image={side.image}
                                alt={side.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };

    const DessertsList = ({ id, itemsInCart, addItemsInCart, updateQuantity }) => {
        return (
            <div id={id} className="sides-list">
                <h2 className="text-2xl font-bold mb-4">Desserts</h2>
                <div className="flex flex-col gap-4">
                    {desserts.map((side, index) => {
                        const itemInCart = itemsInCart.find(item => item.name === side.name);
                        const quantity = itemInCart ? itemInCart.quantity : 0;
                        return (
                            <CateringPricingCard
                                key={index}
                                name={side.name}
                                content={side.content}
                                image={side.image}
                                alt={side.alt}
                                quantity={quantity}
                                addItemsInCart={addItemsInCart}
                                updateQuantity={updateQuantity}
                            />
                        )
                    })}
                </div>
            </div>
        );
    };


    return (
        <div className="flex flex-col items-start relative lg:justify-start w-full h-screen">
            <div className="relative top-0 pt-24 xl:pt-40 w-full z-10 xl:w-1/2 ">
                <div
                    className={`flex justify-between text-2xl font-semibold w-full gap-4 py-2 px-4 border-b-2 border-button max-[400px]:max-w-[320px] max-[460px]:max-w-[380px] max-[540px]:max-w-[440px] max-w-[540px] overflow-x-scroll sm:max-w-[700px] mx-auto scrollbar2`}
                >
                    {[
                        { id: "breakfastAllDay", label: "Breakfast All Day" },
                        { id: "Appetizers", label: "Appetizers" },
                        { id: "plates", label: "Plates" },
                        { id: "sandwiches", label: "Sandwiches" },
                        { id: "soups", label: "Soups & Salads" },
                        { id: "speciality", label: "Speciality" },
                        { id: "kidsMeal", label: "Kids Meal" },
                        { id: "sides", label: "Sides" },
                        { id: "desserts", label: "Desserts" },
                        { id: "drinks", label: "Drinks" },
                    ].map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`whitespace-nowrap ${activeSection === section.id
                                ? "text-foreground border-b-2 border-foreground"
                                : ""
                                }`}
                        >
                            <button>{section.label}</button>
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex flex-col max-h-[85vh] overflow-y-scroll scrollbar">
                {[
                    { id: "breakfastAllDay", Component: BreakfastAllDay },
                    { id: "Appetizers", Component: AppetizersList },
                    { id: "plates", Component: PlatesList },
                    { id: "sandwiches", Component: SandwichesList },
                    { id: "soups", Component: SoupsList },
                    { id: "speciality", Component: SpecialityList },
                    { id: "kidsMeal", Component: KidsMealLIst },
                    { id: "sides", Component: SidesList },
                    { id: "desserts", Component: DessertsList },
                    { id: "drinks", Component: DrinksList },
                ].map(({ id, Component }, index) => (
                    <div
                        key={id}
                        id={id}
                        ref={(el) => (sectionsRef.current[index] = el)}
                    >
                        <Component
                            itemsInCart={itemsInCart}
                            addItemsInCart={addItemsInCart}
                            updateQuantity={updateQuantity}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
