import Image from "next/image";
export default function RatingCard({ review, name, src }) {
    return (
        <div className="bg-[#f9f3ee] p-6 rounded-md mx-auto shadow-md sm:min-w-[450px] min-w-[300px] flex flex-col justify-center max-w-fit">
            {/* Stars Section */}
            <div className="flex justify-start mb-4">
                {[...Array(5)].map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="red"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="none"
                        className="w-5 h-5"
                    >
                        <path
                            d="M12 .587l3.668 7.568 8.332 1.151-6.166 6.003 1.456 8.299L12 18.87 4.71 23.608l1.456-8.299L0 9.306l8.332-1.151z"
                        />
                    </svg>
                ))}
            </div>

            {/* Text Section */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review}
            </p>

            {/* User Section */}
            <div className="flex items-center">
                <div className="w-8 h-8 rounded-full mr-4 bg-gray-500">
                    {src && <Image
                        src={src}
                        alt="person image"
                        width="50"
                        height="50"
                        className="rounded-full"
                    />}
                </div>
                <span className="text-gray-800 text-sm font-semibold">{name}</span>
            </div>
        </div>
    );
}
