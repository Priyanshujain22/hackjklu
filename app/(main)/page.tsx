import About from "@/Components/About/About";
import FAQ from "@/Components/FAQ/FAQ";
import Hero from "@/Components/Hero/Hero";
import Itenary from "@/Components/Itenary/Itenary";
import Prize from "@/Components/Prizes/Prizes";
import Sponsors from "@/Components/Sponsors/Sponsors";
import Theme from "@/Components/Theme/Theme";

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
