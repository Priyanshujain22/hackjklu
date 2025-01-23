"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import VariableFontCursorProximity from "../ui/VariableFontCursorProximity";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="about" className="pt-10 relative" ref={containerRef}>
      <div className="md:mx-[5rem] lg:mx-[10rem]">
        <h1 className="text-center">
          <Header text="About Us" />
        </h1>
        <div className="mx-[1rem]">
          <div className="text-sm lg:text-base flex flex-col md:flex-row items-center my-[1rem]">
            <div className="w-full lg:w-1/2 lg:p-6 leading-relaxed order-2 md:order-1">
              <div>
                {isLargeScreen ? (
                  <>
                    <div className="mb-2">
                      <VariableFontCursorProximity
                        label={`We gladly announce the return of HackJKLU, a premier national-level hackathon hosted by Council of Technical Affairs at JK Lakshmipat University (JKLU), a leading institution in innovation, technology, and interdisciplinary education. This exciting event takes place within the span of 3 days bringing together top-tier talent from across the nation to solve real-world challenges that impact industries, communities, and the environment.`}
                        className="tracking-wide text-sm lg:text-lg"
                        fromFontVariationSettings="'wght' 400, 'slnt' 0"
                        toFontVariationSettings="'wght' 900, 'slnt' -10"
                        falloff="gaussian"
                        radius={70}
                        containerRef={containerRef}
                      />
                    </div>
                    <div>
                      <VariableFontCursorProximity
                        label={`This year's hackathon goes beyond traditional competitions—HackJKLU v4.0 fosters a collaborative ecosystem for interdisciplinary problem-solving and empowers participants to make meaningful contributions to global issues.`}
                        className="tracking-wide text-sm lg:text-lg"
                        fromFontVariationSettings="'wght' 400, 'slnt' 0"
                        toFontVariationSettings="'wght' 900, 'slnt' -10"
                        falloff="gaussian"
                        radius={70}
                        containerRef={containerRef}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-2">
                      <p className="tracking-wide text-sm lg:text-lg text-justify">
                        We gladly announce the return of HackJKLU, a premier national-level hackathon hosted by Council of Technical Affairs at JK Lakshmipat University (JKLU), a leading institution in innovation, technology, and interdisciplinary education. This exciting event takes place within the span of 3 days bringing together top-tier talent from across the nation to solve real-world challenges that impact industries, communities, and the environment.
                      </p>
                    </div>
                    <div>
                      <p className="tracking-wide text-sm lg:text-lg text-justify">
                        This year&apos;s hackathon goes beyond traditional competitions—HackJKLU v4.0 fosters a collaborative ecosystem for interdisciplinary problem-solving and empowers participants to make meaningful contributions to global issues.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center order-1 md:order-2 mb-10">
              <Image
                src="/hackjklu-logo.png"
                alt="HackJKLU logo"
                width={300}
                height={300}
                className="w-[180px] h-[180px] md:w-[360px] md:h-[325px] lg:w-[300px] lg:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
