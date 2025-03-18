'use client';
import React, { useState, useEffect } from 'react';
import { useCart } from '@/app/context/cart';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import GuestPopup from '@/app/components/ramadan/guestPopup';
import GuestForm from '@/app/components/ramadan/guestForm';
import UserForm from '@/app/components/ramadan/userForm';

export default function Cart() {
    const { data: session, status } = useSession();
    const {
        items,
        tip,
        setTip,
        promoCode,
        setPromoCode,
        orderType,
        setOrderType,
        finalTotal,
        subtotal, // Updated to use raw subtotal
        promoDiscount, // Added for discount breakdown
        tipAmount,
        deliveryFee,
        updateQuantity,
        removeFromCart,
    } = useCart();
    const router = useRouter();

    const [isCheckoutEnabled, setCheckoutEnabled] = useState(false);
    const [showGuestPopup, setShowGuestPopup] = useState(false);
    const [showGuestForm, setShowGuestForm] = useState(false);
    const [showUserForm, setShowUserForm] = useState(false);

    // Local state to control form inputs
    const [formTip, setFormTip] = useState(tip);
    const [formPromoCode, setFormPromoCode] = useState(promoCode);
    const [formOrderType, setFormOrderType] = useState(orderType);

    // Color palette
    const colors = {
        background: "#FFEEE1",
        foreground: "#149954",
        button: "#E4312B",
        secondary: "#F3FCF4",
        primary: "#103A12",
    };

    // Handle tip change
    const handleTipChange = (e) => {
        const newTip = Number(e.target.value);
        setFormTip(newTip);
        setTip(newTip);
    };

    // Handle promo code change
    const handlePromoCodeChange = (e) => {
        const newPromoCode = e.target.value;
        setFormPromoCode(newPromoCode);
        setPromoCode(newPromoCode);
    };

    // Handle order type change
    const handleOrderTypeChange = (e) => {
        const newOrderType = e.target.value;
        setFormOrderType(newOrderType);
        setOrderType(newOrderType);
    };

    // Adjusted quantity handlers based on type
    const handleDecreaseQuantity = (item) => {
        const step = item.type === 'bulk' ? 50 : 1;
        const minQuantity = item.type === 'bulk' ? 50 : 1;
        if (item.quantity > minQuantity) {
            updateQuantity(item.name, item.quantity - step, item.type);
        } else {
            removeFromCart(item.name, item.type); // Remove if below minimum
        }
    };

    const handleIncreaseQuantity = (item) => {
        const step = item.type === 'bulk' ? 50 : 1;
        updateQuantity(item.name, item.quantity + step, item.type);
    };

    const taxRate = 9.875;
    const taxAmount = (subtotal - promoDiscount + deliveryFee) * (taxRate / 100); // Tax on subtotal minus discount plus delivery
    const adjustedFinalTotal = finalTotal + taxAmount; // Include tax in final total

    useEffect(() => {
        if (items.length > 0 && (orderType === 'pickup' || (orderType === 'delivery' && deliveryFee > 0))) {
            setCheckoutEnabled(true);
        } else {
            setCheckoutEnabled(false);
        }
    }, [items, orderType, deliveryFee]);

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4" >
                <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20 text-center max-w-md w-full">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4" style={{ color: colors.primary }} />
                    <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary }}>Your Cart is Empty</h2>
                    <p className="mb-6" style={{ color: colors.primary }}>Looks like you haven't added anything yet.</p>
                    <button
                        onClick={() => router.push('/ramadan')}
                        className="text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: colors.button }}
                    >
                        Browse Menu
                    </button>
                </div>
            </div>
        );
    }

    const handleCheckout = () => {
        if (!session?.user) {
            setShowGuestPopup(true);
        } else {
            setShowUserForm(true);
        }
    };

    const handleGuest = () => {
        setShowGuestPopup(false);
        setShowGuestForm(true);
    };

    const handleGoogleSignIn = () => {
        signIn("google");
        setShowUserForm(true);
    };

    const handleGuestSubmit = (userInfo) => {
        if (!userInfo || typeof userInfo !== 'object') {
            console.error('Invalid user info');
            return;
        }
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        router.push('/ramadan/checkout');
    };

    const handleUserSubmit = (userInfo) => {
        if (!userInfo || typeof userInfo !== 'object') {
            console.error('Invalid user info');
            return;
        }
        const updatedUserInfo = {
            ...userInfo,
            name: session?.user?.name || '',
            email: session?.user?.email || '',
        };
        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));
        router.push('/ramadan/checkout');
    };

    return (
        <div className="min-h-screen pt-40 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8" style={{ color: colors.primary }}>Your Cart</h1>

                <div className="backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 xl:flex gap-4">
                    {/* Cart Items */}
                    <div className="space-y-6 xl:border-r xl:pr-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex-col gap-4 items-start flex sm:flex-row sm:items-center justify-between py-4 border-b border-gray-200/50 xl:border-none"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className="relative group">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold" style={{ color: colors.primary }}>
                                            {item.name} {item.type === 'individual' && <span className="text-sm font-normal">(Individual)</span>}
                                        </h3>
                                        <p style={{ color: colors.primary }}>${item.price} per box</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center rounded-full p-1" style={{ backgroundColor: colors.secondary }}>
                                        <button
                                            onClick={() => handleDecreaseQuantity(item)}
                                            className="p-2 rounded-full hover:opacity-80 transition-opacity"
                                        >
                                            <Minus className="h-4 w-4" style={{ color: colors.primary }} />
                                        </button>
                                        <span className="w-12 text-center font-medium" style={{ color: colors.primary }}>{item.quantity}</span>
                                        <button
                                            onClick={() => handleIncreaseQuantity(item)}
                                            className="p-2 rounded-full hover:opacity-80 transition-opacity"
                                        >
                                            <Plus className="h-4 w-4" style={{ color: colors.primary }} />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.name, item.type)}
                                        className="p-2 rounded-full hover:bg-red-50 transition-colors"
                                        style={{ color: colors.button }}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="font-medium" style={{ color: colors.primary }}>Promo Code</label>
                                <input
                                    type="text"
                                    value={formPromoCode}
                                    onChange={handlePromoCodeChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                                    placeholder="Enter promo code"
                                    style={{ color: colors.primary }}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-medium" style={{ color: colors.primary }}>Tip Amount</label>
                                <select
                                    value={formTip}
                                    onChange={handleTipChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                                    style={{ color: colors.primary }}
                                >
                                    <option value={0}>No Tip</option>
                                    <option value={10}>10% Tip</option>
                                    <option value={15}>15% Tip</option>
                                    <option value={20}>20% Tip</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="font-medium" style={{ color: colors.primary }}>Order Type</label>
                                <select
                                    value={formOrderType}
                                    onChange={handleOrderTypeChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                                    style={{ color: colors.primary }}
                                >
                                    <option value="pickup">Pickup</option>
                                    <option value="delivery">Delivery</option>
                                </select>
                            </div>
                        </div>

                        {/* Total Section */}
                        <div className="backdrop-blur-md bg-white/50 rounded-xl p-6 space-y-4">
                            <div className="flex justify-between" style={{ color: colors.primary }}>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            {promoDiscount > 0 && (
                                <div className="flex justify-between" style={{ color: colors.foreground }}>
                                    <span>Promo Discount</span>
                                    <span>-${promoDiscount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between" style={{ color: colors.primary }}>
                                <span>Tax ({taxRate}%)</span>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between" style={{ color: colors.primary }}>
                                <span>Tip</span>
                                <span>${tipAmount.toFixed(2)}</span>
                            </div>
                            {orderType === 'delivery' && (
                                <div className="flex justify-between" style={{ color: colors.primary }}>
                                    <span>Delivery Fee</span>
                                    <span>${deliveryFee.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="h-px my-4" style={{ backgroundColor: colors.foreground }} />
                            <div className="flex justify-between items-center">
                                <span className="font-medium" style={{ color: colors.primary }}>Total</span>
                                <span className="text-3xl font-bold" style={{ color: colors.primary }}>${adjustedFinalTotal.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={!isCheckoutEnabled}
                                className={`w-full mt-6 py-4 rounded-xl font-medium transition-all duration-300 ${isCheckoutEnabled
                                    ? 'text-white hover:opacity-90 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                style={{ backgroundColor: isCheckoutEnabled ? colors.button : '#E5E7EB' }}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {showGuestPopup && <GuestPopup onClose={() => setShowGuestPopup(false)} onGuestClick={handleGuest} onGoogleSignIn={handleGoogleSignIn} />}
                {showGuestForm && <GuestForm onClose={() => setShowGuestForm(false)} onSubmit={handleGuestSubmit} />}
                {showUserForm && <UserForm onClose={() => setShowUserForm(false)} onSubmit={handleUserSubmit} />}
            </div>
        </div>
    );
}