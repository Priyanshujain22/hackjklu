

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
        <Image src={image} alt={title} className="w-48" />
        <div className="text-white lg:text-[40px] text-xl font-bold">{title}</div>
      </div>
    </a>
  );
};

// YetToBeDisclosed Component
const YetToBeDisclosed: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-16 mt-4">
      <div className="text-white lg:text-[64px] text-2xl page-title font-black">
        Yet to be disclosed
      </div>
      <div className="text-supporting-mediumGray text-base md:text-lg lg:text-[24px] font-medium text-center">
        These details are not yet disclosed, so stay sharp.
      </div>
      <div className="text-white lg:text-[32px] text-xl font-bold">Meanwhile,</div>
      <div className="text-supporting-mediumGray lg:text-[24px] lg:mb-[40px] mb-4 font-medium">
        why don't you check these out!
      </div>
      <div className="flex md:flex-row flex-col gap-4 lg:gap-[44px]">
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
  );
};

export default YetToBeDisclosed;
