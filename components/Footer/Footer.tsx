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

const Footer = () => {
  return (
    <div className="flex flex-col mt-16 relative text-white">
      {/* Infinite Scrolling Background */}
      {/* <span className="absolute inset-x-0 w-full h-[30px] bg-[url('/dino/ground.png')] bg-repeat-x animate-ground-secondary"></span>
            <span className="absolute inset-x-0 w-full h-[30px] bg-[url('/dino/ground.png')] bg-repeat-x animate-ground"></span> */}

      {/* <div className="my-10"></div> */}

      {/* Quote Section */}
      <div className="text-center text-3xl md:text-4xl font-bold mb-8">
        <span className="text-white">&quot;It&apos;s not just about writing </span>
        <span className="text-neonGreen font-semibold ">code</span>
        <span className="text-white">, it&apos;s about the </span>
        <span className="text-neonGreen font-semibold">experience</span>
        <span className="text-white">&quot;</span>
      </div>

      <hr className="border-t-2 border-neonGreen my-4" />

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
  );
};

export default Footer;
