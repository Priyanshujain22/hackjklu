'use client';

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import navData from "../../data/navbar.json";

const press_start_2p = Press_Start_2P({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  preload: true,
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => setIsScrolled(window.scrollY > 80);
  }

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 border-b-2 border-green-500" : ""}`}>
      <div className="flex justify-between items-center p-4">
        <a href="/" className="flex items-center space-x-2">
          <Image src="/hackjklu-logo.webp" alt="Hack JKLU Logo" width={40} height={40} />
          <span className={`text-xl font-bold text-white ${press_start_2p.className}`}>
            <span className="text-neonBlue">Hack</span>
            <span className="text-neonGreen">JKLU</span> v4.0
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navData.map(({ link, name }, idx) => (
            <a key={idx} href={link} className="text-white hover:text-gray-300 font-bold">
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        {!isSidebarOpen && <button onClick={toggleSidebar} className="lg:hidden text-white" aria-label="Toggle menu">
          <HiOutlineMenuAlt3 size={40} />
        </button>}
      </div>

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-0 bg-black/90 text-white transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-40 flex flex-col pt-5`}>
        <div className="flex justify-between items-center w-full px-5">
          <a href="/" className={`text-xl font-bold text-white ${press_start_2p.className}`}>
            <span className="text-neonBlue">Hack</span>
            <span className="text-neonGreen">JKLU</span> v4.0
          </a>
          <button onClick={toggleSidebar} className="text-white" aria-label="Toggle menu">
            <RxCross2 size={40} />
          </button>
        </div>

        <nav className="flex flex-col items-center mt-10 space-y-6">
          {navData.map(({ link, name }, idx) => (
            <a key={idx} href={link} className="text-2xl" onClick={toggleSidebar}>
              {name}
            </a>
          ))}
        </nav>
      </aside>
    </nav>
  );
};

export default Navbar;
