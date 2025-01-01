"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { FloatingNav } from "../ui/floating-navbar";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { width } = useWindowDimensions(); 

  const navItems = [
    { name: "HOME", link: "/" },
    { name: "CHALLENGES", link: "/challenges" },
    { name: "EVENTS", link: "/events" },
    { name: "GALLERY", link: "/gallery" },
    { name: "TEAM", link: "/team" },
  ];

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
      {width >= 768 ? (
        <FloatingNav navItems={navItems} isScrolled={isScrolled} />
      ) : (
        <>
          <div
            className={`fixed top-0 w-full bg-[rgba(0,0,0,0.6)] text-white z-50 flex justify-between items-center p-4 ${ isScrolled ? "border-b-[#10dc3c] border-b-2" : "" }`}
          >
            <div className="flex items-center space-x-2">
              <img
                src="/hackjklu-logo.png"
                alt="Hack JKLU Logo"
                className="h-10"
              />
              <h1 className="text-2xl font-bold text-[#10dc3c]">
                Hack JKLU v4.0
              </h1>
            </div>

            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-white"
            >
              {!isSidebarOpen ? <Menu size={32} /> : <X size={32} />
              }
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-20 w-full bg-[rgba(0,0,0,0.6)] text-white h-full z-30 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="flex flex-col space-y-6 p-4 items-center ">
              {navItems.map((item, index) => (
                <a key={index} href={item.link} className="block text-2xl">
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
