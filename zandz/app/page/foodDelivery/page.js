'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";


export default function BestBreakfast() {

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Breakfast in Saint Paul"
                title="CONVENIENT FOOD DELIVERY"
                subTitle="In Saint Paul, MN"
                Details="Looking for food delivery in St. Paul, MN? Whether you're in the mood for Mediterranean flavors, comfort food, or something fresh and healthy, our delivery service brings the best dishes directly to your doorstep. With quick, reliable delivery and a menu full of delicious options, you can enjoy a great meal without leaving the comfort of your home or office. Perfect for busy days, special occasions, or just a cozy meal in!"
                buttonText="Order Now"
                isImageLeft={false}
                cta={false}
            />
        </div>
    )
}

