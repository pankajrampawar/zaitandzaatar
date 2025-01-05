import { anek_gujarati, lato } from "@/app/fonts";
import Image from "next/image";

export default function CallUs({ toggleCallUs }) {
    return (
        <div className={`bg-[#130902] text-white ${anek_gujarati.className} font-semibold p-[10%] hidden xl:block min-w-fit rounded-lg`}>
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
                <div className="text-3xl">
                    Confused on what to order?
                </div>
                <div className="text-5xl whitespace-nowrap bg-foreground p-2">
                    GIVE US A CALL!
                </div>
            </div>

            <div className="mt-4">
                <button className={`${lato.className} p-2 bg-button text-xl border border-button hover:bg-transparent hover:rounded-xl`}>
                    <a href="tel:+16514937438">
                        Place a Call!
                    </a>
                </button>
                <div className="text-xl mt-3 font-normal tracking-wide">
                    +1 651-493-7438
                </div>
            </div>
        </div>
    )
}