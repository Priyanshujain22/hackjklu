import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Itenary from "@/components/Itenary/Itenary";
import RetroPrizesSection from "@/components/Prizes/Prizes";
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
      <About />
      <Theme />
      <RetroPrizesSection />
      <Sponsors />
      <WhoShouldApply />
      <Itenary />
      <GalleryHome />
      <FAQ />
    </>
  );
}