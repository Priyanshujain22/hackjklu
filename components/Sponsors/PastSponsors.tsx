import React from 'react';
import { Button } from "../ui/MovingBorders";
import Header from '../Header/Header';
import Image from 'next/image';
import sponsors from '@/data/sponsors.json';

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

const PastSponsors: React.FC = () => {
  // Cast imported JSON data to the SponsorsData type
  const sponsorsData: SponsorsData = sponsors as SponsorsData;

  // Combine all sponsors into a single array
  const allSponsors = [
    ...sponsorsData.gold,
    ...sponsorsData.silver,
    ...sponsorsData.bronze
  ];

  return (
    <section className="pt-10 relative" id="pastSponsors">
      <h2 className="text-center my-10">
        <Header text="Past Sponsors" />
      </h2>

      <div className="w-full mt-12 p-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {allSponsors.map((sponsor, index) => (
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
                  src={sponsor.photo}
                  alt={sponsor.name}
                  className="lg:w-32 md:w-20 w-16"
                  width={128}
                  height={128}
                />
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastSponsors;