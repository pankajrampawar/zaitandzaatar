import Image from "next/image";

export default function ImageSection() {
    return (
        <div className="flex w-full max-w-[1560px] p-[5%] pt-[10%]">
            <Image
                src="/foodPhoto.png"
                alt="Food Image"
                width="760"
                height="1300"
                priority={true}
                className="object-cover w-full rounded-md"
            />
        </div>
    )
}