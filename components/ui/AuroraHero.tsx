"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points } from "three";
import React, { useEffect, useState, useRef } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const COLORS_TOP = ["#97FE71", "#1f54fb", "#47DE81", "#1f54fb"];

const RotatingStars = () => {
  const starsRef = useRef<Points>(null);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001;
      starsRef.current.rotation.x -= 0.0001;
    }
  });

  return <Stars ref={starsRef} radius={50} count={1000} factor={4} fade speed={1} />;
};

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-03-07T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeRemaining({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  const renderCard = (value: string, label: string) => (
    <div className="flex flex-col items-center p-4 bg-transparent border-white border rounded-lg flex-1 aspect-w-1 aspect-h-1">
      <div className="text-5xl font-bold text-white">{value}</div>
      <div className="text-lg font-semibold text-gray-300 mt-2">{label}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 w-full max-w-4xl">
      {renderCard(timeRemaining.days, "Days")}
      {renderCard(timeRemaining.hours, "Hours")}
      {renderCard(timeRemaining.minutes, "Minutes")}
      {renderCard(timeRemaining.seconds, "Seconds")}
    </div>
  );
};

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
    id="main"
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 sm:px-8 sm:py-20 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <CardContainer className="z-50">
          <CardBody className="relative group/card border-white/[0.2] flex flex-col gap-y-10 justify-center items-center w-auto rounded-xl p-6 sm:p-10">
            <CardItem translateZ="50" className="text-6xl sm:text-9xl text-center font-bold text-white">
              HackJKLU v4.0
            </CardItem>
            <CardItem translateZ="60" className="text-2xl sm:text-3xl text-center font-bold text-white">
              7 - 9 March 2025
            </CardItem>
            <CardItem translateZ="30" className="text-3xl sm:text-4xl text-center font-bold text-white">
              Dream Design Develop
            </CardItem>
            <CardItem translateZ="50" className="w-full">
              <CountdownTimer />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <RotatingStars />
        </Canvas>
      </div>
    </motion.section>
  );
};
