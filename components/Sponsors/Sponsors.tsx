import React from 'react';
import HeaderSmall from '../HeaderSmall/HeaderSmall';
import { Button } from "../ui/MovingBorders";
import Image from 'next/image';
import sponsors from '@/data/sponsors.json';
import Header from '../Header/Header';

// Define TypeScript types for the sponsor data structure
interface Sponsor {
  name: string;
  photo: string;
  website: string;
}

interface SponsorsData {
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
}

// Cast imported JSON data to the `SponsorsData` type
const sponsorsData: SponsorsData = sponsors as SponsorsData;

const renderCards = (data: Sponsor[]) => {
  return (
    <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((card, index) => (
        <Button
          key={index}
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: "rgba(0,0,0,0)",
            borderRadius: `calc(1.75rem * 0.96)`,
          }}
          className="text-white border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image
              src={card.photo}
              alt={card.name}
              className="lg:w-32 md:w-20 w-16 "
              width={128}
              height={128}
            />
          </div>
        </Button>
      ))}
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <section className="relative pt-20" id="sponsors">
      <h2 className="text-center mb-10">
        <Header text="Sponsors" />
      </h2>

      {/* Pre Hackathon Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Pre Hackathon Sponsors" />
        <div className="flex justify-center">{renderCards(sponsorsData.gold)}</div>
      </div>

      {/* Gold Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Gold" />
        <div className="flex justify-center">{renderCards(sponsorsData.gold)}</div>
      </div>

      {/* Silver Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Silver" />
        <div className="flex justify-center">{renderCards(sponsorsData.silver)}</div>
      </div>

      {/* Bronze Sponsors */}
      <div className="p-10 text-center">
        <HeaderSmall text="Bronze" />
        <div className="flex justify-center">{renderCards(sponsorsData.bronze)}</div>
      </div>
    </section>
  );
};

export default Sponsors;
