import H4hNavbar from "../components/h4h/h4hNavbar";
import H4hHeroSection from "../components/h4h/h4hHeroSection";
import BuyAMeal from "../components/h4h/buyAMeal";
import Hope from "../components/h4h/hope";
import Contact from "./h4hContact";

export default function H4h() {
    return (
        <div className="">
            <H4hNavbar />
            <H4hHeroSection />
            <BuyAMeal />
            <Hope />
            <Contact />

            <div className="min-h-screen"></div>
        </div>
    );
}
