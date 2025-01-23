'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Create the CartContext
const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [tip, setTip] = useState(0); // Tip state
    const [promoCode, setPromoCode] = useState(''); // Promo code state
    const [orderType, setOrderType] = useState('pickup'); // Order type (pickup or delivery)

    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            setItems(JSON.parse(storedCart));
        }

        // Load saved tip, promoCode, and orderType from localStorage if available
        const storedTip = localStorage.getItem('tip');
        const storedPromoCode = localStorage.getItem('promoCode');
        const storedOrderType = localStorage.getItem('orderType');

        if (storedTip) setTip(Number(storedTip));
        if (storedPromoCode) setPromoCode(storedPromoCode);
        if (storedOrderType) setOrderType(storedOrderType);
    }, []);

    useEffect(() => {
        // Save the cart items to localStorage
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);

    useEffect(() => {
        // Save tip, promoCode, and orderType to localStorage
        localStorage.setItem('tip', tip);
        localStorage.setItem('promoCode', promoCode);
        localStorage.setItem('orderType', orderType);
    }, [tip, promoCode, orderType]);

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

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    // Calculate the subtotal
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Apply promo code (dummy logic, you can replace it with real logic)
    const promoDiscount = promoCode === 'DISCOUNT10' ? subtotal * 0.1 : 0;

    // Calculate the total with tip, promo code discount, and any other applicable fees
    const total = subtotal - promoDiscount;
    const tipAmount = (total * tip) / 100;
    const deliveryFee = orderType === 'delivery' ? 50 : 0; // Assuming delivery fee is 5

    // Final total with delivery fee and tip
    const finalTotal = total + tipAmount + deliveryFee;

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            total,
            finalTotal,
            tip,
            setTip,
            promoCode,
            setPromoCode,
            orderType,
            setOrderType,
            deliveryFee,
            tipAmount
        }}>
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