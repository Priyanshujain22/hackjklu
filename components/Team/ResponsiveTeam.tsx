"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";
import styles from "@/components/Team/Team.module.css";
import TeamCard from "./Team";

const ICON_SIZE = 28;

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

interface Props {
    teamData: TeamCardProps[];
}

export default function ResponsiveTeam({ teamData }: Props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 640);
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <>
            {!isMobile ?
                <>
                    <div className={`${styles.cardContainer}`}>
                        {teamData.slice(0, teamData.length - 2).map((item, index) => {
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

                    <div className={styles.centeredContainer}>
                        {teamData.slice(-2).map((item, index) => {
                            return (
                                <TeamCard
                                    key={`${String(index + teamData.length - 2)}-team`}
                                    name={item.name}
                                    title={item.title}
                                    imageSrc={`/team/${item.imageSrc}.webp`}
                                    socials={item.socials}
                                />
                            );
                        })}
                    </div>
                </>
                :
                <> <div className="grid grid-cols-2 md:grid-cols-2 ">
                    {teamData.map((member) => (
                        <div
                            key={member.name}
                            className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-start mb-8"
                        >
                            <div className="md:mr-4 relative h-[9rem] w-[9rem] md:h-40 md:w-40 overflow-hidden rounded-md shadow-lg">
                                <div className="w-full h-full overflow-hidden rounded-md">
                                    <Image
                                        src={`/team/${member.imageSrc}.webp`}
                                        alt={member.name}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        className="rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-base mt-[1rem] md:mt-0 md:text-[1.7rem] md:mb-[1rem]">
                                    {member.name}
                                </p>
                                <p className="mb-2 text-base text-[1rem] px-1 md:px-0">
                                    <span
                                        className="text-white"
                                    >
                                        {member.title}
                                    </span>
                                </p>
                                <div className={styles.socials}>
                                    {member.socials.gb && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={member.socials.gb}
                                        >
                                            <Github size={ICON_SIZE} width={ICON_SIZE} />
                                        </a>
                                    )}

                                    {member.socials.linkedin && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={member.socials.linkedin}
                                        >
                                            <Linkedin size={ICON_SIZE} />
                                        </a>
                                    )}
                                    {member.socials.email && (
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={`mailto:${member.socials.email}`}
                                        >
                                            <Mail size={ICON_SIZE} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div></>
            }

        </>
    );
}
