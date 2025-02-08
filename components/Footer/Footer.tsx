"use client";
import React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import navData from "../../data/navbar.json";

// Type definition for the props of SocialMediaIcon component
interface SocialMediaIconProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // The Icon should be a React component that takes SVG props
    href: string;
  }
  
  const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ Icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="w-8 h-8 hover:text-neonGreen text-white transition ease-in-out delay-150 hover:scale-125 duration-300" />
    </a>
  );

const Footer: React.FC = () => {
    return (
        <footer
            className={`bg-[#000000c6] mt-[1rem] md:mt-[2rem] text-white p-5 md:p-8 relative z-[100]`}
        >
            <div className="md:mx-[3rem]">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="w-full md:w-50% lg:40% flex flex-col">

                        <div className="mt-[2rem] md:mr-[7rem] mb-[2rem]">
                            <h4
                                className={cn(
                                    "text-white text-sm sm:text-lg font-normal leading-5 md:leading-normal tracking-wide md:tracking-tight hover:text-neonGreen relative after:content-[''] after:bg-neonGreen after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full w-max cursor-pointer"
                                )}
                            >
                                ADDRESS
                            </h4>
                            <br />
                            <p className="text-[0.7rem] md:text-[1.1rem] font-thin">
                                JK LAKSHMIPAT UNIVERSITY, P.O. 302 026, MAHAPURA
                                RD, NEAR MAHINDRA SEZ, MAHAPURA, RAJASTHAN
                                302026
                            </p>
                        </div>
                        <div className="my-4">
                            <h4
                                className={cn(
                                    "text-white text-sm sm:text-lg font-normal leading-5 md:leading-normal tracking-wide md:tracking-tight hover:text-neonGreen relative after:content-[''] after:bg-neonGreen after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full w-max cursor-pointer"
                                )}
                            >
                                CONTACT INFO
                            </h4>
                            <br />
                            <a
                                className="md:mb-[0.5rem] text-[0.7rem] md:text-[1.2rem] font-thin"
                                href="mailto:counciloftechnicalaffairs@jklu.edu.in"
                            >
                                Email:
                                <br />
                                For general queries: hackjklu@jklu.edu.in
                                <br />
                                For technical issues: counciloftechnicalaffairs@jklu.edu.in
                                <br />
                                <br />
                            </a>
                            <p className="md:mb-[1rem] text-[0.7rem] md:text-[1.2rem] font-thin">
                                Call Us:
                                <br />
                                Promotion & Outreach: +91 93511 87511 (Rachit)
                                <br />
                                Registrations: +91 93133 08922 (Karan)
                                <br />
                                Hospitality: +91 98282 23577 (Niharika)
                            </p>
                            
                        </div>
                    </div>
                    <br />

                    <div className="w-full md:w-50% lg:w-50%">
                        <div className={cn()}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className="relative w-full h-[15rem] md:h-[15rem] md:w-[25rem] lg:h-[25rem] lg:w-[45rem] rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <br />
            </div>
            <div className="flex flex-col mt-16 relative">
      <hr className="border-[#808080] mb-12" />
      <div className="px-10 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center lg:justify-between items-center lg:items-start">
        {/* Links Section */}
        <div className="w-full md:w-auto flex items-center lg:items-start flex-wrap mb-6 sm:mb-0 gap-4 sm:gap-10 justify-center lg:justify-start">
          {navData.map(({ name, link }: { name: string; link: string }) => (
            <Link
              href={link}
              key={name}
              className="text-white text-sm sm:text-lg font-normal leading-5 md:leading-normal tracking-wide md:tracking-tight hover:text-neonGreen relative after:content-[''] after:bg-neonGreen after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full"
            >
              {name}
            </Link>
          ))}
        </div>
        
        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <SocialMediaIcon
            href="https://www.instagram.com/hackjklu"
            Icon={Instagram}
          />
          <SocialMediaIcon
            href="https://www.youtube.com/@CouncilofTechnicalAffairs"
            Icon={Youtube}
          />
          <SocialMediaIcon
            href="https://www.linkedin.com/in/council-of-technical-affairs-jklu/"
            Icon={Linkedin}
          />
        </div>
      </div>
      
      {/* Copyright */}
      <p className="text-white text-lg font-normal text-center leading-normal tracking-tight pt-12 mb-8">
        © 2025 HackJKLU 4.0, All rights reserved
      </p>
    </div>
        </footer>
    );
};

export default Footer;