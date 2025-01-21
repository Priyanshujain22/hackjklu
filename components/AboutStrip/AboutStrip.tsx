"use client";

import { Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import JKLULogo from "@/public/jklu.png";
import TechhLogo from "@/public/tech-affair.png";

const AboutStrip = () => {
  return (
    <div className="relative">
      <div className="mt-10 px-8 lg:px-16 flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-0">
          {/* Social media links */}
          <div className="flex gap-10 justify-center">
            <Link target="_blank" href={"https://www.instagram.com/hackjklu"}>
              <Instagram size={40} className="hover:fill-neonGreen transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}>
              <Youtube size={40} className="hover:fill-neonGreen transition-all" />
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/council-of-technical-affairs-jklu/"}>
              <Linkedin size={40} className="hover:fill-neonGreen transition-all" />
            </Link>
          </div>

          {/* Logos section */}
          <div className="flex flex-col sm:flex-row  gap-12 items-center justify-center mt-8 sm:mt-0">
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
            <div className="w-32 transform transition-all duration-300 hover:scale-105">
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
        </div>
      </div>
    </div>
  );
};

export default AboutStrip;
