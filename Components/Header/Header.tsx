import React from 'react';
import style from "./Header.module.css";

type HeaderProps = {
  text: string;
};

// const Header = ( text : string ) => {
const Header = ({ text }: HeaderProps) => {
  return (
    <div className={style.heading}>
      <h1 className={style.headingText}>{text}</h1>
      <span />
      <span />
      <span />
    </div>
  );
};

export default Header;
