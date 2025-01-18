"use client";

import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { CardContainer } from "@/components/ui/3d-card";

import { Tally1, Tally2, Tally3 } from 'lucide-react';
import Header from "../Header/Header";

// Define props for the Icon component
interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Icon: FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group/canvas-card border flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 h-[30rem] relative overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

      <div className="absolute inset-0 flex items-center justify-center">
        {/* Circle with size 80x80 */}
        <div className="absolute w-80 h-80 bg-white/20 rounded-full"></div>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-5xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Prize = () => {
  return (
    <section className="pt-10 relative" id="prizes">
      <h2 className="text-center my-10">
        <Header text="Prizes" />
      </h2>
      <div className="py-10 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-20 mx-auto px-8">
        <CardContainer>
            <Card title="🥈 INR 30000" icon={<Tally2 size={64} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-48 w-48 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l5.18 3.73-1.64-5.81L21 9.24l-5.9-.51L12 3.5 8.9 8.73 3 9.24l4.46 5.95-1.64 5.81L12 17.27z"
            />
          </svg>
        </motion.div>
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
          
            </Card>
        </CardContainer>
        <CardContainer>
          <Card title="🥇 INR 50000" icon={<Tally1 size={64} />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-red-900"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-56 w-56 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l5.18 3.73-1.64-5.81L21 9.24l-5.9-.51L12 3.5 8.9 8.73 3 9.24l4.46 5.95-1.64 5.81L12 17.27z"
            />
          </svg>
        </motion.div>
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
          </Card>
        </CardContainer>
        <CardContainer>
          <Card title="🥉 INR 20000" icon={<Tally3 size={64} />}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-40 w-40 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 17.27l5.18 3.73-1.64-5.81L21 9.24l-5.9-.51L12 3.5 8.9 8.73 3 9.24l4.46 5.95-1.64 5.81L12 17.27z"
            />
          </svg>
        </motion.div>
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
          </Card>
        </CardContainer>
      </div>
    </section>
  );
};

export default Prize;
