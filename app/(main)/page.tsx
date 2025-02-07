import About from "@/components/About/About";
import AboutStrip from "@/components/AboutStrip/AboutStrip";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
// import Itenary from "@/components/Itenary/Itenary";
import RetroPrizesSection from "@/components/Prizes/Prizes";
// import LogoAnimation from "@/components/PastSponsor/PastSponsor";
import Sponsors from "@/components/Sponsors/Sponsors";
import Theme from "@/components/Theme/Theme";
import GalleryHome from "@/components/Gallery/GalleryHome";
import WhoShouldApply from "@/components/WhoShouldApply/WhoShouldApply";
import YetToBeDisclosed from "@/components/YetToDisclose/Disclose";
import SpeakersJudges from "@/components/SpeakersJudges/SpeakersJudges";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <About />
      <Theme />
      <RetroPrizesSection />
      {/* <LogoAnimation /> */}
      <Sponsors />
      <WhoShouldApply />
      {/* <Itenary /> */}
      {/* <SpeakersJudges/> */}
      <YetToBeDisclosed/>
      <GalleryHome />
      <FAQ />
    </>
  );
}