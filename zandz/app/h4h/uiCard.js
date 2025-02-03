import Image from "next/image"
import { lora, poppins } from "../fonts"


export default function UiCard({ img, alt, number, title, description }) {
    return (
        <div className={`bg-secondary text-primary max-w-[360px] min-[390px]:min-w-[360px] max-h-[210px] min-h-[210px] rounded-xl p-4 flex flex-col gap-2 lg:min-w-[280px] lg:max-w-[320px] xl:min-w-[320px] xl:max-w-[340px] ${poppins.className}`}>
            <div className="flex justify-between items-end">
                <p className="text-2xl font-semibold">{number}.</p>
                <div>
                    <Image
                        src={img}
                        alt={alt}
                        width="50"
                        height="50"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium tracking-wide">{title}</h3>
                <p className={`${lora.className}`}>{description}</p>
            </div>
        </div>
    )
}