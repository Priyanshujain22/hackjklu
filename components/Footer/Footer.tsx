"use client";
import React from "react";
import { Linkedin, Instagram, Youtube } from "lucide-react";

interface SocialMediaIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon className="w-8 h-8 text-white transition-transform duration-300 ease-in-out hover:fill-neonGreen hover:scale-125" />
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000c6] mt-4 md:mt-8 text-white p-5 md:p-8 relative z-[10]">
      <div className="text-center text-lg md:text-xl font-bold italic py-6 md:py-10">
        <span className="text-white">&quot;It&apos;s not just about writing </span>
        <span className="text-neonGreen font-semibold">code</span>
        <span className="text-white">, it&apos;s about the </span>
        <span className="text-neonGreen font-semibold">experience</span>
        <span className="text-white">&quot;</span>
      </div>

      <hr className="border-[#808080] mb-6" />

      <div className="md:mx-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Address and Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mt-4 md:mr-12 mb-6">
              <h4 className="text-lg font-normal tracking-wide text-neonGreen relative after:content-[''] after:bg-neonGreen after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:transition-all after:duration-300 hover:after:w-full w-max cursor-pointer">
                ADDRESS
              </h4>
              <p className="text-sm md:text-base mt-2">
                JK LAKSHMIPAT UNIVERSITY, P.O. 302 026, MAHAPURA RD, NEAR MAHINDRA SEZ, MAHAPURA, RAJASTHAN 302026
              </p>
            </div>

            <div className="">
              <h4 className="text-lg font-normal tracking-wide text-neonGreen relative after:content-[''] after:bg-neonGreen after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:transition-all after:duration-300 hover:after:w-full w-max cursor-pointer">
                CONTACT INFO
              </h4>
              <p className="text-sm md:text-base mt-2">
                <strong>Email:</strong>
                <br />
                General queries: <a href="mailto:hackjklu@jklu.edu.in" className="text-white hover:text-neonGreen">hackjklu@jklu.edu.in</a>
                <br />
                Technical issues: <a href="mailto:counciloftechnicalaffairs@jklu.edu.in" className="text-white hover:text-neonGreen">counciloftechnicalaffairs@jklu.edu.in</a>
              </p>
              <p className="text-sm text-white md:text-base mt-4">
                <strong>Call Us:</strong>
                <br />
                Promotion & Outreach: +91 93511 87511 (Rachit)
                <br />
                Registrations: +91 93133 08922 (Karan)
                <br />
                Hospitality: +91 98282 23577 (Niharika)
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="w-full h-[15rem] md:h-[18rem] lg:h-[22rem] border-none rounded-md"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col mt-6  text-center md:text-left">
        <div className="px-6 flex flex-col lg:flex-row gap-4 lg:gap-12 justify-center lg:justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <SocialMediaIcon href="https://www.instagram.com/hackjklu" Icon={Instagram} />
            <SocialMediaIcon href="https://www.youtube.com/@CouncilofTechnicalAffairs" Icon={Youtube} />
            <SocialMediaIcon href="https://www.linkedin.com/in/council-of-technical-affairs-jklu/" Icon={Linkedin} />
          </div>

          {/* Copyright */}
          <p className="text-white text-sm md:text-base font-normal">
            © 2025 HackJKLU 4.0, All rights reserved
          </p>

          {/* Made By */}
          <p className="text-white text-sm md:text-base font-normal">
            Made with ❤️ by Preet Taparia & Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
