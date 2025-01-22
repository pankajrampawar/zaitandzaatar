export const metadata = {
    title: "Food Delivery in St. Paul, MN ",
    description: "Craving food delivery in St. Paul, MN? Enjoy fresh, delicious meals delivered straight to your door, from Mediterranean dishes to local favorites, all made to satisfy."
};

export default function FoodDeliveryLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
