import React from 'react';
import { AuroraHero } from '../ui/AuroraHero';


// import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className='mx-auto'>
      <AuroraHero />
      
      {/* <div
        className={`flex flex-col md:flex-row items-center justify-center p-10`}
      >
        <div className="flex flex-col items-center md:items-start justify-center w-100% md:w-1/2">
          <h2 className="text-[1.3rem] md:text-[2.25rem] text-center md:text-left">
            15th - 17th March, 2024
          </h2>
          <h1
            className="text-[2.8rem] md:text-[4rem] font-bold text-left mb-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            HackJKLU 4.0
          </h1>
          <h3 className="hidden md:block text-[2rem] font-thin text-left mb-9 border-l-4 border-solid border-gray-300 pl-4">
            We Invite You!
          </h3>
          <p className="hidden md:block text-gray-300 text-[1.1rem] mb-[2rem]">
            Come be a part of an event where amazing minds team up to solve
            problems and bring new ideas to life. The top three contestants will
            each win prizes. Don&apos;t miss out—register today and put your skills
            to the test in the mainframe!
          </p>
          <div className="hidden md:flex items-center justify-between">
            <RegisterBtn />
            <NextLink href="/give-your-statement" passHref>
              <div className={`ml-4 relative`}>
                <div className="rounded-md bg-[#00bcd4] p-0.5">
                  <div className="rounded-[0.3rem] items-center justify-center bg-[#00363d] py-3 px-5">
                    <span className="text-white text-lg">Give Your Statement</span>
                  </div>
                </div>
              </div>
            </NextLink>
          </div>
        </div>

        <div className=" ml-[2rem] flex justify-center items-center">
          <Image
            className=""
            src="/hero-image.png"
            alt=""
            width={600}
            height={600}
          />
        </div>
        <h3 className="block md:hidden text-[1.5rem] font-thin text-left my-8 border-l-4 border-solid border-gray-300 pl-4">
          We Challenge You!
        </h3>
        <p className="block md:hidden text-center text-gray-300 text-[0.9rem] mb-[1.5rem]">
          Come be a part of an event where amazing minds team up to solve
          problems and bring new ideas to life. The top three contestants will
          each win prizes. Don&apos;t miss out—register today and put your skills to
          the test in the mainframe!
        </p>
        <div className="my-[1rem] flex items-center md:hidden">
          <RegisterBtn />
        </div>
        <div className="md:hidden flex items-center justify-between">
          <NextLink href="/give-your-statement" passHref>
            <div className={`relative`}>
              <div className="rounded-md bg-[#00bcd4] p-0.5">
                <div className="rounded-[0.3rem] items-center justify-center bg-[#00363d] px-3 py-2">
                  <span className="text-white text-sm">Give Your Statement</span>
                </div>
              </div>
            </div>
          </NextLink>
        </div>
      </div> */}
    </section>
  )
}

export default Hero;
