import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Images
import galleryPageSticker from "@/public/yetToDisclose/gallerySticker.webp";
import faqsPageSticker from "@/public/yetToDisclose/faqsSticker.webp";
import humansPageSticker from "@/public/yetToDisclose/humansSticker.webp";

// Redirecting Data Array
const redirectingData = [
  {
    title: "Gallery",
    link: "/gallery",
    image: galleryPageSticker,
  },
  {
    title: "FAQS",
    link: "/faq",
    image: faqsPageSticker,
  },
  {
    title: "Humans",
    link: "/humans",
    image: humansPageSticker,
  },
];

// Props Interface for Redirecting Card Component
interface RedirectCardsProps {
  title: string;
  link: string;
  image: StaticImageData;
}

// RedirectingCard Component
const RedirectingCard = ({ title, link, image }: RedirectCardsProps) => {
  return (
    <a href={link} className="block">
      <div className="bg-[#333333] rounded-[22px] flex flex-col gap-2 items-center justify-center p-[16px] shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image src={image} alt={title} className="w-24 sm:w-36 lg:w-48" />
        <div className="text-white text-base sm:text-xl lg:text-[40px] font-bold">
          {title}
        </div>
      </div>
    </a>
  );
};

// YetToBeDisclosed Component
const YetToBeDisclosed: React.FC = () => {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 lg:py-20">
      <div className="relative w-full max-w-[900px] mx-auto border-2 sm:border-4 border-dashed border-white rounded-lg p-4 sm:p-8 lg:p-12">
        <div className="flex flex-col gap-6 items-center justify-center">
          {/* Title */}
          <div className="text-white text-2xl sm:text-4xl lg:text-[64px] page-title font-black text-center">
            Yet to be disclosed
          </div>
          {/* Subtitle */}
          <div className="text-supporting-mediumGray text-sm sm:text-base lg:text-[24px] font-medium text-center leading-snug">
            These details are not yet disclosed, so stay sharp.
          </div>
          {/* Heading */}
          <div className="text-white text-lg sm:text-xl lg:text-[32px] font-bold">
            Meanwhile,
          </div>
          {/* Subheading */}
          <div className="text-supporting-mediumGray text-sm sm:text-base lg:text-[24px] mb-6 lg:mb-10 font-medium text-center">
            Why don't you check these out!
          </div>
          {/* Redirecting Cards */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-[44px]">
            {redirectingData.map((data) => (
              <RedirectingCard
                key={data.title}
                title={data.title}
                link={data.link}
                image={data.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YetToBeDisclosed;
