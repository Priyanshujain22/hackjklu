import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./WhoShouldApply.module.css"
import { Share_Tech_Mono } from "next/font/google";
import { CardContainer } from "@/components/ui/3d-card";
import Header from '../Header/Header';

const tech_mono = Share_Tech_Mono({ subsets: ["latin"], weight: ["400"] });

const WhoShouldApply = () => {

  return (
    <section className={`bg-black/50 ${tech_mono.className} relative `}>
      <div className="mx-5 md:mx-20 flex flex-col md:flex-row justify-center items-center">
        <div className="hidden md:block">
          <CardContainer className={cn("flex justify-center items-center")}>
            <Image src="/whoshouldapplyimg.webp" alt="" width={1040} height={650} />
          </CardContainer>
        </div>
        <div className="md:ml-8">
          <h1 className="text-center">
            <Header text="Who Should Apply?" />
          </h1>
          <div className={cn("flex justify-center items-center md:hidden")}>
            <CardContainer className="flex justify-center items-center">
              <Image
                src="/whoshouldapplyimg.webp"
                alt=""
                width={320}
                height={320}
              />
            </CardContainer>
          </div>
          <ul className="ml-4 md:ml-5 text-4xl flex flex-col items-center md:items-start">
            <li className="text-2xl md:text-4xl mb-2 text-center md:text-left">
              <span role="img" aria-label="student">👨‍🎓</span> <span className={cn(styles.gradientText)}>STUDENTS</span>
            </li>
            <div
              className="hidden md:block opacity-30 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-400"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
            <li className="text-2xl md:text-4xl my-2 text-center md:text-left">
              <span role="img" aria-label="entrepreneur">💼</span> <span className={cn(styles.gradientText)}>ENTREPRENEURS</span>
            </li>
            <div
              className="hidden md:block opacity-30 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-400"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
            <li className="text-2xl md:text-4xl my-2 text-center md:text-left">
              <span role="img" aria-label="enthusiast">🚀</span> <span className={cn(styles.gradientText)}>ENTHUSIASTS</span>
            </li>
            <div
              className="hidden md:block opacity-30 w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-400"
              style={{
                boxShadow:
                  "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
              }}
            ></div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldApply;
