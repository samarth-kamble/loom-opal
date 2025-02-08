import ButtonGradient from "./_components/ButtonGradient";
import Collaboration from "./_components/Collaboration";
import Hero from "./_components/Hero";
import LandingPageNavBar from "./_components/LandingPageNavBar";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <LandingPageNavBar />
        <Hero />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  );
}
