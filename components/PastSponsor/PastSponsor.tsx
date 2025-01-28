"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../Header/Header";

interface Sponsor {
  name: string;
  photo: string;
  website: string;
}

const SponsorAnimation = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const response = await import("../../data/pastsponsors.json");
      setSponsors(response.default || []);
    };

    fetchSponsors();
  }, []);

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className="relative w-full h-80 overflow-hidden bg-transparent-100 flex flex-col items-center">
      <Header text="Past Partners" />
      <motion.div
className="flex gap-4 py-20 absolute left-0"
initial={{ x: "0%" }}
animate={{ x: "-50%" }}
whileHover={{ x: "0%" }}
transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
    repeatType: "loop"
        }}
      >
        {duplicatedSponsors.map((sponsor, idx) => (
          <div
            key={`${sponsor.name}-${idx}`}
            className="flex-shrink-0 w-[150px] flex items-center px-4"
          >
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <Image
                src={sponsor.photo}
                alt={sponsor.name}
                width={150}
                height={150}
                className="w-40 h-auto object-contain p-2 rounded"
              />
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SponsorAnimation;