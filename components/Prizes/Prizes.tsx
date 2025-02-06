"use client";

import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import Image from "next/image";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FaTrophy } from "react-icons/fa";

import bestBeginner from "@/public/prizesPage/best_beginner.png";
import bestGirls from "@/public/prizesPage/best_girls.png";

interface PrizeCardProps {
  amount: string | number;
  category: string;
  default_bg: string;
  hover_bg: string;
  isCenter?: boolean;
}

const PrizeCard: React.FC<PrizeCardProps> = ({
  amount,
  category,
  default_bg,
  hover_bg,
  isCenter,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
    >
      <div
        className={`flex flex-col justify-center items-center py-[4rem] md:py-[3.25rem]
          rounded-[8px] border-2 border-white ${isCenter ? "md:col-span-2" : ""}`} // White border added
        style={{
          "--default-gradient": default_bg,
          "--hover-gradient": hover_bg,
          background: "var(--default-gradient)",
          transition: "all 0.3s ease", // Smooth transition for all properties
        } as React.CSSProperties}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--hover-gradient)";
          e.currentTarget.style.boxShadow = "0 0 20px 10px rgba(31, 84, 251, 0.5)"; // Glow effect on hover
          e.currentTarget.style.transform = "scale(1.05)"; // Pop-up effect
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--default-gradient)";
          e.currentTarget.style.boxShadow = "none"; // Remove glow effect when mouse leaves
          e.currentTarget.style.transform = "scale(1)"; // Reset scale
        }}
      >
        <div className="text-white flex flex-col justify-center items-center space-y-4">
          <FaTrophy className="text-6xl" /> {/* Adjusted icon size */}
          <p
            className="px-5 font-[500] text-[4rem] leading-[4.5rem]
              md:text-[5.5rem] md:leading-[6rem]" // Adjusted text size for consistency
          >
            {amount}
          </p>
          <p
            className="text-[rgba(255,255,255,0.85)] font-[500]
              text-[1.25rem] md:text-[1.5rem]" // Adjusted text size for consistency
          >
            {category}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Prize = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const confettiTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !confettiTriggered.current) {
          confettiTriggered.current = true;
          confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 },
            colors: ["#0000FF", "#008000"],
            shapes: ["circle", "square"],
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-10 relative" id="prizes">
      <h2 className="text-center my-10">
        <Header text="Prizes" />
      </h2>
      <div className="px-10 sm:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <PrizeCard
            amount="₹25K"
            category="2nd prize"
            default_bg="transparent" // Fully transparent background
            hover_bg="transparent" // Fully transparent background on hover
          />
          <PrizeCard
            amount="₹50K"
            category="1st prize"
            default_bg="transparent"
            hover_bg="transparent"
            isCenter={true}
          />
          <PrizeCard
            amount="₹10K"
            category="3rd prize"
            default_bg="transparent"
            hover_bg="transparent"
          />
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 mt-8">
          <div
            className="flex flex-col items-center gap-12 px-8 py-6
                  md:flex-row md:px-6 rounded-[8px] border-2 border-white"
            style={{
              background:
                "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
            }}
          >
            <Image
              src={bestGirls}
              alt="Best Girls"
              className="w-[6.5rem] h-[6.5rem]"
            />
            <div className="w-full flex flex-col items-center gap-2">
              <p className="text-[#fff] text-[2rem] font-normal text-center">
                Social Media Winners
              </p>
              <p
                className="text-[#C3C3C3] text-[1.25rem] font-normal
                      text-center"
              >
                ₹ 15,000.00
              </p>
              <p
                className="text-[#C3C3C3] text-[1.25rem] font-normal
                      text-center"
              >
                Social Media Winners consists of Linkedin, Instagram, Youtube Vlog
              </p>
            </div>
          </div>
          <div
            className="flex flex-col items-center gap-12 px-8 py-6
                  md:flex-row md:px-6 rounded-[8px] border-2 border-white"
            style={{
              background:
                "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
            }}
          >
            <Image
              src={bestBeginner}
              alt="Best Beginner"
              className="w-[6.5rem] h-[6.5rem]"
            />
            <div className="w-full flex flex-col items-center gap-2">
              <p className="text-[#fff] text-[2rem] font-normal text-center">
                Make-a-thon Winners
              </p>
              <p
                className="text-[#C3C3C3] text-[1.25rem] font-normal
                      text-center"
              >
                ₹ 10,000.00
              </p>
              <p
                className="text-[#C3C3C3] text-[1.25rem] font-normal
                      text-center"
              >
                Make-a-thon is a competition for school students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prize;
