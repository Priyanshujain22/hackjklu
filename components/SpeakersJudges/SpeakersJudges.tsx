import React from "react";
import Image from "next/image";
import speakersJudgesData from "../../data/speakers-judges.json";

const SpeakersJudges = () => {
  return (
    <section id="speakers-judges" className="pt-10 relative">
      <div className="md:mx-[5rem] lg:mx-[10rem]">
        <h1 className="text-center text-3xl font-bold mb-4">Speakers & Judges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {speakersJudgesData.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
              style={{ animation: `${person.animation.type} ${person.animation.duration}` }}
            >
              <Image
                src={person.photo}
                alt={person.name}
                width={150}
                height={150}
                className="rounded-full"
              />
              <h2 className="mt-4 text-xl font-semibold" style={{ color: person.color }}>
                {person.name}
              </h2>
              <p className="mt-2 text-gray-600">{person.role}</p>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersJudges;