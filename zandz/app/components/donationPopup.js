'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const DonationPopup = () => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true)
        }, 3000)

        return
    }, [])

    const handleClose = () => {
        setIsOpen(false);
        setIsMinimized(true);
    };

    const handleMinimizedClick = () => {
        router.push('/h4h')
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                    >
                        <motion.div
                            className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden"
                            layoutId="donation-container"
                        >
                            <button
                                onClick={handleClose}
                                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-48">
                                <img
                                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
                                    alt="Helping hands"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#103A12]/80 to-transparent" />
                            </div>

                            <div className="p-6 bg-[#F3FCF4]">
                                <h2 className="text-2xl font-bold text-[#103A12] mb-3">Help Us Feed Those in Need</h2>
                                <p className="text-gray-700 mb-4">
                                    Join us in making a difference. Your donation can help provide warm meals to families in need. Together, we can create a world where no one goes hungry.
                                </p>
                                <button
                                    onClick={() => { router.push('/h4h') }}
                                    className="w-full bg-[#103A12] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#103A12]/90 transition-colors flex items-center justify-center gap-2"
                                >
                                    <Heart size={20} />
                                    Donate Now
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMinimized && (
                    <motion.button
                        layoutId="donation-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={handleMinimizedClick}
                        className="fixed bottom-10 right-10 bg-[#103A12] text-white p-4 rounded-full shadow-lg hover:bg-[#103A12]/90 transition-colors z-50 flex items-center gap-2"
                    >
                        <Heart size={20} className="text-white" />
                        <span className="font-medium">Donate</span>
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};