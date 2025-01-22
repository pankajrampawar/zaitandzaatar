export const metadata = {
    title: "Authentic Gyro sandwich in St. Paul",
    description: "Craving a gyro sandwich in St. Paul? Enjoy the authentic taste of Mediterranean flavors with our freshly prepared gyros, made with tender meat, warm pita, and delicious toppings.",
};

export default function MenuLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
