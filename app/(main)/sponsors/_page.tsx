import Image, { StaticImageData } from "next/image";
import SponsorCard from "@/components/SponsorCard";
import sponsorsJson from "@/data/sponsors.json";

import devfolio from "@/public/sponsors/devfolio.png";
import ethindia from "@/public/sponsors/ethindia.png";
import polygon from "@/public/sponsors/polygon.png";
import wscubeTech from "@/public/sponsors/devfolio.png";


const imageMap: { [key: string]: StaticImageData } = {
  "/sponsors/devfolio.png": devfolio,
  "/sponsors/ethindia.png": ethindia,
  "/sponsors/polygon.png": polygon,
};

const sponsorsData = sponsorsJson.map((sponsor, index) => ({
  ...sponsor,
  sponsorimgsrc: imageMap[sponsor.sponsorimgsrc],
  index,
}));

const TitleSponsorCard: React.FC = () => {
  return (
    <a
      href="https://www.wscubeTech.com/en-in/mx/master-series.html"
      target="_blank"
      rel="noreferrer"
      className="w-full flex justify-center md:px-8 lg:px-0"
    >
      <div className="flex flex-col md:flex-row">
        <Image
          className="w-full md:w-[300px] lg:w-[350px] xl:w-[42%] rounded-t-[20px] 
              md:rounded-r-none md:rounded-l-[20px]"
          src={wscubeTech}
          alt="wscubeTech"
          placeholder="blur"
          style={{ objectFit: "contain" }}
        />
        <div
          className="flex flex-col justify-center items-start bg-[#4E2529] px-4 
              xl:px-8 py-8 md:p-[40px] gap-2 rounded-b-[20px] md:rounded-l-none 
              md:rounded-r-[20px]"
        >
          <p className="text-[#FF939E] font-bold text-[1.25rem] md:text-[1.5rem]">
            Pre Hackathon Partner
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="font-black text-white text-[2rem] xl:text-[4rem]">
              WS CubeTech
            </p>
          </div>
          <p className="text-supporting-mediumGray font-medium text-[1rem] md:text[1.125rem]">
            The MX Master Series is expertly designed for users, empowering
            coders to unleash productivity and optimize performance during
            intense coding marathons.
          </p>
        </div>
      </div>
    </a>
  );
};

const PartnersPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen lg:gap-[20px] 3xl:gap-[88px]
          lg:px-16 xl:px-28 lg:pb-[92px] pt-[48px] px-4 relative"
    >
      <div className="w-full flex flex-col items-center gap-8 xl:gap-12">
        <TitleSponsorCard />
        <div
          className="w-full xl:max-w-[95%] monitor:max-w-[90%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                gap-8 lg:gap-[44px] md:px-8 lg:px-0"
        >
          {sponsorsData.map((sponsor) => (
            <SponsorCard key={sponsor.index} {...sponsor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
