"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "../Navbar/Navbar.module.css";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
  isScrolled,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
  isScrolled: boolean;
}) => {
  return (
    <div
      className={cn(
        styles.navbar,
        "fixed top-0 w-full flex items-center justify-between space-x-8 transition-all duration-300",
        {
          [styles.scrolled]: isScrolled,
        },
        className
      )}
    >
      <div className={cn(styles.logoContainer, "flex items-center space-x-1")}>
        <Image
          src="/hackjklu-logo.png"
          alt="Hack JKLU Logo"
          width={48}
          height={48}
          className={cn(styles.logo, "h-12 pl-0")}
        />
        <h1
          className={cn(
            "",
            "text-2xl lg:text-4xl pl-2 font-extrabold text-[#10dc3c]"
          )}
        >
          HackJKLU v4.0
        </h1>
      </div>

      <div className={cn(styles.navLinks, "flex space-x-8")}>
        {navItems.map((navItem, idx) => (
          <Link
            key={idx}
            href={navItem.link}
            className={cn(
              styles.navLink,
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span
              className={cn(
                styles.neonglow,
                styles.shareTechMonoRegular,
                "hidden sm:block text-sm font-bold neon-glow"
              )}
            >
              {navItem.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
