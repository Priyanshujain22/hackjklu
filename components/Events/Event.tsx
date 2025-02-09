import { FC } from 'react';
import Image from 'next/image';
import styles from './Event.module.css';

interface EventCardProps {
  title: string;
  description: string;
  bgImage?: string;
}

const EventCard: FC<EventCardProps> = ({ title, description, bgImage}) => {
  return (
    <div className={styles.card}>
      {bgImage && (
        <Image 
          src={bgImage}
          alt={title}
          width={400}
          height={600}
          className={styles.cardImage}
          priority
        />
      )}
      <div className={styles.overlay}></div>
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};
export default EventCard;