import Image from "next/image"
import { lato, raleway } from "../fonts"

export default function MenuItemCard({ itemName, itemPrice, itemInfo, img }) {
    return (
        <div className="p-3 flex flex-col gap-1 max-w-[500px]">
            <div className={`${raleway.className} flex justify-between font-semibold xl:text-lg`}>
                <div className="flex items-center gap-2">
                    <h3>
                        {itemName}
                    </h3>
                    {img && <div>
                        <Image
                            src={img}
                            alt="image alt"
                            width="200"
                            height="20"
                            className="max-h-6 max-w-14"
                        />
                    </div>}
                </div>
                <p>${itemPrice}</p>
            </div>

            <div className={`${lato.className} text-sm xl:text-base`}>
                {itemInfo}
            </div>
        </div >
    )
}