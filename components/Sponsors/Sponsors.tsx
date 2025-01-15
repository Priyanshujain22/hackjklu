import React from 'react';
import HeaderSmall from '../HeaderSmall/HeaderSmall';
import Header from '../Header/Header';
// import styles from "./Sponsors.module.css";

const Sponsors = () => {
  return (
    <section className="pt-10 relative" id='sponsors'>
      <h2 className="text-center my-10">
        <Header text="Sponsors" />
      </h2>
      <div className="py-10 flex justify-center items-center">
        <HeaderSmall text='Gold' />
        <HeaderSmall text='Silver' />
        <HeaderSmall text='Bronze' />
      </div>
    </section>
  );
}

export default Sponsors;
