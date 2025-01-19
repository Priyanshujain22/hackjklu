"use client";
import { Button } from "../ui/MovingBorders";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import data from "../../data/speakers-judges.json";
import { Share_Tech_Mono } from "next/font/google";
import Header from "../Header/Header";

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

const Speakersjudges: React.FC = () => {
  const importedDataTeam = data;
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getShortenedRole = (role: string): string => {
    const words = role.split(" ");
    if (windowWidth <= 768 && words.length > 4) {
      return `${words.slice(0, 4).join(" ")}...`;
    }
    return role;
  };

  return (
    <div
      className={`mt-8 md:mt-16 mb-[5rem] md:mb-[10rem] ${tech_mono.className}`}
    >
      <section className="relative pt--1">
        {/* Section Header */}
        <h2 className="text-[1.8rem] md:text-[4rem] font-bold text-center my-[4rem] md:my-[6rem] text-[#e9e4e0]">
          <Header text="Speakers & Judges" />
        </h2>

        {/* Speaker/Judge Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-8 md:mx-[5rem]">
          {importedDataTeam.map((member) => (
            <div
            key={member.name}
            className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-start mb-8"
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="50%" // Ensure the button maintains a circular shape
              style={{
                background: "rgba(0,0,0,0)",
                padding: "0.5rem", // Add some padding around the image
              }}
              className="relative overflow-hidden flex items-center justify-center rounded-full border-5"
            >
              {/* Image */}
              <div className="relative h-[9rem] w-[9rem] md:h-40 md:w-40 overflow-hidden rounded-full">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </Button>
          
            {/* Name and Details */}
            <div className="flex flex-col mt-4 md:mt-0 md:ml-4">
              <p className="font-bold text-base md:text-[1.7rem] md:mb-[1rem]">
                {member.name || "Unknown Name"}
              </p>
              <p className="mb-2 text-base text-[1.2rem] md:my-[1rem] px-1 md:px-0 md:max-w-[15rem] overflow-hidden">
                {getShortenedRole(member.role || "No role specified")}
              </p>
              <a
                href={member.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-200 hover:underline text-[1.1rem]"
              >
                LinkedIn
              </a>
            </div>
          </div>          
          ))}
        </div>
      </section>
    </div>
  );
};

export default Speakersjudges;
