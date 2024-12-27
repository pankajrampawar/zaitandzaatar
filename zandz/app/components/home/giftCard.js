'use client'
import { useRouter } from "next/navigation"
import ImageTextCard from "@/app/ui/infoCard"

export default function GiftCard() {
    const router = useRouter()

    const navigateToRewardsPage = () => {
        router.push('/rewards')
    }
    return (
        <div className="">
            <ImageTextCard
                imgSource="/loyaltyCard.png"
                altProp="/Gift card of restaurant"
                title="Share Delight,"
                subTitle="Buy a Gift Card!"
                Details="Give the gift of endless possibilities! Our Gift Cards let your loved ones shop for what they really want, making them the ultimate thoughtful present. Whether it's a birthday, an anniversary, or just a little surprise, our Gift Cards make gifting easy and enjoyable. Available in multiple values and ready to use instantly, it’s the perfect way to show you care without the guesswork."
                buttonText="Learn More"
                isImageLeft={false}
                buttonFunction={navigateToRewardsPage}
            />
        </div>
    )
}