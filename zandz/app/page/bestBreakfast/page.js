'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";
import { useRouter } from "next/navigation";

export default function BestBreakfast() {

    const router = useRouter();

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Breakfast in Saint Paul"
                title="DISCOVER TEH BEST BREAKFAST"
                subTitle="In Saint Paul"
                Details="When it comes to the best breakfast in St. Paul, our menu features a variety of dishes that cater to all tastes. From fluffy pancakes and savory omelets to freshly brewed coffee and local favorites, every dish is prepared with the finest ingredients to ensure a flavorful and satisfying start to your morning. Whether you're after something classic or a unique breakfast twist, you'll find the perfect meal to fuel your day."
                buttonText="Order Now"
                isImageLeft={false}
                cta={() => { router.push("/menu") }}
            />
        </div>
    )
}

