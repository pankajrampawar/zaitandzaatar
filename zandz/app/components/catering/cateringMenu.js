'use client'

import { anek_gujarati, merienda } from "@/app/fonts"
import CateringPricingCard from "@/app/ui/cateringPricingCard";
import { breakfastAllDay, appetizers, plates, sandwiches, soupsAndSalads, specialty, kidsMeal, sides, desserts, drinks } from "../menu/menuItems";

export default function CateringMenu({ addItemsInCart, updateQuantity, itemsInCart }) {


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
                                price={burger.price}
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
                                price={drink.price}
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
                                            price={drink.price}
                                            image={drink.image}
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
                                price={sandwich.price}
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
                                price={side.price}
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
                                price={side.price}
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
                                price={side.price}
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
                                price={side.price}
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
                                price={side.price}
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
                                price={side.price}
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
                                price={side.price}
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
            <div className="sticky top-0 pt-24 xl:pt-40 w-full z-10 xl:w-1/2 ">
                <div className={`flex justify-between text-2xl ${anek_gujarati.className} font-semibold w-full gap-4 py-2 px-4 border-b-2 border-button max-[400px]:max-w-[320px] max-[460px]:max-w-[380px] max-[540px]:max-w-[440px] max-w-[540px] overflow-x-auto sm:max-w-[700px] mx-auto`}>
                    <a href="#breakfastAllDay" className="whitespace-nowrap">
                        <button>Breakfast All Day</button>
                    </a>
                    <a href="#Appetizers" className="whitespace-nowrap">
                        <button>Appetizers</button>
                    </a>
                    <a href="#plates" className="whitespace-nowrap">
                        <button>Plates</button>
                    </a>
                    <a href="#sandwiches" className="whitespace-nowrap">
                        <button>Sandwiches</button>
                    </a>
                    <a href="#soups" className="whitespace-nowrap">
                        <button>Soups & Salads</button>
                    </a>
                    <a href="#speciality" className="whitespace-nowrap">
                        <button>Speciality</button>
                    </a>
                    <a href="#kidsMeal" className="whitespace-nowrap">
                        <button>Kids Meal</button>
                    </a>
                    <a href="#sides" className="whitespace-nowrap">
                        <button>Sides</button>
                    </a>
                    <a href="#desserts" className="whitespace-nowrap">
                        <button>Desserts</button>
                    </a>
                    <a href="#drinks" className="whitespace-nowrap">
                        <button>Drinks</button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col max-h-[75vh] overflow-y-auto">
                <BreakfastAllDay id="breakfastAllDay" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <AppetizersList id="Appetizers" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <PlatesList id="plates" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <SandwichesList id="sandwiches" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <SoupsList id="soups" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <SpecialityList id="speciality" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <KidsMealLIst id="kidsMeal" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <SidesList id="sides" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <DessertsList id="desserts" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
                <DrinksList id="drinks" itemsInCart={itemsInCart} addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} />
            </div>
        </div>
    )
}
