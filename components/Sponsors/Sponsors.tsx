import React from 'react';
import Image, { StaticImageData } from "next/image";
import SponsorCard from "@/components/SponsorCard";
import sponsorsJson from "@/data/sponsors.json";

import devfolio from "@/public/sponsors/devfolio.webp";
import ethindia from "@/public/sponsors/ethindia.webp";
import polygon from "@/public/sponsors/polygon.webp";
import wscubeTech from "@/public/sponsors/WsCubeTech.webp";

import Header from '../Header/Header';
import HeaderSmall from '../HeaderSmall/HeaderSmall';

const imageMap: { [key: string]: StaticImageData } = {
  "/sponsors/devfolio.webp": devfolio,
  "/sponsors/ethindia.webp": ethindia,
  "/sponsors/polygon.webp": polygon,
};

const sponsorsData = sponsorsJson.map((sponsor, index) => ({
  ...sponsor,
  sponsorimgsrc: imageMap[sponsor.sponsorimgsrc],
  index,
}));


const WSCubeTechSponsorCard: React.FC = () => {
  return (
    <a
      href="/sponsors/ws-cube-tech"
      className="w-full xl:max-w-[95%] flex justify-center md:px-8 lg:px-0"
    >
      <div className="flex flex-col md:flex-row">
        <Image
          className="w-full md:w-[300px] lg:w-[350px] xl:w-[42%] rounded-t-[20px] 
              md:rounded-r-none md:rounded-l-[20px]"
          src={wscubeTech}
          alt="wscubeTech"
          style={{ objectFit: "contain" }}
        />
        <div
          className="flex flex-col mt-8 md:mt-0 ml-0 md:ml-10 justify-center items-start bg-[#0834d8] px-4 
              xl:px-8 py-8 md:p-[40px] gap-2 rounded-b-[20px] md:rounded-l-none 
              md:rounded-r-[20px]"
        >
          <div className="w-full flex justify-between items-center">
            <p className="font-black w-full text-white text-center text-[2rem] xl:text-[4rem]">
              WS CubeTech
            </p>
          </div>
          <p className="text-supporting-mediumGray font-medium text-[1rem] md:text[1.125rem]">
            The MX Master Series is expertly designed for users, empowering
            coders to unleash productivity.
          </p>
        </div>
      </div>
    </a>
  );
};

const Sponsors: React.FC = () => {
  return (
    <section className="relative pt-20" id="partners">
      <h2 className="text-center mb-10">
        <Header text="Partners" />
      </h2>

      {/* Pre Hackathon Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Pre Hackathon Partners" />
        <div className="w-full flex mt-8 flex-col items-center gap-8 xl:gap-12">
          <WSCubeTechSponsorCard />
        </div>

      </div>

      {/* Gold Sponsors */}
      {/* <div className="p-10 text-center">
        <HeaderSmall text="Gold" />
      </div> */}

      {/* Silver Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Silver Sponsors" />
        <div
          className="w-full grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[44px] md:px-8 lg:px-10"
        >
          {sponsorsData.map((sponsor) => (
            <SponsorCard key={sponsor.index} {...sponsor} />
          ))}
        </div>
      </div>

      {/* Bronze Sponsors */}
      {/* <div className="p-10 text-center">
        <HeaderSmall text="Bronze" />
      </div> */}

    </section>
  );
};

export default Sponsors;
