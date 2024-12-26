import { FC } from 'react';
import styles from './Event.module.css';

interface EventCardProps {
  title: string;
  description: string;
  bgImage?: string;
}

const EventCard: FC<EventCardProps> = ({ title, description, bgImage}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={styles.card}
    >
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;