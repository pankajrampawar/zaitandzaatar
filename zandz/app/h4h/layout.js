export default function SpecialRouteLayout({ children }) {
    return (
        <div className="relative">
            <div className="fixed z-50 bg-white w-screen h-screen left-0 top-0"></div>

            <div className="relative z-50 w-screen bg-secondary">
                {children}
            </div>
        </div>
    );
}