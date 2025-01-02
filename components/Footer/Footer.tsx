"use client";
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer
            className={`bg-[#000000c6] mt-[1rem] md:mt-[2rem] text-white p-5 md:p-8`}
        >
            <div className="md:mx-[3rem]">
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div className="w-full md:w-50% lg:40% flex flex-col">
                        <button
                            className={cn(
                                "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                                styles.registrationsButton
                            )}
                        >
                            Registrations Started
                        </button>

                        <NextLink href="/" passHref>
                            <p
                                className={cn(
                                    `text-[0.9rem] mt-[2rem] my-[1rem] md:text-[1.2rem] text-gray-600 hover:text-gray-500 hover:underline`,
                                    styles.neonglow
                                )}
                            >
                                Code of conduct
                            </p>
                        </NextLink>
                        <NextLink href="/" passHref>
                            <p
                                className={cn(
                                    `text-[0.9rem] md:text-[1.2rem] text-gray-600 hover:text-gray-500 hover:underline`,
                                    styles.neonglow
                                )}
                            >
                                Terms & Conditions
                            </p>
                        </NextLink>

                        <div className="mt-[2rem] md:mr-[7rem] mb-[2rem]">
                            <h4
                                className={cn(
                                    "text-[1rem] md:text-[1.5rem] text-[#10dc3c] mb-[0.5rem] md:mb-[1.5rem]",
                                    styles.glow,
                                    styles.Underline
                                )}
                            >
                                ADDRESS
                            </h4>
                            <p className="text-[0.7rem] md:text-[1.1rem] font-thin">
                                JK LAKSHMIPAT UNIVERSITY, P.O. 302 026, MAHAPURA
                                RD, NEAR MAHINDRA SEZ, MAHAPURA, RAJASTHAN
                                302026
                            </p>
                        </div>
                        <div className="my-4">
                            <h4
                                className={cn(
                                    "text-[1rem] md:text-[1.5rem] text-[#10dc3c] font-base mb-[0.5rem] md:mb-[1.5rem]",
                                    styles.glow,
                                    styles.Underline
                                )}
                            >
                                CONTACT INFO
                            </h4>
                            <br />
                            <a
                                className="md:mb-[0.5rem] text-[0.7rem] md:text-[1.2rem] font-thin"
                                href="mailto:counciloftechnicalaffairs@jklu.edu.in"
                            >
                                Email: counciloftechnicalaffairs@jklu.edu.in
                            </a>
                            <p className="md:mb-[1rem] text-[0.7rem] md:text-[1.2rem] font-thin">
                                Sponsorship: +91 XXXXX XXXXX (abc)
                                <br />
                                Registrations: +91 XXXXX XXXXX (xyz)
                            </p>
                            Follow us:{" "}
                            <a
                                href="/"
                                className={cn(
                                    "text-white  text-[0.8rem] md:text-[1.1rem] my-[1rem]",
                                    styles.neonglowFound
                                )}
                            >
                                @hackjklu_v4.0
                            </a>
                        </div>
                    </div>
                    <br />

                    <div className="w-full md:w-50% lg:w-50%">
                        <div className={cn(styles.neonBorder)}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.117070008914!2d75.64722912457951!3d26.836228513374916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4af4fe68f403%3A0x3bf05f95df22b8c4!2sJK%20Lakshmipat%20University!5e0!3m2!1sen!2sin!4v1695563431231!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                className="relative w-full h-[15rem] md:h-[15rem] md:w-[25rem] lg:h-[25rem] lg:w-[45rem] rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <br />

                <div className="flex flex-col md:flex-row justify-between items-center mt-8">
                    <div className="flex flex-row items-center">
                        <Image
                            src="/hackjklu-logo.png"
                            alt="Hack JKLU Logo"
                            width={56}
                            height={56}
                            className={cn(styles.logo)}
                        />
                        <h1
                            className={cn(
                                styles.logoHeading,
                                "text-5xl pl-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                            )}
                        >
                            HackJKLU
                        </h1>
                    </div>
                    <p className="my-[1rem] text-[0.7rem] md:text-base mx-auto">
                        &copy; 2025 HackJKLU. All rights reserved.
                    </p>
                    <div>
                        <span className="text-gray-400 text-[0.7rem] md:text-sm">
                            Made with ❤️ by{" "}
                        </span>
                        <NextLink href="/" target="_blank" passHref>
                            <span className="text-gray-400 text-[0.7rem] md:text-sm">
                                abc
                            </span>
                        </NextLink>
                        <span className="text-gray-400 text-[0.7rem] md:text-sm">
                            {" "}
                            &{" "}
                        </span>
                        <NextLink href="/">
                            <span className="text-gray-400 text-[0.7rem] md:text-sm">
                                xyz
                            </span>
                        </NextLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
