"use client";

import Header from "@/components/Header/Header";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isHovering, setIsHovering] = useState(false);
  const [displayText, setDisplayText] = useState(
    "Reaching JK Lakshmipat University"
  );
  const [isUnscrambling, setIsUnscrambling] = useState(false);

  useEffect(() => {
    let interval;
    if (isHovering) {
      let scrambleCount = 0;
      interval = setInterval(() => {
        if (scrambleCount < 10) {
          setDisplayText((prev) => {
            const scrambled = prev
              .split("")
              .map(() => String.fromCharCode(33 + Math.random() * 94))
              .join("");
            return scrambled;
          });
          scrambleCount++;
        } else {
          setDisplayText("Reaching JK Lakshmipat University");
          setIsUnscrambling(true); // Set unscrambling state to true
          clearInterval(interval);
        }
      }, 90);
    } else {
      setDisplayText("Reaching JK Lakshmipat University");
      setIsUnscrambling(false); // Reset unscrambling state
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <>
      <section className="px-6 md:px-16 relative pt-24 ">
        <div className="mx-auto space-y-12 text-white max-w-5xl">
          <h2 className="text-center mb-10">
            <Header
              text="Contact Us"
              className={`text-neon-green DinoGame ${
                isUnscrambling ? "unscrambling" : ""
              }`}
            />
          </h2>

          {/* Combined Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Call Us Section */}
            <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-8 text-center shadow-lg hover:shadow-neon-green">
              <h3 className="text-2xl font-bold DinoGame mb-4">Call Us</h3>
              <div className="mt-4 space-y-6">
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
                  <p className="text-lg font-bold text-neon-green">
                    Hospitality
                  </p>
                  <p className="font-medium text-lg">
                    Niharika:{" "}
                    <span className="text-white">+91 98282 23577</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-8 text-center shadow-lg hover:shadow-neon-green">
              <h3 className="text-2xl font-bold DinoGame mb-4">Address</h3>
              <div className="mt-4">
                <p className="font-medium text-lg text-white">
                  JK Lakshmipat University, Near Mahindra SEZ, Mahapura, Ajmer
                  Road, Jaipur, Rajasthan 302026
                </p>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-8 text-center shadow-lg hover:shadow-neon-green">
              <h3 className="text-xl font-bold DinoGame mb-4">Social Media</h3>
              <div className="mt-6 space-y-12 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-6">
                  <Link
                    target="_blank"
                    href={"https://www.instagram.com/hackjklu"}
                    className="flex items-center space-x-6"
                  >
                    <Instagram
                      size={30}
                      className="text-neon-pink transition-colors duration-200 hover:text-[#39FF14]"
                    />
                    <span className="text-lg text-white">Instagram</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-6">
                  <Link
                    target="_blank"
                    href={"https://www.youtube.com/@CouncilofTechnicalAffairs"}
                    className="flex items-center space-x-6"
                  >
                    <Youtube
                      size={30}
                      className="text-neon-pink transition-colors duration-200 hover:text-[#39FF14]"
                    />
                    <span className="text-lg text-white">YouTube</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-6">
                  <Link
                    target="_blank"
                    href={
                      "https://www.linkedin.com/in/council-of-technical-affairs-jklu/"
                    }
                    className="flex items-center space-x-6"
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
          <div className="bg-black bg-opacity-60 border border-neon-green rounded-lg p-2 md:p-6 text-center shadow-lg hover:shadow-neon-green mt-12">
            <h3 className="text-2xl font-bold DinoGame mb-4">Email Us</h3>
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

          <div className="space-y-8">
            <h2
              className={`text-3xl md:text-4xl xl:text-5xl text-center font-bold text-white DinoGame shadow-md cursor-pointer hover:text-neon-green heading-text`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {displayText}
            </h2>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
