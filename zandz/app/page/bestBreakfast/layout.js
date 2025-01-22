export const metadata = {
    title: "Best Breakfast in Saint Paul, MN",
    description: "Craving the best breakfast in St. Paul? Indulge in fresh, flavorful breakfast dishes like pancakes, omelets, and more, all made to order for a perfect start to your day."
};

export default function BestBreakfastLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
