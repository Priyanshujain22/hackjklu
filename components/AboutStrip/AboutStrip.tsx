"use client";

import { Linkedin, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const AboutStrip = () => {
  return (
    <div className="relative">
      <div className="mt-4 px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-8 sm:gap-0">
          <div className="flex gap-10 justify-center">
            <Link
              target="_blank"
              href={"https://www.instagram.com/hackjklu"}
            >
              <Instagram size={40} className="hover:fill-neonGreen " />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}
            >
              <Youtube size={40} className="hover:fill-neonGreen "/>
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/council-of-technical-affairs-jklu/"}
            >
              <Linkedin size={40} className="hover:fill-neonGreen " />
            </Link>
          </div>

          <div className="flex gap-12 justify-center">
            <div className="w-32 lg:w-40 text-center text-white">
              <div className="w-full h-20 rounded">JKLU Logo</div>
            </div>
            <div className="w-32 lg:w-40 text-center text-white">
              <div className="w-full h-20 rounded">IET Logo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStrip;
