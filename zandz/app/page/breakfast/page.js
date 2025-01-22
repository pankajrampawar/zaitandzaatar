'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";


export default function Breakfast() {

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Breakfast in Saint Paul"
                title="START YOUR DAY RIGHT"
                subTitle="with the Best Breakfast in St. Paul, MN"
                Details="Breakfast in St. Paul offers a variety of fresh, delicious options to kickstart your day. Whether you crave fluffy pancakes, savory omelets, or a classic breakfast sandwich, our menu features dishes made with high-quality ingredients and served hot to satisfy your morning hunger."
                buttonText="Order Now"
                isImageLeft={false}
            />
        </div>
    )
}

