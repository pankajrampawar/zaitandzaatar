export const metadata = {
    title: "Delicious Breakfast in St. Paul, MN",
    description: "Looking for the best breakfast in St. Paul, MN? Enjoy freshly prepared dishes like pancakes, omelets, and more, all served with a side of warm hospitality."
};

export default function BreakfastLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
