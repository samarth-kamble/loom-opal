import ButtonGradient from "./_components/ButtonGradient";
import Collaboration from "./_components/Collaboration";
import Hero from "./_components/Hero";
import LandingPageNavBar from "./_components/LandingPageNavBar";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <LandingPageNavBar />
        <Hero />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
}
