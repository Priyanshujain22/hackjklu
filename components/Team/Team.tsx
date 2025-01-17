import React from 'react';
import styles from "./Team.module.css";
import Image from 'next/image';
import { Mail, Github, Linkedin } from 'lucide-react';

const ICON_SIZE = 28;

interface SocialLinks {
  gb?: string;
  email?: string;
  linkedin?: string;
 
  
}

interface TeamCardProps {
  name: string;
  title?: string;
  socials: SocialLinks;
  imageSrc: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, socials, imageSrc }) => {
  return (
    <div className={styles.card}>
      <div className="z-10 w-full text-center h-60 mb-18 mt-0 overflow-hidden rounded-lg">
        <Image
          className={styles.image}
          height="100"
          width="100"
          layout="responsive"
          src={imageSrc}
          alt={name}
          quality={100}
        />
      </div>
      <div className="z-10 text-center my-5">
        <h3 className="text-xl">{name}</h3>
        <h4 className={styles.title}>{title}</h4>
      </div>
      <div className={styles.socials}>
        {socials.gb || socials.email || socials.linkedin ? (
          <>
            {socials.gb && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={socials.gb}
              >
                <Github size={ICON_SIZE} width={ICON_SIZE} />
              </a>
            )}
          
          
            {socials.linkedin && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={socials.linkedin}
              >
                <Linkedin size={ICON_SIZE} />
              </a>
            )}
            {socials.email && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${socials.email}`}
              >
                <Mail size={ICON_SIZE} />
              </a>
            )}
          </>
        ) : (
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>
            Socially Invisible
          </span>
        )}
      </div>
    </div>
  );
};

export default TeamCard