'use client'
import { lora, poppins } from "../fonts";
import { PhoneIcon, MailIcon } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Contact() {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div ref={ref} className="flex justify-center items-center flex-col">
            <div className="w-full h-[50vh] bg-gradient-to-b from-[#E8F5E9] to-[#81C784]"></div>
            {/* this below div should move up when we scroll */}
            <motion.div style={{ y: yTransform }} className={`${lora.className} bg-primary flex gap-4 w-[90vw] text-secondary p-8 py-4 rounded-[20px] max-w-[960px] -translate-y-1/3 flex-col items-center lg:flex-row lg:items-stretch`}>
                <div className="my-10 justify-evenly flex flex-col">
                    <div className="mb-6">
                        <h2 className={`${poppins.className} text-4xl font-medium tracking-wide my-3 mb-3`}>Get in Touch</h2>
                        <p className="text-base">We are always open for support. If you feel you can make a difference in any way, our doors are always open for you.</p>
                    </div>

                    <div className="mb-6 space-y-4">
                        <div className="flex items-center space-x-4">
                            <PhoneIcon className="text-secondary w-6 h-6" />
                            <p>+1 (612) 471-4638</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <MailIcon className="text-secondary w-6 h-6" />
                            <p>support@zaitzaatar.com</p>
                        </div>
                    </div>

                    <div className="text-lg tracking-wide italic">
                        H4H - Humans For Humanity<br /> Making small differences for the Greater Good.
                    </div>
                </div>

                <div className={`my-10 w-full max-w-[600px] sm:px-4 rounded-[16px] ${poppins.className}`}>
                    <section className="bg-secondary p-6 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit} className="space-y-6 py-6 text-primary/70">
                            <div className="flex flex-col sm:flex-row justify-between gap-2">
                                <div className="flex-1">
                                    <label htmlFor="name" className="block text-base font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full p-2 pb-1 focus:outline-none bg-secondary border-b border-primary/70 placeholder-primary/30 font-normal`"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="block text-base font-medium">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 pb-1 focus:outline-none bg-secondary border-b border-primary/70 placeholder-primary/30 font-normal"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-base font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-2 pb-1 focus:outline-none bg-secondary border-b border-primary/70 placeholder-primary/30 font-normal"
                                    placeholder="Enter subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-base font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 pb-1 focus:outline-none bg-secondary border-b border-primary/70 placeholder-primary/30 font-normal"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-primary text-secondary p-2 rounded-md hover:bg-green-700 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}