import ButtonGradient from "./_components/ButtonGradient";
import Collaboration from "./_components/Collaboration";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import LandingPageNavBar from "./_components/LandingPageNavBar";
import PricingCard from "./_components/PricingCard";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <LandingPageNavBar />
        <Hero />
        <Collaboration />
        <Services />
        <PricingCard />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}
