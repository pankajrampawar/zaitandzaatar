'use client'

import ImageTextCard from "@/app/ui/infoCard"
import { useRouter } from "next/navigation"

export default function Catering() {

    const router = useRouter()

    const navigateToCateringPage = () => {
        router.push('/catering')
    }
    return (
        <div className="mt-20 sm:mt-[10%] max-w-[1440px]">
            <ImageTextCard
                imgSource="/catering.png"
                altProp="/catering View of restaurant"
                title="We Cater!"
                subTitle="Flavors to Remember!"
                Details="Make your special occasions unforgettable with Zait & Za'atar catering services. From weddings and birthday parties to corporate events and family gatherings, we offer a wide range of Mediterranean and select Indian dishes at affordable prices. Great food creates great memories—let’s make some together."
                buttonText="Explore"
                isImageLeft={true}
                third={false}
                second={false}
                buttonFunction={navigateToCateringPage}
            />
        </div>
    )
}