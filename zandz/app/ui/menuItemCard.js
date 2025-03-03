import Image from "next/image"
import { lato, raleway } from "../fonts"

export default function MenuItemCard({ name, price, content, image, alt }) {
    return (
        <div className="flex flex-col sm:flex-row max-screen  min-[480px]:flex-row items-center bg-background p-4 rounded-md gap-4 md:max-w-[690px]">
            {/* Image Section */}
            <div className="bg-gray-300 w-full min-h-[180px] min-[480px]:min-h-[150px] min-[480px]:w-[150px] rounded-md min-[480px]:aspect-square self-center relative overflow-hidden sm:max-w-[180px]">
                {image && (
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        loading="lazy"
                        className="object-cover"
                    />
                )}
            </div>


            {/* Content Section */}
            <div className="flex flex-1 flex-col justify-between w-full">
                {/* Title and Price */}
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{name}</h3>
                </div>

                {/* Description (Optional Placeholder) */}
                <p className="text-sm text-gray-600 mb-4 w-full">
                    {content}
                </p>
            </div>
        </div>
    )
}