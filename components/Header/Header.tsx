"use client";

import React from 'react';
import style from "./Header.module.css";
import ScrambleHover from './ScrambleHover';

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
          className={style.headingText}
          // characters="abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;':\,./<>?"
        />
    </div>
  );
};

export default Header;
