import Header from "@/components/Header/Header";
import TeamCard from "@/components/Team/Team";
import styles from "@/components/Team/Team.module.css";
import teams from "@/data/teams.json";
import ocdata from "@/data/dataOC.json";
import Carousel from "@/components/Carousel/Carousel";
import ResponsiveTeam from "@/components/Team/ResponsiveTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Team | HackJKLU v4.0",
  description: "Meet the organizing and core team behind HackJKLU v4.0. Get to know the passionate individuals making the event happen.",
  keywords: ["team", "hackathon", "HackJKLU", "core team", "organizing team", "technology event", "Jaipur", "JK Lakshmipat University"],
  openGraph: {
    title: "Meet the Team | HackJKLU v4.0",
    description: "Meet the organizing and core team behind HackJKLU v4.0. Get to know the passionate individuals making the event happen.",
    url: "https://www.hackjklu.com/team",
    images: [{ url: "/team/TeamMain.webp", width: 1200, height: 630, alt: "HackJKLU v4.0 Team" }],
    type: "website",
  },
  twitter: {
    title: "Meet the Team | HackJKLU v4.0",
    description: "Meet the organizing and core team behind HackJKLU v4.0. Get to know the passionate individuals making the event happen.",
    images: ["/team/TeamMain.webp"],
    card: "summary_large_image",
  },
};

export default function TeamPage() {
  return (
    <section className="px-2 sm:px-10 relative pt-24">
      <h2 className="text-center mb-10">
        <Header text="Organizing Team" />
      </h2>
      <div className={`${styles.cardContainer}`}>
        {ocdata.map((item, index) => (
          <TeamCard
            key={`${String(index)}-team`}
            name={item.name}
            title={item.title}
            imageSrc={`/team/${item.imageSrc}.webp`}
            socials={item.socials}
          />
        ))}
      </div>

      <h2 className="text-center my-10">
        <Header text="Core Team" />
      </h2>

      <ResponsiveTeam teamData={teams} />

      <h2 className="text-center my-10">
        <Header text="The Team" />
      </h2>

      <Carousel images={[{ src: "/team/TeamMain.webp", blurDataURL: "/team/TeamBlur.webp" }]} interval={3000} autoPlay={true} />
    </section>
  );
}
