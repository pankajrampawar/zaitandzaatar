"use client";

import { motion } from "framer-motion";

const HeartSvg = () => {
    return (
        <div className="flex justify-center items-center">
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 139 122"
                width="80"
                height="80"
                fill="none"
            >
                <motion.path
                    d="M51.6406 118.636C33.1877 95.4988 -19.2883 43.076 13.5962 10.1915C32.5516 -8.76381 51.8972 14.3552 61.5963 29.7471C66.0057 36.7446 69.5618 43.9006 73.2407 51.2582C74.5034 53.7836 75.9779 61.2503 77.2407 58.7249C79.1658 54.8748 78.2331 47.2601 79.6406 42.7249C81.5876 36.4512 84.5788 30.8969 88.7962 25.836C96.3837 16.7309 114.537 0.533557 127.641 10.7249C144.528 23.8594 131.111 61.3541 122.663 76.4138C115.51 89.165 106.079 102.597 95.7295 112.947C94.4985 114.178 89 118.636 89 118.636"
                    stroke="#103A12"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2.1,
                        ease: "easeInOut",
                    }}
                />
            </motion.svg>
        </div>
    );
};

export default HeartSvg;