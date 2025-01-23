'use client';
import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart } from '../context/cart';
import Checkout from '../components/catering/checkout';

export default function RamadanCard({ name, image, price, description }) {
    const { items, addToCart, updateQuantity } = useCart();

    const [quantity, setQuantity] = useState(50);
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        const cartItem = items.find(item => item.name === name);
        if (cartItem) {
            setInCart(true);
            setQuantity(cartItem.quantity);
        } else {
            setInCart(false);
            setQuantity(50);
        }
    }, [items, name]);

    const handleQuantityChange = (increment) => {
        const newQuantity = increment ? quantity + 50 : quantity - 50;
        setQuantity(newQuantity);
        if (newQuantity <= 0) {
            updateQuantity(name, 0); // Remove item from cart
        } else if (inCart) {
            updateQuantity(name, newQuantity);
        }
    };

    const handleAddToCart = () => {
        addToCart({ name, price, image }, quantity);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-[450px]">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 mt-1">{description}</p>
                <p className="text-primary font-bold mt-2">${price}</p>

                <div className="flex items-center justify-between mt-4">
                    {inCart ? (
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleQuantityChange(false)}
                                className="p-1 rounded-full bg-background hover:bg-background-dark"
                            >
                                <Minus className="h-4 w-4 text-secondary" />
                            </button>
                            <span className="text-gray-700 w-16 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(true)}
                                className="p-1 rounded-full bg-background hover:bg-background-dark"
                            >
                                <Plus className="h-4 w-4 text-secondary" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            className="bg-button text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}