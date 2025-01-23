'use client'
import React, { useState } from 'react';
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
        total,
        tipAmount,
        deliveryFee,
        updateQuantity
    } = useCart();
    const router = useRouter();

    const [isCheckoutEnabled, setCheckoutEnabled] = useState(false);
    const [showGuestPopup, setShowGuestPopup] = useState(false);
    const [showGuestForm, setShowGuestForm] = useState(false)
    const [showUserForm, setShowUserForm] = useState(false)

    // Local state to control form inputs
    const [formTip, setFormTip] = useState(tip);
    const [formPromoCode, setFormPromoCode] = useState(promoCode);
    const [formOrderType, setFormOrderType] = useState(orderType);

    // Handle tip change
    const handleTipChange = (e) => {
        const newTip = Number(e.target.value);
        setFormTip(newTip); // Update the local form state
        setTip(newTip); // Update the global CartContext state immediately
    };

    // Handle promo code change
    const handlePromoCodeChange = (e) => {
        const newPromoCode = e.target.value;
        setFormPromoCode(newPromoCode); // Update the local form state
        setPromoCode(newPromoCode); // Update the global CartContext state immediately
    };

    // Handle order type change
    const handleOrderTypeChange = (e) => {
        const newOrderType = e.target.value;
        setFormOrderType(newOrderType); // Update the local form state
        setOrderType(newOrderType); // Update the global CartContext state immediately
    };

    const handleDecreaseQuantity = (item) => {
        console.log(item)
        if (item.quantity >= 50) {
            updateQuantity(item.name, item.quantity - 50); // Decrease quantity by 1
        }
    };

    const handleIncreaseQuantity = (item) => {
        console.log(item)
        if (item.quantity >= 50) {
            updateQuantity(item.name, item.quantity + 50);
        }
    }

    const taxRate = 9.875;
    const taxAmount = (total + deliveryFee) * (taxRate / 100);

    React.useEffect(() => {
        if (items.length > 0 && (orderType === 'pickup' || (orderType === 'delivery' && deliveryFee > 0))) {
            setCheckoutEnabled(true);
        } else {
            setCheckoutEnabled(false);
        }
    }, [items, orderType, deliveryFee]);

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-4">
                <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl border border-white/20 text-center max-w-md w-full">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
                    <p className="text-gray-600 mb-6">Looks like you haven't added anything yet.</p>
                    <button
                        onClick={() => router.push('/ramadan')}
                        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
    }

    const handleGuest = () => {
        setShowGuestPopup(false);
        setShowGuestForm(true);
    }

    const handleGoogleSignIn = () => {
        signIn("google")
        setShowUserForm(true)
    }

    const handleGuestSubmit = (userInfo) => {
        if (!userInfo || typeof userInfo !== 'object') {
            console.error('Invalid user info');
            return;
        }

        // Store the user data as a JSON string in localStorage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        router.push('/ramadan/checkout')
        console.log('User info stored in localStorage');
    }

    const handleUserSubmit = (userInfo) => {
        if (!userInfo || typeof userInfo !== 'object') {
            console.error('Invalid user info');
            return;
        }

        // Add name and email from session to userInfo
        const updatedUserInfo = {
            ...userInfo, // Spread the existing user info (e.g., phone number, address)
            name: session?.user?.name || '', // Add name from session, fallback to empty string
            email: session?.user?.email || '' // Add email from session, fallback to empty string
        };

        // Store the updated user data as a JSON string in localStorage
        localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

        // Redirect to checkout page
        router.push('/ramadan/checkout');

        console.log('User info stored in localStorage');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br pt-40 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>

                <div className="backdrop-blur-lg bg-white/80 rounded-2xl shadow-xl border border-white/20 p-8 xl:flex  gap-4">
                    {/* Cart Items */}
                    <div className="space-y-6 xl:border-r xl:pr-4">
                        {items.map(item => (
                            <div key={item.name} className="flex-col gap-4 items-start flex sm:flex-row sm:items-center justify-between py-4 border-b border-gray-200/50 xl:border-none" >
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
                                        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-600">${item.price} per box</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 ">
                                    <div className="flex items-center bg-gray-100 rounded-full p-1">
                                        <button
                                            onClick={() => { handleDecreaseQuantity(item) }}
                                            className="p-2 rounded-full hover:bg-white transition-colors"
                                        >
                                            <Minus className="h-4 w-4 text-gray-600" />
                                        </button>
                                        <span className="text-gray-700 w-12 text-center font-medium">{item.quantity}</span>
                                        <button
                                            onClick={() => { handleIncreaseQuantity(item) }}
                                            className="p-2 rounded-full hover:bg-white transition-colors"
                                        >
                                            <Plus className="h-4 w-4 text-gray-600" />
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.name)}
                                        className="p-2 rounded-full hover:bg-red-50 text-red-500 hover:text-red-600 transition-colors"
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
                                <label className="text-gray-700 font-medium">Promo Code</label>
                                <input
                                    type="text"
                                    value={formPromoCode}
                                    onChange={handlePromoCodeChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                                    placeholder="Enter promo code"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium">Tip Amount</label>
                                <select
                                    value={formTip}
                                    onChange={handleTipChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                                >
                                    <option value={0}>No Tip</option>
                                    <option value={10}>10% Tip</option>
                                    <option value={15}>15% Tip</option>
                                    <option value={20}>20% Tip</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-700 font-medium">Order Type</label>
                                <select
                                    value={formOrderType}
                                    onChange={handleOrderTypeChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all"
                                >
                                    <option value="pickup">Pickup</option>
                                    <option value="delivery">Delivery</option>
                                </select>
                            </div>
                        </div>

                        {/* Total Section */}
                        <div className="backdrop-blur-md bg-white/50 rounded-xl p-6 space-y-4">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax ({taxRate}%)</span>
                                <span>${taxAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tip</span>
                                <span>${tipAmount.toFixed(2)}</span>
                            </div>
                            {orderType === 'delivery' && (
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Fee</span>
                                    <span>${deliveryFee.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="h-px bg-gray-200 my-4" />
                            <div className="flex justify-between items-center">
                                <span className="text-gray-800 font-medium">Total</span>
                                <span className="text-3xl font-bold text-gray-800">${finalTotal.toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                disabled={!isCheckoutEnabled}
                                className={`w-full mt-6 py-4 rounded-xl font-medium transition-all duration-300 ${isCheckoutEnabled
                                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                {showGuestPopup && <GuestPopup onClose={() => { setShowGuestPopup(false) }} onGuestClick={handleGuest} onGoogleSignIn={handleGoogleSignIn} />}
                {showGuestForm && <GuestForm onClose={() => { setShowGuestForm(false) }} onSubmit={(formData) => { handleGuestSubmit(formData) }} />}
                {showUserForm && <UserForm onClose={() => { setShowUserForm(false) }} onSubmit={(formData) => { handleUserSubmit(formData) }} />}
            </div>
        </div >
    );
}