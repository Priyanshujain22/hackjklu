"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconFlag, IconCalendar, IconUser, IconPhoto, IconUsers } from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "HOME",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "CHALLENGES",
      link: "/challenges",
      icon: <IconFlag className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "ITINERARY & EVENTS",
      link: "/itinerary-events",
      icon: <IconCalendar className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "ABOUT",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "GALLERY",
      link: "/gallery",
      icon: <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "TEAM",
      link: "/team",
      icon: <IconUsers className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
};

const DummyContent = () => {
  return (
    <div>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};

export default Navbar;
