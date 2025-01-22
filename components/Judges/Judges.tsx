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
              className="flex flex-col items-center text-center justify-center p-6 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl neon-card fade-in pulse"
              style={{
                background: "rgba(7, 190, 210, 0.1)",
                border: "2px solid rgba(61, 214, 31, 0.8)",
                boxShadow: "0 0 15px rgba(61, 214, 31, 0.8), 0 0 30px rgba(61, 214, 31, 0.5)",
                animation: `${member.animation?.type || "none"} ${member.animation?.duration || "0s"}`,
                padding: "1rem", // Added padding here
                margin: "1rem", // Added margin here
              }}
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="500%"
                style={{
                  background: "rgba(0,0,0,0)",
                  padding: "0.75rem",
                  margin: "0.5rem", // Added margin here
                }}
                className="relative overflow-hidden flex items-center justify-center rounded-full transition-transform duration-300 transform hover:scale-110"
              >
                {/* Image (wrapped with <a> tag to link to LinkedIn profile) */}
                <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                  <div
                    className="relative w-[10rem] h-[10rem] overflow-hidden rounded-full neon-border"
                    style={{
                      border: "3px solid rgba(61, 214, 31, 0.8)",
                      boxShadow: "0 0 10px rgba(61, 214, 31, 0.8), 0 0 20px rgba(61, 214, 31, 0.6)",
                      margin: "0.5rem", // Added margin here
                    }}
                  >
                    <Image
                      src={member.photo || "/images/default.jpg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="rounded-full object-cover"
                    />
                  </div>
                </a>
              </Button>

              {/* Name and Details */}
              <div className="flex flex-col mt-4" style={{ margin: "0.5rem" }}> {/* Added margin here */}
                <p
                  className="font-bold text-xl sm:text-2xl lg:text-3xl mb-2 text-white transform transition duration-300"
                  style={{
                    textShadow:
                      "0 0 10px rgba(61, 214, 31, 0.8), 0 0 20px rgba(61, 214, 31, 0.6)",
                    margin: "0.5rem", // Added margin here
                  }}
                >
                  <span
                    className="neon-text"
                    style={{
                      textShadow:
                        "0 0 10px rgba(61, 214, 31, 0.8), 0 0 20px rgba(61, 214, 31, 0.6)",
                    }}
                  >
                    {member.name}
                  </span>
                </p>
                <p
                  className="text-sm sm:text-base lg:text-lg text-[#e9e4e0] transform transition-all duration-300 hover:scale-105 hover:text-[#3dd61f] tracking-normal hover:tracking-wider"
                  style={{ margin: "0.5rem" }} // Added margin here
                >
                  {getShortenedRole(member.role)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Styles */}
      <style jsx>{`
        @keyframes borderMove {
          0% {
            border-color: rgba(61, 214, 31, 0.5);
          }
          50% {
            border-color: rgba(61, 214, 31, 0.8);
          }
          100% {
            border-color: rgba(61, 214, 31, 0.5);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes gradientChange {
          0% {
            background: linear-gradient(45deg, #00ff00, #66ff33);
          }
          25% {
            background: linear-gradient(45deg, #66ff33, #33cc33);
          }
          50% {
            background: linear-gradient(45deg, #33cc33, #009900);
          }
          75% {
            background: linear-gradient(45deg, #009900, #66ff33);
          }
          100% {
            background: linear-gradient(45deg, #66ff33, #00ff00);
          }
        }

        .neon-card {
          animation: gradientChange 5s ease-in-out infinite;
        }

        .fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        .neon-text {
          color: #e9e4e0;
          transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
        }

        .neon-text:hover {
          color: #3dd61f;
          text-shadow: 0 0 15px rgba(61, 214, 31, 0.8), 0 0 30px rgba(61, 214, 31, 0.6);
        }

        .neon-card:hover .neon-text {
          color: #3dd61f;
        }

        .neon-card:hover .neon-text {
          animation: typing 1s steps(10) 1 normal both;
        }

        @keyframes typing {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 100%;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Speakersjudges;
