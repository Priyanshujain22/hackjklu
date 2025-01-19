"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import DinoGame from "@/components/chromeDino/chromeDino";


const Footer: React.FC = () => {
    return (
        <footer
            className={`text-white`}
        >
            <DinoGame />
        </footer>
    );
};

export default Footer;
