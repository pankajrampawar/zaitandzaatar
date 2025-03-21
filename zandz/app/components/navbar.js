'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { lato, poppins } from "../fonts";
import SignIn from "./sign-in";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { DonationPopup } from "./donationPopup";
import { motion } from 'framer-motion';
import { Heart } from "lucide-react";

export default function Navbar() {

    const pathname = usePathname();
    const router = useRouter();
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
    const { data: session } = useSession();
    const dropdownRef = useRef(null); // Reference for dropdown
    const profileImageRef = useRef(null); // Reference for profile image

    const handleMinimizedClick = () => {
        router.push('/h4h');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if click is outside the image or dropdown
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                profileImageRef.current &&
                !profileImageRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleOverlay = () => {
        setIsOverlayOpen((prev) => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const navigateFunction = (pageToNavigate) => {
        handleOverlay();
        router.push(`/${pageToNavigate}`);
    };

    const handleDrawerEnter = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerLeave = () => {
        setIsDrawerOpen(false);
    };

    const NavigationItem = () => {
        return (
            <ul
                className={`flex flex-col md:flex-row gap-4 text-lg items-center
                md:text-sm md:gap-6 lg:text-lg xl:text-xl xl:font-bold ${lato.className}`}
            >
                <li><button onClick={() => navigateFunction('')}>Home</button></li>
                <li><button onClick={() => navigateFunction('menu')}>Menu</button></li>
                <li><button onClick={() => navigateFunction('about')}>About</button></li>
                <li><button onClick={() => navigateFunction('catering')}>Catering</button></li>
                <li><button onClick={() => navigateFunction('rewards')}>Rewards</button></li>
                <li><button onClick={() => router.push('https://www.stwichburgers.com/')}>Sister Restaurant</button></li>
                <li><button onClick={() => { router.push('ramadan') }}>Ramadan Orders</button></li>
            </ul>
        );
    };

    if (pathname === '/h4h') {
        return (
            <div className="hidden">

            </div>
        )
    }

    return (
        <section className="flex w-full items-center justify-between px-[2%] xl:px-[1%] py-[1%]">
            <div className="relative z-50 flex-1">
                <button onClick={() => navigateFunction('')}>
                    <Image
                        src="/logo.png"
                        priority={true}
                        alt="Logo"
                        width="80"
                        height="80"
                        className="max-h-[60px] aspect-square max-w-[60px] md:min-w-[90px] md:min-h-[90px] xl:min-w-[120px] xl:min-h-[120px]"
                    />
                </button>
            </div>

            <div className="hidden md:flex relative">
                <div className="py-4 px-4 backdrop-blur-sm bg-[#f0ba9028] rounded-xls rounded-xl">
                    <NavigationItem />
                </div>
            </div>

            <div className="hidden md:flex flex-1 justify-end items-center relative gap-2">
                <div className="hidden 2xl:flex">
                    <button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={handleMinimizedClick}
                        className=" bg-[#103A12] text-white p-4 rounded-full shadow-lg hover:bg-[#103A12]/90 transition-colors z-50 flex items-center gap-2"
                    >
                        <Heart size={20} className="text-white" />
                        <span className="font-medium">Donate</span>
                    </button>
                </div>

                <div
                    onMouseEnter={handleDrawerEnter}
                    onMouseLeave={handleDrawerLeave}
                    className="relative"
                >
                    <button
                        className="bg-button text-white hover:bg-inherit hover:rounded-2xl transition-all ease-in-out duration-300 hover:text-black hover:border-2 hover:border-black md:p-1 lg:p-2 md:text-sm lg-text-base xl:text-lg"
                    >
                        Order Online
                    </button>
                    <div className={`${isDrawerOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white text-2xl absolute top-14 right-0 flex flex-col items-start transition-[max-height] ease-out duration-400 shadow-lg`}>
                        <button className="py-2 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                            <a href="https://order.online/store/24509526?slug=-11399864&pickup=true&hideModal=true&redirected=true" target="_blank">DoorDash</a>
                        </button>
                        <button className="pt-4 pb-2 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                            <a href="https://www.order.store/store/zait-%26-zaatar/AkhJK0DPUuqNMNVUqNjsfg" target="_blank" className="hover:cursor-pointer">Uber Eats</a>
                        </button>
                        <button className="py-2 pb-4 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                            <a href="https://zaitzaatar.dine.online" target="_blank">Grubhub</a>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {session ? (
                        <div>
                            <img
                                src={session.user.image}
                                alt={session.user.name}
                                width="50"
                                height="50"
                                className="rounded-full cursor-pointer"
                                onClick={toggleDropdown}
                                ref={profileImageRef} // Add ref to the image
                            />
                            {isDropdownOpen && (
                                <div
                                    className="absolute right-0 mt-2 bg-white border rounded-md shadow-lg"
                                    ref={dropdownRef} // Add ref to the dropdown
                                >
                                    <button
                                        className="block px-4 py-2 text-black hover:bg-gray-200"
                                        onClick={() => signOut()}
                                    >
                                        Log Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-button p-2 text-sm lg:text-base xl:text-xl flex justify-center items-center">
                            <SignIn />
                        </div>
                    )}
                </div>
            </div>

            <div className="md:hidden">
                <button onClick={handleOverlay} className="relative z-50">
                    {isOverlayOpen ? (
                        <Image src='/close.svg' alt="Close Icon" width='20' height='10' className="mx-2" />
                    ) : (
                        <Image src='/hamMenu.svg' alt="Menu icon" width='30' height='20' />
                    )}
                </button>

                <div className={`absolute z-40 w-screen top-0 left-0 bg-color backdrop-blur flex flex-col gap-4 items-center justify-center py-[40px] ${isOverlayOpen ? '-translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ease-in-out transition-all duration-300 `}>
                    <div className="mt-5">
                        <NavigationItem />
                    </div>

                    <div className="text-button font-bold">
                        {
                            session ?
                                <div className="text-black">
                                    <button onClick={() => signOut()}>
                                        Log Out
                                    </button>
                                </div>
                                :
                                <SignIn />
                        }
                    </div>
                </div>
            </div>

            {/* banner part */}
            {pathname === "/catering" && pathname === "/ramadan" ?
                "" : < DonationPopup />
            }
        </section>
    );
}
