// "use client";

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import themesData from '../../data/themes.json';
// import Header from "../Header/Header";

// interface CardData {
//   image: string;
//   title: string;
//   description?: string;
// }

// const Card: React.FC<CardData> = React.memo(({ image, title, description }) => {
//   const [coords, setCoords] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = useCallback((e: React.MouseEvent) => {
//     const card = e.currentTarget as HTMLElement;
//     const box = card.getBoundingClientRect();
//     const x = e.clientX - box.left;
//     const y = e.clientY - box.top;
//     const centerX = box.width / 2;
//     const centerY = box.height / 2;
//     const rotateX = ((y - centerY) / centerY) * -20;
//     const rotateY = ((x - centerX) / centerX) * 20;

//     setCoords({ x: rotateX, y: rotateY });
//   }, []);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => {
//     setIsHovered(false);
//     setCoords({ x: 0, y: 0 });
//   };

//   const cardStyle = {
//     transform: isHovered
//       ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.05,1.05,1.05)`
//       : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
//   };

//   const backgroundStyle = {
//     transform: isHovered
//       ? `translateX(${coords.y * -2}px) translateY(${coords.x * 2}px)`
//       : "translateX(0) translateY(0)",
//     backgroundImage: `url(${image})`,
//   };

//   return (
//     <div
//       className="relative w-full h-[250px] md:h-[300px] mx-2 cursor-pointer group transition-all duration-500 opacity-100 translate-y-0"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         className="w-full h-full rounded-xl border border-opacity-50 border-neonGreen bg-[#333] overflow-hidden transition-all duration-700 ease-out"
//         style={cardStyle}
//       >
//         <div
//           className="absolute inset-[-38px] bg-cover bg-center transition-all duration-700 ease-out opacity-50 group-hover:opacity-80"
//           style={backgroundStyle}
//         />
//         <div
//           className={`absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white transition-transform duration-700 ease-out ${
//             isHovered ? "translate-y-0" : "translate-y-[40%]"
//           }`}
//         >
//           <div className="relative z-1 max-h-full overflow-auto">
//             <h2 className={`text-lg sm:text-xl font-bold text-shadow-lg ${isHovered? "": "mb-10"} `}>
//               {title}
//             </h2>
//             {isHovered && (
//               <p className="text-sm opacity-100 transition-opacity duration-500 max-h-full overflow-auto">
//                 {description}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// Card.displayName = "Card";

// const Theme = () => {
//   return (
//     <section className="pt-10 relative" id="themes">
//       <h2 className="text-center my-10">
//         <Header text="Themes" />
//       </h2>
//       <div className="px-10 md:px-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//           {themesData.map((card, index) => (
//             <Card key={index} {...card} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Theme;






"use client";

import React, { useState } from "react";
import Image from "next/image";
import themesData from '../../data/themes.json';
import Header from "../Header/Header";
import { motion } from "framer-motion";


const Theme = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0); // Default to the first card

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
      <div className="relative flex items-center justify-center mt-8 sm:mt-16 mb-8 sm:mb-12">
        <div className="relative w-full max-w-4xl h-80 sm:h-96 flex items-center justify-center">
          {/* Previous Card */}
          <motion.div
            key={`prev-${activeCardIndex}`}
            className="absolute left-0 w-1/3 h-full opacity-50 blur-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={themesData[(activeCardIndex - 1 + themesData.length) % themesData.length].image}
                alt={themesData[(activeCardIndex - 1 + themesData.length) % themesData.length].title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Current Card */}
          <motion.div
            key={activeCardIndex}
            className="relative w-2/3 h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-opacity-50 border-neonGreen bg-[#333]">
              <Image
                src={themesData[activeCardIndex].image}
                alt={themesData[activeCardIndex].title}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-[rgba(0,0,0,0.85)] text-white">
                <h2 className="text-lg font-bold mb-2">
                  {themesData[activeCardIndex].title}
                </h2>
                <p className="text-sm">
                  {themesData[activeCardIndex].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Next Card */}
          <motion.div
            key={`next-${activeCardIndex}`}
            className="absolute right-0 w-1/3 h-full opacity-50 blur-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.5, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={themesData[(activeCardIndex + 1) % themesData.length].image}
                alt={themesData[(activeCardIndex + 1) % themesData.length].title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePreviousCard}
          className="absolute left-4 sm:left-10 p-2 bg-neonGreen text-black rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
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
          className="absolute right-4 sm:right-10 p-2 bg-neonGreen text-black rounded-full shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
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





