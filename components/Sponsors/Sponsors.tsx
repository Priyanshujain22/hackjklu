import React from 'react';
import RevealingSoon from '../RevealingSoon/RevealingSoon';
import Header from '../Header/Header';
// import styles from "./Sponsors.module.css";

const Sponsors = () => {
  return (
    <section className="p-8">
      <h2 className="text-center mb-10">
        <Header text="Sponsors" />
      </h2>
      <div className="py-10 flex justify-center items-center">
        <RevealingSoon />
      </div>
    </section>
  );
}

export default Sponsors;
