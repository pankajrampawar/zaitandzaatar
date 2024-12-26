'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import up from '@/public/up.svg'
import { lato, lora, raleway } from "../fonts"

export default function FaqHolder({ question, answer }) {
    const [selected, setSelected] = useState(false)
    const [height, setHeight] = useState(0)
    const contentRef = useRef(null)

    const handleClick = () => {
        setSelected((prev) => !prev);
    }

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight)
        }
    }, [selected])

    return (
        <div className="flex border-b border-[#FF8000] py-2 w-full">
            <div onClick={handleClick} className="flex-1 cursor-pointer">
                <div className={`sm:text-lg lg:text-xl py-2 ${lato.className}`}>
                    {question}
                </div>
                <div
                    ref={contentRef}
                    className={`text-sm sm:text-base lg:text-lg ${raleway.className} overflow-hidden transition-all ease-in-out duration-500`}
                    style={{ height: selected ? `${height}px` : '0' }}
                >
                    <div className="sm:mt-2 lg:tracking-wide lg:leading-loose">{answer}</div>
                </div>
            </div>

            <div className={`flex items-center ${selected ? 'rotate-180' : ''} transition-transform duration-500 xl:pr-[10px]`}>
                <Image
                    src={up}
                    alt="up arrow"
                    height={14}
                    width={14}
                />
            </div>
        </div>
    )
}