import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";
import navData from "../../data/navbar.json";

// Type definition for the props of SocialMediaIcon component
interface SocialMediaIconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // The Icon should be a React component that takes SVG props
  href: string;
  className?: string;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ Icon, href, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <Icon
      className={`w-${className} h-${className} hover:text-neonGreen text-white transition ease-in-out delay-150 hover:scale-125 duration-300`}
    />
  </a>
);

const Footer = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-16 relative text-white">
      {/* Quote Section */}
      <div className="text-center text-sm md:text-2xl font-bold mb-2 md:mb-6">
        <span className="text-white text-sm md:text-xl">&quot;It&apos;s not just about writing </span>
        <span className="text-neonGreen font-semibold text-sm md:text-xl">code</span>
        <span className="text-white text-sm md:text-xl">, it&apos;s about the </span>
        <span className="text-neonGreen font-semibold text-sm md:text-xl">experience</span>
        <span className="text-white text-sm md:text-xl">&quot;</span>
      </div>

      <hr className="border-t-2 border-neonGreen my-1 md:my-2" />

      <div className="px-4 flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center lg:justify-between items-center lg:items-start">
        {/* Links Section */}
        <div className="w-full md:w-auto flex flex-wrap items-center lg:items-start mb-2 md:mb-4 justify-center lg:justify-start">
          {/* Mobile Layout: 4 links in the first row, 3 in the second */}
          <div className="flex flex-wrap justify-center lg:hidden gap-x-4 gap-y-1">
            {/* First row of links */}
            <div className="flex justify-center gap-4 w-full mb-1">
              {navData.slice(0, 4).map(({ name, link }: { name: string; link: string }) => (
                <Link
                  href={link}
                  key={name}
                  className="text-white text-sm font-normal hover:text-neonGreen"
                >
                  {name}
                </Link>
              ))}
            </div>
            {/* Second row of links */}
            <div className="flex justify-center gap-4 w-full">
              {navData.slice(4).map(({ name, link }: { name: string; link: string }) => (
                <Link
                  href={link}
                  key={name}
                  className="text-white text-sm font-normal hover:text-neonGreen"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Layout: All links in a single row */}
          <div className="hidden lg:flex flex-wrap gap-4">
            {navData.map(({ name, link }: { name: string; link: string }) => (
              <Link
                href={link}
                key={name}
                className="text-white text-sm sm:text-lg font-normal leading-5 md:leading-normal tracking-wide md:tracking-tight hover:text-neonGreen relative after:content-[''] after:bg-neonGreen after:h-[1px] after:w-0 after:left-0 after:bottom-[-4px] after:absolute after:duration-300 hover:after:w-full mb-1 sm:mb-2"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <SocialMediaIcon
            href="https://www.instagram.com/hackjklu"
            Icon={Instagram}
            className="6 md:8"
          />
          <SocialMediaIcon
            href="https://www.youtube.com/@CouncilofTechnicalAffairs"
            Icon={Youtube}
            className="6 md:8"
          />
          <SocialMediaIcon
            href="https://www.linkedin.com/in/council-of-technical-affairs-jklu/"
            Icon={Linkedin}
            className="6 md:8"
          />
        </div>
      </div>

      {/* Copyright */}
      <p className="text-white text-xs md:text-xs font-normal text-center leading-normal tracking-tight pt-2 md:pt-8 mb-1 md:mb-4">
        © 2025 HackJKLU 4.0, All rights reserved
      </p>
    </div>
  );
};

export default Footer;
