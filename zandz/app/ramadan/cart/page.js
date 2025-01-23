'use client'
import React from 'react';
import { useCart } from '@/app/context/cart';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const { items, removeFromCart, updateQuantity, total } = useCart();
    const router = useRouter();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
                    <button
                        onClick={() => router.push('/ramadan')}
                        className="bg-button text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                        Browse Menu
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background w-[90vw] pt-[10%]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

                <div className="bg-white rounded-lg shadow-md p-6">
                    {items.map(item => (
                        <div key={item.name} className="flex items-center justify-between py-4 border-b">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                    <p className="text-gray-600">${item.price} per box</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 50)}
                                        className="p-1 rounded-full bg-background hover:bg-background-dark"
                                    >
                                        <Minus className="h-4 w-4 text-secondary" />
                                    </button>
                                    <span className="text-gray-700 w-16 text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 50)}
                                        className="p-1 rounded-full bg-background hover:bg-background-dark"
                                    >
                                        <Plus className="h-4 w-4 text-secondary" />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.name)}
                                    className="text-red-500 hover:text-red-600"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt-8 flex justify-between items-center">
                        <div>
                            <p className="text-gray-600">Total:</p>
                            <p className="text-2xl font-bold text-gray-800">${total}</p>
                        </div>

                        <button
                            onClick={() => router.push('/ramadan/checkout')}
                            className="bg-button text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors"
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}