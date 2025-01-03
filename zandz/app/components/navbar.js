'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { lato } from "../fonts";
import SignIn from "./sign-in";

export default function Navbar() {
    const router = useRouter();
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOverlay = () => {
        setIsOverlayOpen((prev) => !prev);
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
                md:text-base md:gap-6 lg:text-xl xl:text-2xl xl:font-bold ${lato.className}`}
            >
                <li><button onClick={() => navigateFunction('')}>Home</button></li>
                <li><button onClick={() => navigateFunction('menu')}>Menu</button></li>
                <li><button onClick={() => navigateFunction('about')}>About</button></li>
                <li><button onClick={() => navigateFunction('catering')}>Catering</button></li>
                <li><button onClick={() => navigateFunction('rewards')}>Rewards</button></li>
                <li><button onClick={() => router.push('https://www.stwichburgers.com/')}>Sister Restaurant</button></li>
            </ul>
        );
    };

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

            <div className="hidden md:flex">
                <div className="py-4 px-4 backdrop-blur-sm bg-[#ffeee175] rounded-xls rounded-xl">
                    <NavigationItem />
                </div>
            </div>

            <div className="hidden md:flex flex-1 justify-end relative gap-2">
                <div
                    onMouseEnter={handleDrawerEnter}
                    onMouseLeave={handleDrawerLeave}
                    className="relative"
                >
                    <button
                        className="bg-button text-white hover:bg-inherit hover:rounded-2xl transition-all ease-in-out duration-300 hover:text-black hover:border-2 hover:border-black md:p-2 lg:p-3 md:text-base lg:text-xl"
                    >
                        Order Online
                    </button>
                    <div className={`${isDrawerOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden bg-white text-2xl absolute top-14 right-0 flex flex-col items-start transition-[max-height] ease-out duration-400 shadow-lg`}>
                        <button className="py-2 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                            <a href="https://www.order.store/store/saint-wich-burgers/FfblFeilXLutIRj0Lu74Kg" target="_blank">DoorDash</a>
                        </button>
                        <button className="pt-4 pb-2 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                            <a href="https://order.online/business/saint-wich-burgers-11755901" target="_blank" className="hover:cursor-pointer">Uber Eats</a>
                        </button>
                        <button className="py-2 pb-4 px-4 hover:bg-slate-200 min-w-full flex justify-start">
                            <a href="https://saintwichburgers.dine.online" target="_blank">Grubhub</a>
                        </button>
                    </div>
                </div>

                <div className={`text-button p-2 text-xl flex justify-center items-center`}>
                    <SignIn />
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

                <div className={`absolute z-40 w-screen top-0 left-0 bg-color backdrop-blur flex items-center justify-center py-[40px] ${isOverlayOpen ? '-translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ease-in-out transition-all duration-300 `}>
                    <div className="mt-5">
                        <NavigationItem />
                    </div>
                </div>
            </div>
        </section>
    );
}
