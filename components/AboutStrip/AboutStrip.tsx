"use client";

import { FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import JKLULogo from "@/public/jklu.png";
import TechhLogo from "@/public/tech-affair.png";

const AboutStrip = () => {
  return (
    <div className="relative mb-10">
      <div className="px-8 lg:px-16 flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-0">
          {/* Logos section */}
          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <div className="w-72 transform transition-all duration-300 hover:scale-105">
              <a href="https://jklu.edu.in/council-of-technical-affairs/">
                <Image
                  width={400}
                  height={400}
                  alt="Tech Affair"
                  src={TechhLogo}
                  className="object-contain"
                />
              </a>
            </div>
            <div className="hidden sm:block w-32 transform transition-all duration-300 hover:scale-105">
              <a href="https://jklu.edu.in/">
                <Image
                  width={400}
                  height={400}
                  alt="JKLU"
                  src={JKLULogo}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
          {/* Social media links */}
          <div className="hidden sm:flex gap-10 sm:gap-2 md:gap-8 justify-center">
            <Link target="_blank" href={"https://www.instagram.com/hackjklu"}>
              <BiLogoInstagramAlt size={40} className="hover:fill-neonGreen transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}>
              <FaYoutube size={40} className="hover:fill-neonGreen transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/council-of-technical-affairs-jklu/"}>
              <BiLogoLinkedinSquare size={40} className="hover:fill-neonGreen transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStrip;
