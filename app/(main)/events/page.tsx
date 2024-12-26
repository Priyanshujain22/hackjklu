import Header from "@/components/Header/Header";
import EventCard from "@/components/Events/Event";
import styles from "@/components/Events/Event.module.css";
import eventsData from "@/data/events.json";

export default function AboutPage() {
  return (
    <>
      <section className="px-10 md:px-20" >
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
