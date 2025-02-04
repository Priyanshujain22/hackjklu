import Image from "next/image";
import SponsorCard from "@/components/SponsorCard";

import logitech from "@/public/sponsors/devfolio.png";
// Sponsors
import mlh from "@/public/sponsors/devfolio.png";
import github from "@/public/sponsors/devfolio.png";
import postman from "@/public/sponsors/devfolio.png";
import bobble from "@/public/sponsors/devfolio.png";
import godspeed from "@/public/sponsors/devfolio.png";
import devfolio from "@/public/sponsors/devfolio.png";
import virtualProtocol from "@/public/sponsors/devfolio.png";
import nextgen from "@/public/sponsors/devfolio.png";
import auth0 from "@/public/sponsors/devfolio.png";
import taipy from "@/public/sponsors/devfolio.png";
import godaddy from "@/public/sponsors/devfolio.png";

const normalSponsorsData = [
  {
    sponsor: "MLH",
    category: "Platform Partner",
    sponsorimgsrc: mlh,
    site: "https://mlh.io",
  },
  {
    sponsor: "GitHub",
    category: "Gold Sponsor",
    sponsorimgsrc: github,
    site: "https://gh.io/hackbyte2",
  },
  {
    sponsor: "Postman",
    category: "Gold Sponsor",
    sponsorimgsrc: postman,
    site: "https://community.postman.com",
  },
  {
    sponsor: "Bobble Fan Store",
    category: "Merch Partner",
    sponsorimgsrc: bobble,
    site: "https://fanstore.bobble.ai",
  },
  {
    sponsor: "Godspeed Systems",
    category: "Silver Sponsor",
    sponsorimgsrc: godspeed,
    site: "https://godspeed.systems",
  },
  {
    sponsor: "Devfolio",
    category: "Platform Partner",
    sponsorimgsrc: devfolio,
    site: "https://devfolio.co",
  },
  {
    sponsor: "Virtual Protocol",
    category: "Bronze Sponsor",
    sponsorimgsrc: virtualProtocol,
    site: "https://www.virtuals.io/",
  },
  {
    sponsor: "NextGen",
    category: "Bronze Sponsor",
    sponsorimgsrc: nextgen,
    site: "https://nextgenglobalhub.github.io/opensourcecohort/",
  },
  {
    sponsor: "Auth0",
    category: "Track Sponsor",
    sponsorimgsrc: auth0,
    site: "http://hackp.ac/auth0",
  },
  {
    sponsor: "Taipy",
    category: "Track Sponsor",
    sponsorimgsrc: taipy,
    site: "https://hackp.ac/taipy-gettingstarted",
  },
  {
    sponsor: "Go Daddy Registry",
    category: "Track Sponsor",
    sponsorimgsrc: godaddy,
    site: "http://hackp.ac/godaddyregistry",
  },
];

const TitleSponsorCard: React.FC = () => {
  return (
    <a
      href="https://www.logitech.com/en-in/mx/master-series.html"
      target="_blank"
      rel="noreferrer"
      className="w-full xl:max-w-[95%] monitor:max-w-[90%] flex justify-center md:px-8 lg:px-0"
    >
      <div className="flex flex-col md:flex-row">
        <Image
          className="w-full md:w-[300px] lg:w-[350px] xl:w-[42%]  rounded-t-[20px] 
              md:rounded-r-none md:rounded-l-[20px]"
          src={logitech}
          alt="Logitech"
          placeholder="blur"
        />
        <div
          className="flex flex-col justify-center items-start bg-[#4E2529] px-4 
              xl:px-8 py-8 md:p-[40px] gap-2 rounded-b-[20px] md:rounded-l-none 
              md:rounded-r-[20px]"
        >
          <p className="text-[#FF939E] font-bold text-[1.25rem] md:text-[1.5rem]">
            Title Sponsor
          </p>
          <div className="w-full flex justify-between items-center">
            <p className="font-black text-white text-[2rem] xl:text-[4rem]">
              Logitech
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
    <>
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
            {normalSponsorsData.map((sponsor, index) => {
              return <SponsorCard key={index} index={index} {...sponsor} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersPage;
