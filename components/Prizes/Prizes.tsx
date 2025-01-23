"use client";

import React from "react";
import Header from "../Header/Header";

import Image from "next/image";
import { motion } from "framer-motion";

import bestBeginner from "@/public/prizesPage/best_beginner.png";
import bestGirls from "@/public/prizesPage/best_girls.png";

interface PrizeCardProps {
  amount: string | number;
  category: string;
  default_bg: string;
  hover_bg: string;
}

const PrizeCard: React.FC<PrizeCardProps> = ({ amount, category, default_bg, hover_bg }) => {
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
        className="flex flex-col justify-center items-center py-[7.25rem] 
          rounded-[8px] border border-[#FFFAEF]"
        style={{
          "--default-gradient": default_bg,
          "--hover-gradient": hover_bg,
          background: "var(--default-gradient)",
        } as React.CSSProperties}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--hover-gradient)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "var(--default-gradient)")
        }
      >
        <p
          className="text-white px-5 font-[500] text-[5.6rem] leading-[6.4rem] 
            md:text-[8rem] md:leading-[8rem]"
        >
          {amount}
        </p>
        <p
          className="text-[rgba(255,255,255,0.66)] font-[500]  
            text-[1.5rem] md:text-[2rem]"
        >
          {category}
        </p>
      </div>
    </motion.div>
  );
};

const Prize = () => {
  return (
    <section className="pt-10 relative" id="prizes">
      <h2 className="text-center my-10">
        <Header text="Prizes" />
      </h2>
      <div className=" px-10 sm:px-20">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-1">
            <PrizeCard
              amount="₹50K"
              category="1st prize"
              default_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
              hover_bg="radial-gradient(116.96% 115.94% at 9.81% 9.24%, #383300 0%, rgba(56, 50, 0, 0.17) 100%)"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            <PrizeCard
              amount="₹25K"
              category="2nd prize"
              default_bg="radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)"
              hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
            />
            <PrizeCard
              amount="₹10K"
              category="3rd prize"
              default_bg="radial-gradient(148.8% 129.29% at 94.87% 3.94%, #363636 0%, rgba(26, 26, 26, 0.27) 100%)"
              hover_bg="radial-gradient(371.89% 134.33% at 3.21% 1.26%,rgba(255, 255, 255, 0.07) 0%,rgba(217, 217, 217, 0.00) 100%)"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            <div
              className="flex flex-col items-center gap-12 px-8 py-6 
                  md:flex-row md:px-6 rounded-[8px] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <Image
                src={bestGirls}
                alt=""
                className="w-[6.5rem] h-[6.5rem]"
                placeholder="blur"
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
                  md:flex-row md:px-6 rounded-[8px] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <Image
                src={bestBeginner}
                alt=""
                className="w-[6.5rem] h-[6.5rem]"
                placeholder="blur"
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
      </div>
    </section>
  );
};

export default Prize;
