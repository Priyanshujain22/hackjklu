"use client";

import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points } from "three";
import React, { useEffect, useRef } from "react";
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
      starsRef.current.rotation.y += 0.0001; // Slowly rotate around the Y-axis
    }
  });

  return <Stars ref={starsRef} radius={50} count={2000} factor={4} fade speed={1} />;
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
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <CardContainer className="z-50 ">
          <CardBody className="relative group/card border-white/[0.2] flex flex-col gap-y-10 justify-center items-center w-auto h-auto rounded-xl p-10">
            <CardItem
              translateZ="50"
              className="text-9xl font-bold text-white"
            >
              HackJKLU v4.0
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-3xl font-bold text-white"
            >
              7 - 9 March
            </CardItem>
            <CardItem
              translateZ="30"
              className="text-4xl font-bold text-white"
            >
              Dream Design Develop
            </CardItem>
            <CardItem
              translateZ="50"
              className="text-5xl font-bold text-white"
            >
              Timer
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
