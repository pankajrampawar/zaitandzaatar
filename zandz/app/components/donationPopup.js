'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const DonationPopup = () => {
    const router = useRouter();
    const [isMinimized, setIsMinimized] = useState(true);

    const handleMinimizedClick = () => {
        router.push('/h4h');
    };

    return (
        <>
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