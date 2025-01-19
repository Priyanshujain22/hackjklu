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
    <div className={`mt-8 md:mt-16 mb-[5rem] md:mb-[10rem] ${tech_mono.className}`}>
      <section className="relative pt--1">
        {/* Section Header */}
        <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-center my-[4rem] md:my-[6rem] text-[#e9e4e0]">
          <Header text="Speakers & Judges" />
        </h2>

        {/* Speaker/Judge Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 md:mx-[2rem]">
          {importedDataTeam.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center justify-center p-6 rounded-lg shadow-md bg-transparent transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="50%"
                style={{
                  background: "rgba(0,0,0,0)",
                  padding: "0.75rem",
                }}
                className="relative overflow-hidden flex items-center justify-center rounded-full transition-transform duration-300 transform hover:scale-110"
              >
                {/* Image */}
                <div className="relative w-[10rem] h-[10rem] sm:w-[10rem] sm:h-[10rem] lg:w-[10rem] lg:h-[10rem] overflow-hidden rounded-full transition-all duration-300 transform hover:scale-110">
                  <Image
                    src={member.photo} // Ensure `member.photo` is a valid image URL or local path
                    alt={member.name}
                    width={160}  // Set fixed width
                    height={160} // Set fixed height
                    objectFit="cover" // Ensures image covers the circle
                    objectPosition="center" // Focuses on the center of the image
                    className="rounded-full"
                  />
                </div>
              </Button>

              {/* Name and Details */}
              <div className="flex flex-col mt-4 transition-all duration-300 transform hover:translate-y-2">
                {/* Name with Hover and Click Animation */}
                <p className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 text-white relative group">
                  <span className="relative z-10 group-hover:text-[#10dc3c] transition-all duration-300">
                    {member.name || "Unknown Name"}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#10dc3c] to-[#fff] opacity-0 group-hover:opacity-30 transition-all duration-300"></span>
                </p>
                
                {/* Role with Hover and Click Animation */}
                <p className="mb-2 text-lg sm:text-xl lg:text-2xl text-gray-300 relative group">
                  <span className="relative z-10 group-hover:text-[#10dc3c] transition-all duration-300">
                    {getShortenedRole(member.role || "No role specified")}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#10dc3c] to-[#fff] opacity-0 group-hover:opacity-30 transition-all duration-300"></span>
                </p>

                {/* LinkedIn Button */}
                <a
                  href={member.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-200 hover:underline text-lg"
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
