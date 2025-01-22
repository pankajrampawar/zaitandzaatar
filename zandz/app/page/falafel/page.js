'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";


export default function Falafel() {

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Gyro Sandwich in Saint Paul"
                title="DELICIOUS FALAFEL"
                subTitle="In St. Paul, MN- Authentic Mediterranean Taste"
                Details="Falafel is a popular Mediterranean dish made from ground chickpeas or fava beans, mixed with herbs and spices, then deep-fried to golden perfection. These crispy balls of flavor are served with warm pita bread, fresh vegetables like tomatoes and cucumbers, and a side of creamy hummus or tahini sauce. Packed with protein, falafel is a delicious, vegetarian-friendly option for a light meal."
                buttonText="Order Now"
                isImageLeft={false}
            />
        </div>
    )
}