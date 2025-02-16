import React from 'react';
import Image, { StaticImageData } from "next/image";
import SponsorCard from "@/components/SponsorCard";

// Import sponsor data for each category
// import sponsorsGold from "@/data/sponsorsGold.json";
import sponsorsSilver from "@/data/sponsorsSilver.json";
// import sponsorsBronze from "@/data/sponsorsBronze.json";

import devfolio from "@/public/sponsors/devfolio.webp";
import ethindia from "@/public/sponsors/ethindia.webp";
import polygon from "@/public/sponsors/polygon.webp";
import wscubeTech from "@/public/sponsors/WsCubeTech.webp";

import Header from '../Header/Header';
import HeaderSmall from '../HeaderSmall/HeaderSmall';

const imageMap: { [key: string]: StaticImageData } = {
  "Devfolio": devfolio,
  "EthIndia": ethindia,
  "Polygon": polygon,
};

interface Sponsor {
  sponsor: string;
  site: string;
  category: string;
}

const mapSponsors = (sponsors: Sponsor[]) => {
  return sponsors.map((sponsor, index) => ({
    ...sponsor,
    sponsorimgsrc: imageMap[sponsor.sponsor],
    index,
  }));
};


// Map sponsor data for each category
// const goldSponsors = mapSponsors(sponsorsGold);
const silverSponsors = mapSponsors(sponsorsSilver);
// const bronzeSponsors = mapSponsors(sponsorsBronze);

const WSCubeTechSponsorCard: React.FC = () => {
  return (
    <a
      href="/partners/ws-cube-tech"
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
            WS Cube Tech is a leading provider of IT training and services, empowering individuals and businesses
            with cutting-edge skills and solutions.
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
        <HeaderSmall text="Pre-Hackathon Partner" />
        <div className="w-full flex mt-8 flex-col items-center gap-8 xl:gap-12">
          <WSCubeTechSponsorCard />
        </div>
      </div>

      {/* Gold Sponsors */}
      {/* <div className="p-10 text-center">
        <HeaderSmall text="Gold Sponsors" />
        <div
          className="w-full grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[44px] md:px-8 lg:px-10"
        >
          {goldSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.index} {...sponsor} />
          ))}
        </div>
      </div> */}

      {/* Silver Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Silver Sponsors" />
        <div
          className="w-full grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[44px] md:px-8 lg:px-10"
        >
          {silverSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.index} {...sponsor} />
          ))}
        </div>
      </div>

      {/* Bronze Sponsors */}
      {/* <div className="p-10 text-center">
        <HeaderSmall text="Bronze Sponsors" />
        <div
          className="w-full grid grid-cols-1 mt-8 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[44px] md:px-8 lg:px-10"
        >
          {bronzeSponsors.map((sponsor) => (
            <SponsorCard key={sponsor.index} {...sponsor} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Sponsors;
