export const metadata = {
    title: "Zait & Za'atar Mediterranean Dhaba Catering | Best Mediterranean and limited Indian Food in St. Paul Mn",
    description: "Explore the Zait & Za'atar menu! Discover the best Mediterranean and limited Indian dishes in Saint Paul, MN. From shawarmas to samosas, every bite is freshly prepared and full of flavor.",
};

export default function CateringLayout({ children }) {
    return (
        <div className="flex justify-center w-full">
            {children}
        </div>
    );
}
