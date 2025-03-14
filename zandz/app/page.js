import Image from "next/image";
import { anek_gujarati, lato } from "./fonts";
import { motion, useInView } from "framer-motion";
import HeroSection from "./components/home/heroSection";
import ImageSection from "./components/home/imageSection";
import InfoSection from "./components/home/infoSection";
import OrderOnline from "./components/home/orderOnline";
import SocialProof from "./components/home/socialProof";
import Catering from "./components/home/catering";
import GiftCard from "./components/home/giftCard";
import Membership from "./components/home/membership";
import Faq from "./components/home/faq";
import Location from "./components/home/location";
import ContactForm from "./components/home/contactForm";
import FeaturedIn from "./components/home/featuredIn";
import OnlineSite from "./components/home/onlineSite";

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full flex justify-center">
        <HeroSection />
      </section>

      <section className="w-full flex justify-center">
        <FeaturedIn />
      </section>

      <section className="w-full flex justify-center">
        <ImageSection />
      </section>

      <section className="w-full flex justify-center">
        <InfoSection />
      </section>

      <section className="w-full sm:flex sm:justify-center">
        <OrderOnline />
      </section>

      <section className="w-full flex justify-center">
        <SocialProof />
      </section>

      <section href="#orderOnline" className="w-full flex justify-center">
        <OnlineSite />
      </section>

      <section className="w-full flex flex-col items-center">
        <section className="w-full max-w-[1440px]">
          <Catering />
        </section>

        <section className="w-full max-w-[1440px]">
          <GiftCard />
        </section>

        <section className="w-full max-w-[1440px]">
          <Membership />
        </section>
      </section>

      <section className="w-full flex justify-center">
        <Faq />
      </section>

      <div className="flex items-center justify-center relative w-full mt-20 xl:mt-40 xl:mb-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[#130902] z-0"
          style={{ backgroundImage: "url('bgPattern.png')", backgroundSize: "auto" }}
        ></div>
        <ContactForm />
      </div>

      <section className="w-full flex justify-center">
        <Location />
      </section>
    </div>
  );
}
