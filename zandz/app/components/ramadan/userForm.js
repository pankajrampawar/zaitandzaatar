import React, { useState } from 'react';

const UserForm = ({ onClose, onSubmit }) => {

    const [formData, setFormData] = useState({
        phoneNumber: '',
        address: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

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
                    User Information
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-lg text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="address" className="block text-lg text-gray-700">
                            Delivery Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your address"
                            rows="4"
                            required
                        />
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="py-3 px-6 bg-button text-white rounded-xl text-lg font-medium transition-all duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;