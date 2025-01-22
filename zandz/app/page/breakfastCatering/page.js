'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";


export default function BreakfastCatering() {

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Breakfast in Saint Paul"
                title="TOP BREAKFAST CATERING"
                subTitle="In Saint Paul, MN "
                Details="Our breakfast catering service in St. Paul, MN, offers a wide selection of freshly prepared, flavorful breakfast dishes to elevate your event. Whether you're hosting a corporate meeting, a special gathering, or a casual brunch, our menu features everything from fluffy pancakes and savory omelets. Each dish is made to order, ensuring your guests enjoy a satisfying and delicious start to their day. Let us take care of the catering so you can focus on enjoying the event!"
                buttonText="Order Now"
                isImageLeft={false}
            />
        </div>
    )
}

