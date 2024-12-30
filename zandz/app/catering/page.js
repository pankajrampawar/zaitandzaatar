'use client'
import CateringMenu from "../components/catering/cateringMenu";
import Checkout from "../components/catering/checkout";
import { useState, useEffect } from "react";

export default function Catering() {
    const [itemInCart, setItemsInCart] = useState([]);
    const [cartLoaded, setCartLoaded] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false); // State to control the checkout visibility

    const saveCartToLocalStorage = (cartItems) => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
        console.log('Cart saved:', cartItems);
    };

    // Load cart from localStorage on first render
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setItemsInCart(JSON.parse(savedCart));
        }
        setCartLoaded(true);  // Indicate cart is loaded
    }, []);

    // Save cart after initial load
    useEffect(() => {
        if (cartLoaded) {
            saveCartToLocalStorage(itemInCart);
        }
    }, [itemInCart, cartLoaded]);

    const addItemsInCart = (name, price) => {
        setItemsInCart((prevItems) => {
            const itemIndex = prevItems.findIndex(cartItem => cartItem.name === name);
            if (itemIndex >= 0) {
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += 1;
                return updatedItems;
            } else {
                return [...prevItems, { name, price, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (itemName, operation) => {
        setItemsInCart((prevItems) => {
            const updatedItems = prevItems.map(item => {
                if (item.name === itemName) {
                    const updatedQuantity = operation === 'increment' ? item.quantity + 1 : item.quantity - 1;
                    return { ...item, quantity: updatedQuantity < 0 ? 0 : updatedQuantity };
                }
                return item;
            });
            return updatedItems.filter(item => item.quantity > 0);
        });
    };

    return (
        <div className="max-w-[1440px] w-full">
            <section className="">
                <CateringMenu addItemsInCart={addItemsInCart} updateQuantity={updateQuantity} itemsInCart={itemInCart} />
            </section>

            <button
                onClick={() => setShowCheckout(!showCheckout)}
                className="lg:hidden fixed bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600">
                Show Checkout
            </button>

            {/* Fixed Checkout Component on smaller screens */}
            {showCheckout && (
                <section className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-center items-center">
                    <div className="bg-white w-full max-w-md h-full p-4 rounded-md">
                        <Checkout itemsInCart={itemInCart} />
                        <button
                            onClick={() => setShowCheckout(false)}
                            className="absolute top-4 right-4 text-xl text-red-500">
                            &times;
                        </button>
                    </div>
                </section>
            )}

            {/* Always visible Checkout Component on larger screens */}
            <section className="hidden lg:block fixed right-[1%] bottom-0 z-50">
                <Checkout itemsInCart={itemInCart} />
            </section>
        </div>
    );
}
