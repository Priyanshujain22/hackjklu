"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import themesData from '../../data/themes.json';
import Header from "../Header/Header";
// import styles from "./Themes.module.css";

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


const Card: React.FC<CardData & { delay?: number }> = React.memo(
  ({ image, title, description, delay = 0 }) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isTouched, setIsTouched] = useState(false);
    const touchTimeout = useRef<NodeJS.Timeout>();
    const [isMobile, setIsMobile] = useState(false);
    const [ref, isVisible] = useIntersectionObserver({
      threshold: 0.1,
      rootMargin: "150px",
    });

    // Check if device is mobile on mount and window resize
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.matchMedia('(max-width: 768px)').matches);
      };
      
      checkMobile();
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
      if (isMobile) return;
      const card = e.currentTarget as HTMLElement;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      setCoords({ x: rotateX, y: rotateY });
    }, [isMobile]);

    const handleTouchStart = () => {
      if (!isMobile) return;
      setIsTouched(!isTouched);
      if (isTouched) {
        setCoords({ x: 0, y: 0 });
      } else {
        setCoords({ x: 5, y: 5 });
      }
    };

    const handleTouchEnd = () => {
      if (!isMobile) return;
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

    const handleMouseEnter = () => !isMobile && setIsHovered(true);
    const handleMouseLeave = () => {
      if (!isMobile) {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }
    };

    const isActive = isMobile ? isTouched : isHovered;

    const cardStyle = {
      transform: isActive
        ? `perspective(1000px) rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.02,1.02,1.02)`
        : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    };

    const backgroundStyle = {
      transform: isActive
        ? `translateX(${coords.y * -1}px) translateY(${coords.x * 1}px)`
        : "translateX(0) translateY(0)",
      backgroundImage: `url(${image})`,
    };

    return (
      <div
        ref={ref}
        className={`relative w-full px-1 sm:px-4 md:p-3 h-[160px] sm:h-[180px] md:h-[240px] mx-1 sm:mx-2 cursor-pointer group transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="w-full h-full rounded-lg sm:rounded-xl border border-opacity-50 border-neonGreen bg-[#333] overflow-hidden transition-all duration-700 ease-out"
          style={cardStyle}
        >
          <div
            className={`absolute inset-[-38px] bg-cover bg-center transition-all duration-700 ease-out ${
              isActive ? "opacity-80" : "opacity-60"
            }`}
            style={backgroundStyle}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transition-all duration-700 ease-out ${
              isActive 
                ? "h-[85%] sm:h-3/4 translate-y-0 bg-[rgba(0,0,0,0.85)] sm:bg-[rgba(0,0,0,0.6)]" 
                : "h-auto bg-transparent"
            }`}
          >
            <div className="relative z-1 flex flex-col h-full">
              <p 
                className={`text-xs sm:text-sm md:text-md mb-2 transition-all duration-300 line-clamp-4 ${
                  isActive 
                    ? "opacity-100 translate-y-0 order-1" 
                    : "opacity-0 translate-y-4 order-1"
                }`}
              >
                {description}
              </p>
              <h2 className={`text-sm sm:text-lg md:text-xl font-bold text-shadow-lg order-2 ${
                isMobile ? "drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" : ""
              }`}>
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
  return (
    <section className="pt-5 sm:pt-10 relative" id="themes">
      <h2 className="text-center my-5 sm:my-10">
        <Header text="Themes" />
      </h2>
      <div className="mt-8 sm:mt-16 mb-8 sm:mb-12">
        <div className="grid grid-cols-1 px-3 sm:px-4 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
          {themesData.map((card, index) => (
            <Card key={index} {...card} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Theme