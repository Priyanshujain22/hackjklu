"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import themesData from '../../data/themes.json';
import Header from "../Header/Header";
import { motion } from "framer-motion";

const Theme = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % themesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % themesData.length);
  };

  const handlePreviousCard = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex === 0 ? themesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="pt-5 sm:pt-10 relative" id="themes">
      <h2 className="text-center my-5 sm:my-10">
        <Header text="Themes" />
      </h2>
      <div className="relative flex flex-col items-center justify-center mt-8 sm:mt-16 mb-8 sm:mb-12">
        <div className="relative w-full max-w-5xl h-[450px] sm:h-[550px] flex items-center justify-center">
          {/* Current Card */}
          <motion.div
            key={activeCardIndex}
            className="relative w-3/4 h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-opacity-50 border-neonGreen bg-[#333]">
              <Image
                src={themesData[activeCardIndex].image}
                alt={themesData[activeCardIndex].title}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[rgba(0,0,0,0.85)] text-white">
                <h2 className="text-xl text-center font-bold mb-3">
                  {themesData[activeCardIndex].title}
                </h2>
                <p className="text-base text-justify">
                  {themesData[activeCardIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex mt-4 space-x-2">
          {themesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCardIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCardIndex === index ? "bg-neonGreen" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePreviousCard}
          className="absolute left-1/4 sm:left-20 p-3 bg-neonGreen text-black rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNextCard}
          className="absolute right-1/4 sm:right-20 p-3 bg-neonGreen text-black rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Theme;
