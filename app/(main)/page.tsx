import About from "@/components/About/About";
import AboutStrip from "@/components/AboutStrip/AboutStrip";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
// import Itenary from "@/components/Itenary/Itenary";
import RetroPrizesSection from "@/components/Prizes/Prizes";
// import PastSponsors from "@/components/Sponsors/PastSponsors";
import LogoAnimation from "@/components/PastSponsor/PastSponsor";
import Theme from "@/components/Theme/Theme";
import GalleryHome from "@/components/Gallery/GalleryHome";
import Speakersjudges from "@/components/Judges/Judges";
import WhoShouldApply from "@/components/WhoShouldApply/WhoShouldApply";
// import YetToBeDisclosed from "@/components/YetToDisclose/Disclose";
// import Carousel from "@/components/Commitee/committee";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <About />
      <Theme />
      <RetroPrizesSection />
      <Speakersjudges />
      <LogoAnimation />
      {/* <PastSponsors /> */}
      <WhoShouldApply />
      {/* <Itenary /> */}
      <GalleryHome />
      {/* <Carousel /> */}
      {/* <YetToBeDisclosed /> */}
      <FAQ />
    </>
  );
}