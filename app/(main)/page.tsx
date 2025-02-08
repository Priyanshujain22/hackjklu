import dynamic from 'next/dynamic';

import Hero from '@/components/Hero/Hero';
import About from "@/components/About/About";
import Theme from '@/components/Theme/Theme';

const RetroPrizesSection = dynamic(() => import('@/components/Prizes/Prizes'));
const Sponsors = dynamic(() => import('@/components/Sponsors/Sponsors'));
const Itenary = dynamic(() => import('@/components/Itenary/Itenary'));
const GalleryHome = dynamic(() => import('@/components/Gallery/GalleryHome'));
const WhoShouldApply = dynamic(() => import('@/components/WhoShouldApply/WhoShouldApply'));
const Speakers = dynamic(() => import('@/components/Speakers/Speakers'));
const Judges = dynamic(() => import('@/components/Judges/Judges'));
const FAQ = dynamic(() => import('@/components/FAQ/FAQ'));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HackJKLU v4.0 - Official Website",
  description: "HackJKLU v4.0 is a high-energy offline hackathon happening from March 7-9, 2025, at JK Lakshmipat University. Compete for cash prizes worth up to Rs. 2,00,000!",
  keywords: [
    "Hackathon", "JK Lakshmipat University", "HackJKLU", "Coding", "Tech", 
    "Competition", "Cash Prizes", "Devfolio", "Web Development", 
    "Cyber Security", "AI/ML", "IoT", "Game Development", "AR/VR"
  ],
  authors: [{ name: "Council of Technical Affairs, JKLU" }],
  openGraph: {
    title: "HackJKLU v4.0 - Official Website",
    description: "Join HackJKLU v4.0, a dynamic offline hackathon from March 7-9, 2025, with cash prizes and the chance to showcase your tech skills!",
    url: "https://www.hackjklu.com",
    type: "website",
  },
  twitter: {
    title: "HackJKLU v4.0 - Official Website",
    description: "HackJKLU v4.0 is a high-energy, offline hackathon with exciting prizes and opportunities for college students, school students, and tech enthusiasts!",
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Theme />
      <RetroPrizesSection />
      <Sponsors />
      <WhoShouldApply />
      <Itenary />
      <Speakers />
      <Judges />
      <GalleryHome />
      <FAQ />
    </>
  );
}