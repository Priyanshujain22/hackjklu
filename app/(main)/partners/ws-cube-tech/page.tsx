"use client";

import Image from "next/image";
import React from "react";
import { MotionProps, motion } from "framer-motion";
import Header from "@/components/Header/Header";
import { twMerge } from "tailwind-merge";
import { TbBrowserMaximize } from "react-icons/tb";
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si";


export default function SponsorPage(): JSX.Element {
  return (
    <>
      <section className="px-10 relative pt-24 text-center">
        <h2 className="text-center mb-10">
          <Header text="Pre-Hackathon Partner" />
        </h2>
        <RevealBento />
      </section>
    </>
  );
}

const RevealBento = (): JSX.Element => {
  return (
    <div className="text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.05 }}
        className="mx-auto grid grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <OfferingBlock />
      </motion.div>
    </div>
  );
};

type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = (): JSX.Element => (
  <Block className="col-span-12 row-span-2 md:col-span-6 flex justify-center">
    <div className="my-5 flex justify-center">
      <Image src="/sponsors/WsCubeTech.webp" alt="WS Cube Tech Logo" width={400} height={200} />
    </div>
  </Block>
);

const SocialsBlock = (): JSX.Element => (
  <>
    <Block whileHover={{
      rotate: "-2.5deg",
      scale: 1.05,
    }} className="col-span-6 bg-gradient-to-r from-neonBlue to-neonGreen md:col-span-3">
      <a href="https://www.wscubetech.com/" className="grid h-full place-content-center text-5xl text-white">
        <TbBrowserMaximize />
      </a>
    </Block>
    <Block whileHover={{
      rotate: "1.5deg",
      scale: 1.05,
    }} className="col-span-6 bg-red-500 md:col-span-3">
      <a href="https://www.youtube.com/@wscubetech/videos" className="grid h-full place-content-center text-5xl text-white">
        <SiYoutube />
      </a>
    </Block >
    <Block whileHover={{
      rotate: "2deg",
      scale: 1.05,
    }} className="col-span-6 bg-[#0077B5] md:col-span-3">
      <a href="https://www.linkedin.com/company/wscubetechindia/?originalSubdomain=in" className="grid h-full place-content-center text-5xl text-white">
        <SiLinkedin />
      </a>
    </Block>
    <Block whileHover={{
      rotate: "-1.5deg",
      scale: 1.05,
    }} className="col-span-6 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] md:col-span-3">
      <a href="https://www.instagram.com/wscubetechindia/" className="grid h-full place-content-center text-5xl text-white">
        <SiInstagram />
      </a>
    </Block>
  </>
);


const AboutBlock = (): JSX.Element => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      WS Cube Tech is a leading provider of IT training and services, empowering individuals and businesses
      with cutting-edge skills and solutions.
    </p>
  </Block>
);

const OfferingBlock = (): JSX.Element => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
      WS Cube Tech is providing us.......
    </p>
  </Block>
);
