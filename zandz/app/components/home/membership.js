'use client'

import ImageTextCard from "@/app/ui/infoCard"
import { useRouter } from "next/navigation"

export default function Membership() {

    const router = useRouter()

    const navigateToRewardsPage = () => {
        router.push('/rewards')
    }
    return (
        <div className="w-full">
            <ImageTextCard
                imgSource="/loyaltyCard.png"
                altProp="/Loyalty Card of restaurant"
                title="Save More,"
                subTitle="Become a Member"
                buttonText="Learn More"
                Details="Every time you shop, you’re working your way to exciting rewards and exclusive perks. With our Loyalty Program, you’ll earn points that can be redeemed for discounts, special gifts, and VIP treatment. Plus, as a member, you’ll always be the first to know about our latest launches and offers."
                isImageLeft={true}
                buttonFunction={navigateToRewardsPage}
            />
        </div>
    )
}