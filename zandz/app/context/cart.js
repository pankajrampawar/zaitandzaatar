'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);

    const addToCart = (item, quantity) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(i => i.name === item.name);
            if (existingItem) {
                return currentItems.map(i =>
                    i.name === item.name ? { ...i, quantity: i.quantity + quantity } : i
                );
            }
            return [...currentItems, { ...item, quantity }];
        });
    };

    const removeFromCart = (name) => {
        setItems(currentItems => currentItems.filter(item => item.name !== name));
    };

    const updateQuantity = (name, quantity) => {
        setItems(currentItems => {
            if (quantity <= 0) {
                return currentItems.filter(item => item.name !== name); // Remove if quantity is 0 or less
            }
            return currentItems.map(item =>
                item.name === name ? { ...item, quantity } : item
            );
        });
    };

    const clearCart = () => {
        setItems([]);
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}