"use client";

import React from "react";
import Image from "next/image";
import Header from "../Header/Header";
import mentorsData from "../../data/mentors.json";
import judgesData from "../../data/judges.json";

interface Person {
  name: string;
  linkedin?: string;
  photo: string;
  role: string;
}

interface PeopleProps {
  title: string;
  data: Person[];
  id: string;
  className?: string;
}

const People: React.FC<PeopleProps> = ({ title, data, id, className }) => {
  return (
    <section className={`pt-5 sm:pt-10 relative ${className}`} id={id}>
      <h2 className="text-center my-5 sm:my-10">
        <Header text={title} />
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-8 px-5 md:px-8">
        {data.map(({ name, linkedin, photo, role }) => (
          <div
            key={name}
            className="flex flex-col items-center text-center justify-center p-2 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg neon-card fade-in pulse"
            style={{
              background: "transparent",
              border: "2px solid rgba(61, 214, 31, 0.8)",
              boxShadow: "0 0 15px rgba(0,0,0), 0 0 30px rgba(0,0,0,0)",
            }}
          >
            <a
              href={linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedin ? `Visit ${name}'s LinkedIn profile` : `LinkedIn unavailable`}
            >
              <div
                className="relative w-32 h-32 overflow-hidden rounded-full neon-border"
                style={{
                  border: "3px solid rgba(0,0,0)",
                  boxShadow: "0 0 10px rgba(0,0,0), 0 0 20px rgba(0,0,0)",
                  margin: "0.5rem",
                }}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </a>
            <div className="flex flex-col mt-4">
              <p className="font-bold text-xl sm:text-2xl mb-2 text-white">{name}</p>
              <p className="text-sm sm:text-base lg:text-lg text-[#f0edeb]">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Wrapper Component to Render All Sections
const PeopleSections: React.FC = () => {
  return (
    <>
      <People title="Mentors" data={mentorsData} id="mentors" />
      <People title="Judges" data={judgesData} id="judges" className="bg-black/50" />
    </>
  );
};

export default PeopleSections;
