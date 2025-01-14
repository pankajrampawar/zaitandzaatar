export const metadata = {
    title: "Mediterranean restaurant in st paul Menu",
    description: "Zait & Za'atar, a Mediterranean restaurant in St. Paul, MN, offering an irresistible menu of Mediterranean and limited Indian dishes. Try our dishes today!",
};

export default function MenuLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
