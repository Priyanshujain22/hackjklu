import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { FloatingNav } from "../ui/floating-navbar";
import navData from "../../data/navbar.json";
import { Press_Start_2P } from "next/font/google";

const press_start_2p = Press_Start_2P({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowDimensions();

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`relative w-full transition-all duration-300 ${isScrolled ? "scrolled" : ""}`}
    >
      {width >= 1024 ? (
        <FloatingNav navItems={navData} isScrolled={isScrolled} />
      ) : (
        <>
          <div
            className={`fixed top-0 w-full text-white z-50 flex justify-between items-center p-4 ${isScrolled ? "border-b-[#10dc3c] border-b-2 bg-[rgba(0,0,0,0.6)]" : ""} ${isSidebarOpen ? "bg-[rgba(0,0,0,0.9)]" : ""} `}
          >
            {/* Logo and Text as Link to Homepage */}
            <div className={`flex items-center space-x-2`}>
              {/* Wrapping Image with Link */}
              <a href="/">
                <Image
                  src="/hackjklu-logo.png"
                  alt="Hack JKLU Logo"
                  width={40}
                  height={40}
                  className="h-10"
                />
              </a>
              {/* Wrapping text with Link */}
              <a href="/">
                <h1 className={` ${press_start_2p.className} text-lg font-bold text-white`}>
                  <span className="text-neonBlue">Hack</span><span className="text-neonGreen">JKLU</span> v4.0
                </h1>
              </a>
            </div>

            <button onClick={toggleSidebar} className="lg:hidden p-2 text-white">
              {!isSidebarOpen ? <Menu size={32} /> : <X size={32} />}
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-20 w-full bg-[rgba(0,0,0,0.9)] text-white h-full z-30 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex flex-col space-y-6 p-4 items-center">
              {navData.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block text-2xl"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
