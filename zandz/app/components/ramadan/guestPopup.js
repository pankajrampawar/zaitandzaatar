import React from 'react';
import { Google } from 'lucide-react';

const GuestPopup = ({ onClose, onGuestClick, onGoogleSignIn }) => {

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-2xl p-8 w-96 space-y-6 shadow-xl">
                <h2 className="text-3xl font-semibold text-gray-800 text-center">
                    Choose an Option
                </h2>

                <div className="space-y-4">
                    <button
                        onClick={onGuestClick}
                        className="w-full py-3 px-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-xl text-lg font-medium hover:bg-gradient-to-l transition-all duration-300"
                    >
                        Continue as Guest
                    </button>

                    <button
                        onClick={onGoogleSignIn}
                        className="w-full py-3 px-4 bg-button text-white rounded-xl text-lg font-medium flex items-center justify-center space-x-2   transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl"
                    >
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GuestPopup;