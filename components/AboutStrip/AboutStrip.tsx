"use client";

import { Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JKLULogo from "@/public/jklu.png";
import TechhLogo from "@/public/tech-affair.png";

const AboutStrip = () => {
  return (
    <div className="relative bg-gradient-to-b from-transparent via-black/50 to-black">
      <div className="mt-0 sm:mt-10 px-8 lg:px-16 flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0 lg:gap-10">
          {/* Logos section */}
          <div className="flex justify-between items-center w-full px-0 sm:justify-center lg:justify-end order-1 sm:order-2">
            <div className="transform transition-all duration-300 hover:scale-105 lg:mr-4">
              <a href="https://jklu.edu.in/council-of-technical-affairs/">
                <Image
                  width={400}
                  height={400}
                  alt="Tech Affair"
                  src={TechhLogo}
                  className="object-contain w-[140px] h-[100px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[200px] lg:h-[140px]"
                />
              </a>
            </div>
            <div className="transform transition-all duration-300 hover:scale-105 lg:ml-4">
              <a href="https://jklu.edu.in/">
                <Image
                  width={400}
                  height={400}
                  alt="JKLU"
                  src={JKLULogo}
                  className="object-contain w-[75px] h-[75px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[130px] lg:h-[130px]"
                />
              </a>
            </div>
          </div>

          {/* Social media links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-end mt-4 sm:mt-0 order-2 sm:order-1 w-full pr-2">
            <Link target="_blank" href={"https://www.instagram.com/hackjklu"}>
              <Instagram size={30} className="hover:fill-neonGreen transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}>
              <Youtube size={30} className="hover:fill-neonGreen transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/council-of-technical-affairs-jklu/"}>
              <Linkedin size={30} className="hover:fill-neonGreen transition-all" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black -z-10"></div>
    </div>
  );
};

export default AboutStrip;
