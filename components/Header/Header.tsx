"use client";

import React from 'react';
import style from "./Header.module.css";
import ScrambleHover from './ScrambleHover';
import { Press_Start_2P } from "next/font/google";

const press_start_2p = Press_Start_2P({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

type HeaderProps = {
  text: string;
};

const Header = ({ text }: HeaderProps) => {
  
  return (
    <div className={style.heading}>
      <ScrambleHover
          text={text}
          scrambleSpeed={100}
          sequential={false}
          // revealDirection="center"
          maxIterations={8}
          useOriginalCharsOnly={true}
          className={style.headingText + ` ${press_start_2p.className}`}
          // characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
        />
    </div>
  );
};

export default Header;
