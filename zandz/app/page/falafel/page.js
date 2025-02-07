'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";
import { useRouter } from "next/navigation";


export default function Falafel() {

    const router = useRouter();

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/falafel.jpeg"
                altProp="Best Gyro Sandwich in Saint Paul"
                title="DELICIOUS FALAFEL"
                subTitle="In St. Paul, MN- Authentic Mediterranean Taste"
                Details="Falafel is a popular Mediterranean dish made from ground chickpeas or fava beans, mixed with herbs and spices, then deep-fried to golden perfection. These crispy balls of flavor are served with warm pita bread, fresh vegetables like tomatoes and cucumbers, and a side of creamy hummus or tahini sauce. Packed with protein, falafel is a delicious, vegetarian-friendly option for a light meal."
                buttonText="Order Now"
                isImageLeft={false}
                cta={() => { router.push('/menu') }}
            />
        </div>
    )
}