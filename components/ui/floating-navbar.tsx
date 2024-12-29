"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-[80%] navbar fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-6 py-2 items-center justify-between space-x-8", 
        className
      )}
    >
      <div className="flex items-center space-x-1">
        <img
          src="/hackjklu-logo.png"
          alt="Hack JKLU Logo"
          className="h-12 pl-8 logo"
        />
        <h1 className="logo-heading text-4xl pl-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
          HackJKLU
        </h1>
      </div>

      <div className="flex space-x-8">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-bold neon-glow">{navItem.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
