'use client'
import ImageTextCardVariant from "@/app/ui/ImageTextCard";
import { useRouter } from "next/navigation";

export default function gyroSandwich() {

    const router = useRouter();

    return (
        <div className="mt-[10%] mb-[5%]">
            <ImageTextCardVariant
                imgSource="/catering.png"
                altProp="Best Gyro Sandwich in Saint Paul"
                title="FINEST GYRO SANDWICH"
                subTitle="In Saint Paul A Mediterranean Delight"
                Details="The gyro is a classic Mediterranean dish featuring seasoned, slow-cooked meat- thinly sliced and served in a warm pita bread. Topped with fresh vegetables like lettuce, tomatoes, and onions, and drizzled with creamy tzatziki sauce, it’s a delicious blend of flavors and textures. Perfect for a quick lunch, dinner, or satisfying snack. Our gyro is crafted fresh daily to deliver authentic Mediterranean taste in every bite."
                buttonText="Order Now"
                isImageLeft={false}
                cta={() => { router.push("/menu") }}
            />
        </div>
    )
}