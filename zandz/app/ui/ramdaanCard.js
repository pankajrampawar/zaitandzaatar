import { Phone } from "lucide-react";
import Image from 'next/image';

export default function RamdaanCard() {
    return (
        <a href="tel:+16124714638" className="cursor-pointer shadow-3xl">
            <Image
                src="/popup.png"
                priority="true"
                alt="Call us image"
                width={400}
                height={360}
                className="min-w-[280px] sm:min-w-[400px] h-auto md:min-w-[500px] lg:min-w-[600px] xl:min-w-[600px] cursor-pointer"
            />
        </a>
    );
}
