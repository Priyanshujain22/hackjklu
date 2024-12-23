import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import Itenary from "@/components/Itenary/Itenary";
import Prize from "@/components/Prizes/Prizes";
import Sponsors from "@/components/Sponsors/Sponsors";
import Theme from "@/components/Theme/Theme";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <Itenary />
      <Sponsors />
      <Prize />
      <FAQ />
    </>
  );
}
