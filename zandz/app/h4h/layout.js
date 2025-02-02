export default function SpecialRouteLayout({ children }) {
    return (
        <div className="relative">
            <div className="fixed z-10 bg-white w-screen h-screen left-0 top-0"></div>

            <div className="relative z-20 w-screen">
                {children}
            </div>
        </div>
    );
}