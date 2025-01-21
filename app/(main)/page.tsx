import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Itenary from "@/components/Itenary/Itenary";
import Prize from "@/components/Prizes/Prizes";
import PastSponsors from "@/components/Sponsors/PastSponsors";
import Theme from "@/components/Theme/Theme";
import GalleryHome from "@/components/Gallery/GalleryHome";
import Speakersjudges from "@/components/Judges/Judges"
import YetToBeDisclosed from "@/components/YetToDisclose/Disclose";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Prize />
      <Speakersjudges/>
      <PastSponsors />
      <Theme />
      <Itenary />
      <GalleryHome />
      <FAQ />
      <YetToBeDisclosed/>
    </>
  );
}
