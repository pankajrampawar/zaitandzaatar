import { anek_gujarati } from "@/app/fonts";
import RatingCard from "@/app/ui/ratingCard";

export default function SocialProof() {
    return (
        <div className="max-w-screen overflow-scroll flex flex-col items-center mt-[10%] gap-20">
            <h2 className={`${anek_gujarati.className} text-5xl md:text-6xl md:leading-normal xl:text-7xl xl:leading-tight text-center mx-[2%] sm:mx-none w-full font-bold tracking-wide`}>
                HEAR WHAT OUR CUSTOMERS <br />
                <span className="bg-green-700 text-white px-2">LOVE ABOUT US</span>
            </h2>
            <div className="flex overflow-x-scroll w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                <div className="flex w-full gap-6">
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                    <RatingCard />
                </div>
            </div>
        </div>
    );
}
