"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import themesData from '../../data/themes.json';
import Header from "../Header/Header";
import { motion } from "framer-motion";

const Theme = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % themesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextCard = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % themesData.length);
    setIsDescriptionVisible(false);
  };

  const handlePreviousCard = () => {
    setActiveCardIndex((prevIndex) =>
      prevIndex === 0 ? themesData.length - 1 : prevIndex - 1
    );
    setIsDescriptionVisible(false);
  };

  const toggleDescription = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <section className="pt-5 sm:pt-10 relative" id="themes">
      <h2 className="text-center my-5 sm:my-10">
        <Header text="Themes" />
      </h2>
      <div className="relative flex flex-col items-center justify-center mt-8 sm:mt-16 mb-8 sm:mb-12">
        <div className="relative w-full max-w-3xl h-[350px] sm:h-[450px] flex items-center justify-center">
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
              <div 
                className={`absolute bottom-0 left-0 right-0 transition-all duration-300
                  sm:block sm:bg-[rgba(0,0,0,0.85)]
                  ${isDescriptionVisible ? 'bg-[rgba(0,0,0,0.85)]' : 'bg-[rgba(0,0,0,0.6)]'}
                `}
              >
                <div 
                  className="p-6 cursor-pointer sm:cursor-default"
                  onClick={toggleDescription}
                >
                  <h2 className="text-xl text-center font-bold mb-3 text-white">
                    {themesData[activeCardIndex].title}
                  </h2>
                  <p className={`text-base text-justify text-white
                    transition-all duration-300 sm:block
                    ${isDescriptionVisible ? 'block' : 'hidden'}
                  `}>
                    {themesData[activeCardIndex].description}
                  </p>
                  <div className="sm:hidden text-center text-white text-sm leading-3 mt-1">
                    {!isDescriptionVisible && "Tap to read more"}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex mt-4 space-x-2">
          {themesData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCardIndex(index);
                setIsDescriptionVisible(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${activeCardIndex === index ? "bg-neonGreen" : "bg-gray-400"}`}
            />
          ))}
        </div>

        <button
          onClick={handlePreviousCard}
          className="absolute top-1/2 left-4 sm:left-10 transform -translate-y-1/2 p-2 sm:p-3 bg-neonGreen text-black rounded-full shadow-md z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNextCard}
          className="absolute top-1/2 right-4 sm:right-10 transform -translate-y-1/2 p-2 sm:p-3 bg-neonGreen text-black rounded-full shadow-md z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 sm:w-8 sm:h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Theme;