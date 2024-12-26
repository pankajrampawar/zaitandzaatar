export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function LayoutLayout({ children }) {
    return (
        <div className="flex justify-center">
            {children}
        </div>
    );
}
