"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import themesData from '../../data/themes.json';
import Header from "../Header/Header";

interface CardData {
  image: string;
  title: string;
  description?: string;
}

type IntersectionObserverOptions = IntersectionObserverInit;

const useIntersectionObserver = (options: IntersectionObserverOptions = {}) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = elementRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [elementRef, isIntersecting] as const;
};

const Card: React.FC<CardData & { delay?: number; isActive: boolean; onClick: () => void }> = React.memo(
  ({ image, title, description, delay = 0, isActive, onClick }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isTouched, setIsTouched] = useState(false);
    const touchTimeout = useRef<NodeJS.Timeout>();
    const [ref, isVisible] = useIntersectionObserver({
      threshold: 0.1,
      rootMargin: "150px",
    });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
      if (isTouched) return; // Prevent mouse move effect when touched
      const card = e.currentTarget as HTMLElement;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setCoords({ x: rotateX, y: rotateY });
    }, [isTouched]);

    const handleMouseEnter = () => {
      setIsTouched(true); // Set touched state to true on hover
      setCoords({ x: 0, y: 0 }); // Reset coordinates on hover
    };

    const handleMouseLeave = () => {
      setIsTouched(false); // Reset touched state on mouse leave
      setCoords({ x: 0, y: 0 });
    };

    const handleTouchStart = () => {
      setIsTouched(!isTouched);
      if (isTouched) {
        setCoords({ x: 0, y: 0 });
      } else {
        setCoords({ x: 5, y: 5 });
      }
    };

    const handleTouchEnd = () => {
      if (!isTouched) {
        touchTimeout.current = setTimeout(() => {
          setCoords({ x: 0, y: 0 });
        }, 300);
      }
    };

    useEffect(() => {
      return () => {
        if (touchTimeout.current) {
          clearTimeout(touchTimeout.current);
        }
      };
    }, []);

    const isActiveState = isActive;

    const cardStyle = {
      transform: isActiveState
        ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.02,1.02,1.02)`
        : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      height: '240px', // Original height
      width: '100%', // Original width
      padding: '0', // No padding to fill the image
    };

    return (
      <div
        ref={ref}
        className={`relative w-full px-1 sm:px-4 md:p-3 mx-1 sm:mx-2 cursor-pointer group transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: `${delay}ms`, ...cardStyle }} // Apply card styles
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter} // Hover effect for laptops
        onMouseLeave={handleMouseLeave} // Hover effect for laptops
        onTouchStart={handleTouchStart} // Tap feature for mobile/iPad
        onTouchEnd={handleTouchEnd} // Tap feature for mobile/iPad
        onClick={onClick} // Handle click to toggle description
      >
        <div
          className={`w-full h-full rounded-lg sm:rounded-xl border border-opacity-50 border-neonGreen bg-[#333] overflow-hidden transition-all duration-700 ease-out`}
          style={cardStyle}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" /> {/* Ensure image fills the card */}
          <div className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transition-all duration-700 ease-out ${
            isActiveState || isTouched // Show description if active or touched
              ? "h-auto bg-[rgba(0,0,0,0.85)] sm:bg-[rgba(0,0,0,0.6)]" 
              : "h-0 bg-transparent overflow-hidden"
          }`}>
            <div className="relative z-1 flex flex-col h-full">
              <p 
                className={`text-xs sm:text-sm md:text-md mb-2 transition-all duration-300 ${
                  isActiveState || isTouched // Show description if active or touched
                    ? "opacity-100 translate-y-0 order-1" 
                    : "opacity-0 translate-y-4 order-1"
                }`}
              >
                {description}
              </p>
              <h2 className={`text-sm sm:text-lg md:text-xl font-bold text-shadow-lg order-2`}>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

const Theme = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    // If the clicked card is already active, set it to null to hide the description
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="pt-5 sm:pt-10 relative" id="themes">
      <h2 className="text-center my-5 sm:my-10">
        <Header text="Themes" />
      </h2>
      <div className="mt-8 sm:mt-16 mb-8 sm:mb-12">
        <div className="grid grid-cols-1 px-3 sm:px-4 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
          {themesData.map((card, index) => (
            <Card 
              key={index} 
              {...card} 
              delay={index * 100} 
              isActive={activeCardIndex === index} // Pass active state to card
              onClick={() => handleCardClick(index)} // Pass click handler
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Theme;
