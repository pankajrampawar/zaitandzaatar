'use client'
import FaqHolder from "@/app/ui/faqHolder";
import { anek_gujarati, merienda } from "@/app/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Faq() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const faqs = [
        {
            question: "What kind of food do you serve at Zait & Za'atar? ",
            answer: "We serve a delightful fusion of Mediterranean and selected Indian dishes, bringing you the best of both worlds in every bite! Whether you're craving fresh hummus or spicy curry, we've got something for everyone."
        },
        {
            question: "What are your opening hours?",
            answer: "We're open from 10 AM to 9 PM All days of the week."
        },
        {
            question: "Do you offer vegetarian or vegan options?",
            answer: "Absolutely! Our menu is full of delicious vegetarian and vegan choices, carefully crafted to ensure everyone can enjoy a flavorful meal.",
        },
        {
            question: "Is there a kids' menu available?",
            answer: "Yes, we have a special kids' menu filled with fun and tasty dishes that are sure to please even the pickiest eaters. Bring the whole family!",
        },
        {
            question: "Can we order takeout or delivery? ",
            answer: "Of course! You can call us for takeout or use your favorite delivery app to have our scrumptious dishes delivered straight to your door. "
        },
        {
            question: "Are there gluten-free options on your menu? ",
            answer: "Yes, we offer a variety of gluten-free choices. Just ask our friendly staff, and they'll be more than happy to guide you through the options. "
        },
        {
            question: "Do you have outdoor seating? ",
            answer: "We do! Enjoy your meal in the fresh air on our lovely patio when the Minnesota weather is at its best. "
        },
        {
            question: "Can I make a reservation? ",
            answer: "While we welcome walk-ins with open arms, we do recommend making a reservation if you're planning to visit during peak hours to ensure we have a table ready for you. "
        },
        {
            question: "What forms of payment do you accept? ",
            answer: "We accept all major credit cards, cash, and contactless payments to make your dining experience smooth and easy. "
        },
        {
            question: "Do you host private evesnts or catering? ",
            answer: "Yes, we love hosting special occasions and offer catering services for your events. Reach out to us, and we'll make your gathering delicious and memorable!"
        },
        {
            question: "How can I provide feedback?",
            answer: `We value your feedback and it means the world to us! Share your favorite food experience by leaving a review on <a href="https://g.page/r/Cez5eb__XLhvEBM/review" style="color: red; text-decoration: underline;">Google</a> & <a href="https://www.yelp.com/writeareview/biz/EjMjgTfBYY_pkY5kZDi1Tw?return_url=%2Fbiz%2FEjMjgTfBYY_pkY5kZDi1Tw&review_origin=biz-details-war-button" style="color: red; text-decoration: underline;">Yelp</a>.`
        }
    ];

    return (
        <div className="p-4 max-w-[1440px] px-[5%] sm:pt-20 md:pt-[180px] flex flex-col items-center">
            <div className={`${anek_gujarati.className} text-5xl md:text-6xl xl:text-7xl tracking-wide pb-4 md:pb-[80px] font-bold`}>
                <h2>
                    <span className="relative">
                        <span className="relative z-10 text-white">FAQ&apos;s</span>
                        <motion.div
                            ref={ref}
                            className="absolute bg-foreground h-full w-[105%] top-0 left-1/2 -translate-x-1/2"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: "105%" } : {}}
                            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        />
                    </span>
                </h2>
            </div>
            <div>
                {faqs.map((faq, index) => {
                    return (
                        <FaqHolder key={index} question={faq.question} answer={<span dangerouslySetInnerHTML={{ __html: faq.answer }} />} />
                    )
                })}
            </div>
        </div>
    );
}
