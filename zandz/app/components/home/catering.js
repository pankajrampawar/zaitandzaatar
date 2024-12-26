'use client'

import ImageTextCard from "@/app/ui/infoCard"
import { useRouter } from "next/navigation"

export default function Catering() {

    const router = useRouter()

    const navigateToCateringPage = () => {
        router.push('/catering')
    }
    return (
        <div className="mt-20 sm:mt-[10%]">
            <ImageTextCard
                imgSource="/catering.png"
                altProp="/catering View of restaurant"
                title="We Cater!"
                subTitle="Flavors to Remember!"
                Details="Celebrate your special occasions with Saint Wich Burgers catering. Whether it’s a wedding, game night, date night, birthday, corporate event, or casual gathering we deliver juicy burgers, fresh sides, and unbeatable flavors that everyone will love. Every celebration deserves great food."
                buttonText="Explore"
                isImageLeft={true}
                buttonFunction={navigateToCateringPage}
            />
        </div>
    )
}