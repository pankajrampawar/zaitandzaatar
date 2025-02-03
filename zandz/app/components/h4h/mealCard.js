"use client";
import { poppins, lora } from "@/app/fonts";
import { useState } from "react";

export function MealCard({
    title,
    description,
    price,
    priceLabel,
    features,
    icon: Icon,
    mealCount,
    addMeal,
    removeMeal,
    isPopular = false,
    onDonate,
    buttonText = "Donate Now"
}) {


    return (
        <div className="flex flex-1 justify-start items-center p-6 py-8 rounded-xl shadow-lg hover:shadow-xl bg-white text-primary">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <h1 className={`text-3xl font-medium ${poppins.className}`}>{Icon}{title}</h1>
                    <p className={`${lora.className} text-md`}>{description}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className={`text-4xl font-semibold ${poppins.className}`}>{price}<span className={`font-normal text-lg`}>/{priceLabel}</span></div>
                    <ul className={`${lora.className} flex flex-col gap-1`}>
                        {features.map((feature, index) => {
                            return (
                                <li key={index}>
                                    ✓ {feature}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    {
                        mealCount > 0
                            ?
                            <div className="border-primary text-primary p-3 text-xl w-full rounded-lg border-2 flex justify-between">
                                <button onClick={removeMeal}>
                                    -
                                </button>
                                <div>
                                    {mealCount}
                                </div>
                                <button onClick={addMeal} className="font-bold">+</button>
                            </div>
                            :
                            <button onClick={addMeal} className={`bg-primary text-secondary p-3 text-lg w-full rounded-lg ${poppins.className}`}>Donate Individual Meal</button>
                    }
                </div>
            </div>
        </div>
    );
}