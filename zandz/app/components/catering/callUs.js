import { anek_gujarati, lato } from "@/app/fonts";
import Image from "next/image";

export default function CallUs({ toggleCallUs }) {
    return (
        <div className={`bg-[#130902] text-white ${anek_gujarati.className} font-semibold p-[10%]  min-w-fit rounded-lg`}>
            <div className="flex justify-end w-full">
                <button onClick={toggleCallUs}>
                    <Image
                        src="/close.svg"
                        alt="close button"
                        width="20"
                        height="20"
                        className="invert"
                    />
                </button>
            </div>
            <div className="w-fit flex flex-col gap-2">
                <div className="text-2xl sm:text-3xl">
                    Not sure what to order?
                </div>
                <div className="text-3xl sm:text-5xl whitespace-nowrap bg-foreground p-2">
                    GIVE US A CALL!
                </div>
            </div>

            <div className="mt-4">
                <p className="font-normal">We're just a call away—let us help you pick your favorites!</p>
                <button className={`${lato.className} mt-3 p-2 bg-button text-xl border border-button hover:bg-transparent hover:rounded-xl`}>
                    <a href="tel:+16124714638">
                        Place a Call!
                    </a>
                </button>
                <div className="text-xl mt-3 font-normal tracking-wide">
                    +1 612-471-4638
                </div>
            </div>
        </div>
    )
}