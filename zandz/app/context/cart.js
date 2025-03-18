'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Create the CartContext
const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useState([]);
    const [tip, setTip] = useState(15); // Tip percentage
    const [promoCode, setPromoCode] = useState(''); // Promo code
    const [orderType, setOrderType] = useState('pickup'); // Order type (pickup or delivery)

    // Load initial state from localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('cartItems');
        const storedTip = localStorage.getItem('tip');
        const storedPromoCode = localStorage.getItem('promoCode');
        const storedOrderType = localStorage.getItem('orderType');

        if (storedCart) setItems(JSON.parse(storedCart));
        if (storedTip) setTip(Number(storedTip));
        if (storedPromoCode) setPromoCode(storedPromoCode);
        if (storedOrderType) setOrderType(storedOrderType);
    }, []);

    // Sync state to localStorage
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
        localStorage.setItem('tip', tip.toString());
        localStorage.setItem('promoCode', promoCode);
        localStorage.setItem('orderType', orderType);
    }, [items, tip, promoCode, orderType]);

    const addToCart = (item, quantity) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(i => i.name === item.name && i.type === item.type);
            if (existingItem) {
                return currentItems.map(i =>
                    i.name === item.name && i.type === item.type
                        ? { ...i, quantity: i.quantity + quantity }
                        : i
                );
            }
            return [...currentItems, { ...item, quantity }];
        });
    };

    const removeFromCart = (name, type) => {
        setItems(currentItems =>
            currentItems.filter(item => !(item.name === name && item.type === type))
        );
    };

    const updateQuantity = (name, quantity, type) => {
        setItems(currentItems => {
            if (quantity <= 0) {
                return currentItems.filter(item => !(item.name === name && item.type === type));
            }
            return currentItems.map(item =>
                item.name === name && item.type === type
                    ? { ...item, quantity }
                    : item
            );
        });
    };

    const clearCart = useCallback(() => {
        setItems([]);
    }, []);

    // Calculate subtotal (convert price to number)
    const subtotal = items.reduce((sum, item) => {
        const price = parseFloat(item.price); // Ensure price is a number
        return sum + (price * item.quantity);
    }, 0);

    // Apply promo code discount (example logic)
    const promoDiscount = promoCode === 'DISCOUNT10' ? subtotal * 0.1 : 0;

    // Base total after discount
    const baseTotal = subtotal - promoDiscount;

    // Additional fees
    const tipAmount = (baseTotal * tip) / 100;
    const deliveryFee = orderType === 'delivery' ? 50 : 0; // Fixed at $5 for delivery (not 50)

    // Final total including all fees
    const finalTotal = baseTotal + tipAmount + deliveryFee;

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            subtotal, // Raw subtotal before discounts/fees
            baseTotal, // Total after promo discount
            finalTotal, // Total with tip and delivery
            tip,
            setTip,
            promoCode,
            setPromoCode,
            orderType,
            setOrderType,
            deliveryFee,
            tipAmount,
            promoDiscount,
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