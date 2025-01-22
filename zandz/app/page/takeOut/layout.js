export const metadata = {
    title: "Takeout in St. Paul, MN",
    description: "Looking for takeout in St. Paul, MN? Enjoy freshly prepared meals ready for pickup, from Mediterranean dishes to local favorites, all made to satisfy your cravings."
};

export default function TakeOutLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
