import Header from "@/components/Header/Header";
import EventCard from "@/components/Events/Event";
import styles from "@/components/Events/Event.module.css";
import eventsData from "@/data/events.json";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | HackJKLU v4.0",
  description: "Explore the exciting events of HackJKLU v4.0. Join us for a series of engaging and challenging competitions.",
  keywords: ["events", "hackathon", "HackJKLU", "coding events", "competitions", "technology events", "JK Lakshmipat University", "Jaipur"],
};

export default function AboutPage() {
  return (
    <>
      <section className="px-10 relative pt-24" >
        <h2 className="text-center mb-10">
          <Header text="Events" />
        </h2>

        <div className={styles.cardContainer}>
          {eventsData.map((item, index) => {
            return (
              <EventCard
                title={item.title}
                description={item.description}
                bgImage={item.bgImage}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
