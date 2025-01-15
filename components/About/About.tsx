"use client"

import { useRef } from "react"
import Image from "next/image";
import Header from '../Header/Header';
import VariableFontCursorProximity from "../ui/VariableFontCursorProximity";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <section id='about' className='pt-10 relative' ref={containerRef}>
      <div className="md:mx-[5rem] lg:mx-[10rem]">
        <h1 className="text-center my-10">
          <Header text='About Us' />
        </h1>
        <div className={`mx-[1rem]`}>
          <div className="text-sm lg:text-base flex flex-col md:flex-row items-center my-[1rem]">
            <div className="w-full lg:w-1/2 lg:p-8 leading-relaxed order-2 md:order-1 text-justify">
              <div className="mb-2">
                <VariableFontCursorProximity
                  label={`We gladly announce the return of HackJKLU v4.0 an annual hackathon event aimed at instilling creativity in the fundamental culture of JK Lakshmipat University an exciting event that takes place within the span of 3 days bringing together one of the sharpest minds from different disciplines including Engineering, Management and design.`}
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
                  label={`HackJKLU v4.0, is a community of tech enthusiasts, innovators and problem solvers where they get a chance to compete under one roof by thinking outside the box and solving real life problems with their innovative ideas with an environment that encourages diversity and promotes collaboration.`}
                  className="tracking-wide text-sm lg:text-lg"
                  fromFontVariationSettings="'wght' 400, 'slnt' 0"
                  toFontVariationSettings="'wght' 900, 'slnt' -10"
                  falloff="gaussian"
                  radius={70}
                  containerRef={containerRef}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center order-1 md:order-2">
              <Image
                src="/hackjklu-logo.png"
                alt=""
                width={300}
                height={300}
                className="w-[180px] h-[180px] md:w-[360px] md:h-[325px] lg:w-[300px] lg:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About