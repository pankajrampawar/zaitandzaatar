export const metadata = {
    title: "Flavorful Falafel in St. Paul",
    description: "Craving falafel in St. Paul? Enjoy our crispy, golden falafel made with fresh ingredients and served with creamy hummus, veggies, and pita for the ultimate Mediterranean meal."
};

export default function FalafelLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
