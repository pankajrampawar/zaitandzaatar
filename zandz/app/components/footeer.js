'use client';

import { anek_gujarati, raleway } from "../fonts";

export default function Footer() {
    return (
        <footer className={`bg-[#130902] text-white pt-8 pb-2 ${raleway.className} mt-[100px] xl:mt-[120px] w-screen relative flex flex-col`}
            style={{ backgroundImage: "url('bgPattern.png')", backgroundSize: "auto" }}
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1240px]">
                {/* Logo Section */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center space-x-4">
                        <img src="/logo.png" alt="St. Witch Burgers" className="w-16 h-16 rounded-full" />
                        <h2 className={`text-3xl font-bold tracking-wide ${anek_gujarati.className}`}>Saint Wich Burgers</h2>
                    </div>
                    <p className="mt-2">Serving handcrafted gourmet burgers made with love.</p>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col">
                    <h3 className={`text-2xl font-semibold mb-4 tracking-wide ${anek_gujarati.className}`}>Quick Access</h3>
                    <ul className="space-y-2">
                        {['Home', 'Menu', 'About', 'Catering', 'Rewards'].map((item) => (
                            <li key={item}>
                                <a href={`${item.toLowerCase()}`} className="hover:text-[#E4312B] transition">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col">
                    <h3 className={`text-2xl tracking-wide font-semibold mb-4 ${anek_gujarati.className}`}>Contact Info</h3>
                    <p>Email: <a href="mailto:support@stwichburgers.com" className="hover:text-[#E4312B] transition">support@stwichburgers.com</a></p>
                    <p>Phone: <a href="tel:+16516832722" className="hover:text-[#E4312B] transition">(651) 683-2722</a></p>
                </div>
            </div>

            <div>
                <div className="border-t border-b border-gray-500 py-4 flex justify-center space-x-8 mt-6 invert">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer">
                        <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer">
                        <img src="/facebook.svg" alt="Facebook" className="w-8 h-8 cursor-pointer" />
                    </a>
                    <a href="mailto:support@stwichburgers.com" className="hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer">
                        <img src="/gmail.svg" alt="Gmail" className="w-9 h-9 cursor-pointer" />
                    </a>
                    <a href="tel:+16516832722" className="hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer">
                        <img src="/phone.svg" alt="Phone" className="w-8 h-8 cursor-pointer" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-8 text-center text-sm text-gray-300 ">
                <p>&copy; {new Date().getFullYear()}Saint Wich Burgers. All rights reserved.</p>
            </div>
        </footer>
    );
}

