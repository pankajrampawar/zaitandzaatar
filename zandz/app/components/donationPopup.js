'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export const DonationPopup = () => {
    const router = useRouter();
    const pathname = usePathname(); // Get the current URL pathname
    const [isMinimized, setIsMinimized] = useState(true);

    const handleMinimizedClick = () => {
        router.push('/h4h');
    };

    // Check if the current pathname includes '/ramadan'
    const isRamadanPage = pathname.includes('/ramadan');

    // If on a /ramadan page, don't render the button
    if (isRamadanPage) {
        return null;
    }

    return (
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
    );
};