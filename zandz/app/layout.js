import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Best Mediterranean and select Indian Food in St. Paul Ave Minnesota I Zait & Za'atar Mediterranean Dhaba",
  description: "Craving Mediterranean and limited Indian Food in St Paul Ave, Mn? Enjoy exceptional service, with convenient pickup and delivery options near you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-background`}
      >
        <div className="fixed w-screen top-0 z-50">
          <Navbar />
        </div>
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
