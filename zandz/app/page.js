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

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full flex justify-center">
        <HeroSection />
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

      <section className="w-full flex justify-center">
        <Location />
      </section>
    </div>
  );
}
