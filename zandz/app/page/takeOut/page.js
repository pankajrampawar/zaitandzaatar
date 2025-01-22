'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";


export default function TakeOut() {

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Gyro Sandwich in Saint Paul"
                title="QUICK AND CONVENIENT TAKEOUT"
                subTitle="In Saint Paul, MN"
                Details="When you're craving a great meal but don't have time to dine in, our takeout service in St. Paul, MN, is the perfect solution. Choose from a variety of freshly made dishes, whether you're in the mood for Mediterranean cuisine, comfort food, or something lighter. With fast and convenient takeout, you can enjoy your meal wherever you are, whether you're at home, at the office, or on the go."
                buttonText="Order Now"
                isImageLeft={true}
            />
        </div>
    )
}