import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Itenary from "@/components/Itenary/Itenary";
import Prize from "@/components/Prizes/Prizes";
import PastSponsors from "@/components/Sponsors/PastSponsors";
import Theme from "@/components/Theme/Theme";
import GalleryHome from "@/components/Gallery/GalleryHome";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Prize />
      <PastSponsors />
      <Theme />
      <Itenary />
      <GalleryHome />
      <FAQ />
    </>
  );
}
