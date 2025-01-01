import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footeer";

export const metadata = {
  title: "Best Mediterranean and select Indian Food in St. Paul Ave Minnesota I Zait & Za'atar Mediterranean Dhaba",
  description: "Craving Mediterranean and limited Indian Food in St Paul Ave, Mn? Enjoy exceptional service, with convenient pickup and delivery options near you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-background relative`}
      >
        <div
          className="absolute inset-0 w-full z-0"
          style={{
            backgroundImage: "url('bg-pattern-2.png')",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center",
            opacity: 0.04,
          }}
        />

        <div className="fixed w-screen top-0 z-50">
          <Navbar />
        </div>

        <div className="flex justify-center w-full relative">
          <div className="flex justify-center w-full relative z-20">
            {children}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
