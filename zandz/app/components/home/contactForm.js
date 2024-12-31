'use client'
import { anek_gujarati, lato } from '@/app/fonts';
import React, { useState, useRef } from 'react';
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const [loading, setLoading] = useState(false); // State to manage button disable

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Disable button
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Thank you for reaching out! We will get back to you soon.');
                setFormData({
                    name: '',
                    email: '',
                    contactNumber: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                alert(`ERROR: ${errorData.message || 'Something went wrong!'}`);
            }

            const saveResponse = await fetch('/api/saveContact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!saveResponse.ok) {
                const saveError = saveResponse.json();
                console.log(`Save Error: ${saveError.error}`);
            }

        } catch (error) {
            console.error('Form Submission error: ', error);
            alert('An unexpected error occurred. Please try again later.');
        } finally {
            setLoading(false); // Enable button after submission
        }
    };

    return (
        <div className="py-[10%] max-h-[980px] relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className={`${anek_gujarati.className} text-white text-5xl md:text-6xl md:leading-normal xl:text-7xl xl:leading-tight text-center mx-[2%] sm:mx-none w-full font-bold tracking-wide`}>
                        <span className='relative'>
                            <span className='relative z-10'>Get in Touch</span>
                            <motion.div
                                ref={ref}
                                className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "105%" } : {}}
                                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                            />
                        </span>
                    </h2>
                    <p className={`mt-6 text-lg text-white ${lato.className}`}>
                        We'd love to hear from you! Fill out the form below and we'll get back to you shortly.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {/* Left Side */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: "#149954",
                                    focusRingColor: "#149954",
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email address"
                                required
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: "#149954",
                                    focusRingColor: "#149954",
                                }}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                required
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: "#149954",
                                    focusRingColor: "#149954",
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your message"
                                rows="6"
                                required
                                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2"
                                style={{
                                    borderColor: "#149954",
                                    focusRingColor: "#149954",
                                }}
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading} // Disable button if loading
                                className={`w-full py-3 px-6 font-medium rounded-md hover:opacity-90 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                style={{
                                    backgroundColor: "#E4312B",
                                    color: "#FFFFFF",
                                }}
                            >
                                {loading ? 'Submitting...' : 'Send Message'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
