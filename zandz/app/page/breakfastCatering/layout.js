export const metadata = {
    title: "Top Breakfast Catering in St. Paul, MN",
    description: "Need breakfast catering in St. Paul, MN? Enjoy a variety of fresh, delicious breakfast options, from pancakes to omelets, perfect for meetings, parties, or any special event."
};

export default function BreakfastCateringLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
