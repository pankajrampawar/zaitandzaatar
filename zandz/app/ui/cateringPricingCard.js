'use client';

import Image from "next/image";

export default function CateringPricingCard({ name, price, content, image, alt, addItemsInCart, updateQuantity, quantity }) {
    return (
        <div className="flex flex-col sm:flex-row max-screen  min-[480px]:flex-row items-center bg-background p-4 rounded-md gap-4 md:max-w-[690px]">
            {/* Image Section */}
            <div className="bg-gray-300 w-full min-h-[180px] min-[480px]:min-h-[150px] min-[480px]:w-[150px] rounded-md min-[480px]:aspect-square self-center relative overflow-hidden">
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

                {/* Add to Cart Button */}
                <div className="w-full">
                    {quantity > 0 ? (
                        <div className="flex justify-between gap-2 bg-black text-white max-w-[100px] py-2 px-4 font-semibold rounded-md">
                            <button onClick={() => updateQuantity(name, 'decrement')}>
                                -
                            </button>
                            <span>{quantity}</span>
                            <button onClick={() => updateQuantity(name, 'increment')}>+</button>
                        </div>
                    ) : (
                        <button
                            className="w-full sm:w-auto bg-black text-white text-sm font-semibold py-2 px-4 rounded-md hover:bg-gray-800 max-w-[120px]"
                            onClick={() => { addItemsInCart(name, price) }}
                        >
                            Add to Cart
                        </button> // Add to Cart button if not in the cart
                    )}
                </div>
            </div>
        </div>
    );
}
