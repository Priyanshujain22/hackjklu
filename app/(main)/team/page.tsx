import Header from "@/components/Header/Header";
import TeamCard from "@/components/Team/Team";
import styles from "@/components/Team/Team.module.css"
import teams from "@/data/teams.json"
import ocdata from "@/data/dataOC.json"

interface SocialLinks {
  gb?: string;
  email?: string;
  linkedin?: string;
  instagram?: string;
}

interface TeamCardProps {
  name: string;
  title?: string;
  socials: SocialLinks;
  imageSrc: string;
}

const teamData: TeamCardProps[] = teams;


export default function TeamPage() {
  return (
    <>
      <section className="px-10 md:px-20 relative pt-24" >
      <h2 className="text-center mb-10">
          <Header text="Organizing Team" />
        </h2>
        <div className={`${styles.cardContainer}`}>
          {ocdata.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                imageSrc={`/team/${item.imageSrc}.webp`}
                socials={item.socials}
              />
            );
          })}
        </div>
        <h2 className="text-center my-10">
          <Header text="Core Team" />
        </h2>
        <div className={`${styles.cardContainer}`}>
          {teamData.map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/team/${item.imageSrc}.webp`}
                socials={item.socials}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}