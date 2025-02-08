"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface SponsorCardProps {
  index: number;
  sponsor: string;
  category: string;
  sponsorimgsrc: StaticImageData;
  site: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  index,
  sponsor,
  category,
  sponsorimgsrc,
  site,
}) => {
  const defaultBgColor = "#262626";
  // const defaultTextColor = "#BBBBBB";
  const sponsorColor: {
    [key in SponsorCardProps["category"]]: {
      bgColor: string;
      textColor: string;
    };
  } = {
    "Gold Sponsor": {
      bgColor: "#4E3E1D",
      textColor: "#FFDC96",
    },
    "Silver Sponsor": {
      bgColor: "#3A3A3A",
      textColor: "#BBBBBB",
    },
    "Bronze Sponsor": {
      bgColor: "#463026",
      textColor: "#E49977",
    },
  };

  const bgColor = sponsorColor[category]?.bgColor ?? defaultBgColor;
  // const textColor = sponsorColor[category]?.textColor ?? defaultTextColor;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <a href={site} target="_blank" rel="noreferrer" key={index}>
        <div className="w-full text-white hover:scale-105 duration-300 border border-neonGreen rounded-[20px]">
          <div className="w-full h-[161px] xl:h-[186px] flex items-center justify-center overflow-hidden relative p-10">
            <Image
              src={sponsorimgsrc}
              fill
              className="rounded-t-[20px] outline-none"
              alt={sponsor}
              style={{ objectFit: "contain", padding: "20px" }}
            />
          </div>


          <div
            className="flex justify-between items-start p-[22px] rounded-b-[20px]"
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex flex-col w-full text-center">
              <p className="sm:text-[28px] text-xl font-white">{sponsor}</p>
              {/* <p
                className="sm:text-[18px] text-xl leading-9 font-bold"
                style={{ color: textColor }}
              >
                {category}
              </p> */}
            </div>

          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default SponsorCard;





// import { cn } from "@/lib/utils";


// const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
//         className
//       )}
//     >
//       <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
//         <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
//         <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
//         <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
//         <div className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></div>
//         <div className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"></div>
//         <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
//       </div>

//       <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
//         {children}
//       </div>
//     </div>
//   );
// };
