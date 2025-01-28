"use client";

import { Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 pb-4 md:px-16 relative pt-24">
      <div className="mx-auto space-y-8 text-white max-w-6xl px-4 md:px-8">
        {/* Quote Section */}
        <div className="text-center text-sm md:text-xl font-bold mb-2 italic md:mb-4">
          <span className="text-white text-sm md:text-xl">&quot;It&apos;s not just about writing </span>
          <span className="text-neonGreen font-semibold text-sm md:text-xl">code</span>
          <span className="text-white text-sm md:text-xl">, it&apos;s about the </span>
          <span className="text-neonGreen font-semibold text-sm md:text-xl">experience</span>
          <span className="text-white text-sm md:text-xl">&quot;</span>
        </div>

        {/* Combined Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Call Us Section */}
          <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-6 text-center shadow-lg hover:shadow-neon-green hover:shadow-[0_0_20px_20px_rgba(31,84,251,0.5)] transition-shadow duration-300">
            <h3 className="text-xl font-bold DinoGame mb-4">Call Us</h3>
            <div className="mt-4 space-y-4">
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-neon-green">
                  Promotion and Outreach
                </p>
                <p className="font-medium text-lg">
                  Rachit: <span className="text-white">+91 93511 87511</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-neon-green">
                  Registrations
                </p>
                <p className="font-medium text-lg">
                  Karan: <span className="text-white">+91 93133 08922</span>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-neon-green">Hospitality</p>
                <p className="font-medium text-lg">
                  Niharika:{" "}
                  <span className="text-white">+91 98282 23577</span>
                </p>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-6 text-center shadow-lg hover:shadow-neon-green hover:shadow-[0_0_20px_20px_rgba(31,84,251,0.5)] transition-shadow duration-300">
            <h3 className="text-xl font-bold DinoGame mb-4">Address</h3>
            <div className="mt-4">
              <p className="font-medium text-lg text-white">
                JK Lakshmipat University, Near Mahindra SEZ, Mahapura, Ajmer
                Road, Jaipur, Rajasthan 302026
              </p>
              <div className="mt-8 ">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=JK+Lakshmipat+University,+Jaipur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-neon-green text-neon-green  font-bold py-2 px-4 rounded-full hover:bg-neon-green transition-colors duration-200"
                >
                  Click to Navigate
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-6 text-center shadow-lg hover:shadow-neon-green hover:shadow-[0_0_20px_20px_rgba(31,84,251,0.5)] transition-shadow duration-300">
            <h3 className="text-xl font-bold DinoGame mb-4">Social Media</h3>
            <div className="mt-6 space-y-8 flex flex-col items-center justify-center">
              <div className="flex items-center space-x-4">
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/hackjklu"}
                  className="flex items-center space-x-4"
                >
                  <Instagram
                    size={30}
                    className="text-neon-pink transition-colors duration-200 hover:text-[#39FF14]"
                  />
                  <span className="text-lg text-white">Instagram</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  target="_blank"
                  href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}
                  className="flex items-center space-x-4"
                >
                  <Youtube
                    size={30}
                    className="text-neon-pink transition-colors duration-200 hover:text-[#39FF14]"
                  />
                  <span className="text-lg text-white">YouTube</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/council-of-technical-affairs-jklu/"
                  }
                  className="flex items-center space-x-4"
                >
                  <Linkedin
                    size={30}
                    className="text-neon-pink transition-colors duration-200 hover:text-[#39FF14]"
                  />
                  <span className="text-lg text-white">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-4 md:p-6 text-center shadow-lg hover:shadow-neon-green hover:shadow-[0_0_20px_20px_rgba(31,84,251,0.5)] transition-shadow duration-300 mt-8">
          <h3 className="text-xl font-bold DinoGame mb-4">Email Us</h3>
          <div className="mt-4">
            <p className="font-medium text-lg text-white">
              For general inquiries:{" "}
              <span className="text-neon-green">hackjklu@jklu.edu.in</span>
            </p>
            <p className="font-medium text-lg text-white">
              For technical issues:{" "}
              <span className="text-neon-green">
                counciloftechnicalaffairs@jklu.edu.in
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
