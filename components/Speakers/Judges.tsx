"use client";

// import Image from "next/image";
// import data from "../../data/judges.json";
import Carousel from "../Carousel/Carousel";
import Header from "../Header/Header";

const Judges: React.FC = () => {
  return (
    // <section className="pt-5 sm:pt-10 relative" id="judges">
    <section className="mx-5 pt-10 relative" id="judges">
      <h2 className="text-center my-5 sm:my-10">
        <Header text="Judges & Mentors" />
      </h2>

      <Carousel images={[{ src: "/reveal.webp" }]} />

      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-8 px-5 md:px-8">
        {data.map(({ name, linkedin, photo, role }) => (
          <div
            key={name}
            className="flex flex-col items-center text-center justify-center p-2 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-lg neon-card fade-in pulse"
            style={{
              background: "transparent",
              border: "2px solid rgba(61, 214, 31, 0.8)",
              boxShadow: "0 0 15px rgba(0,0,0), 0 0 30px rgba(0,0,0,0)",
            }}
          >
            <a
              href={linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedin ? `Visit ${name}'s LinkedIn profile` : `LinkedIn unavailable`}
            >
              <div
                className="relative w-32 h-32 overflow-hidden rounded-full neon-border"
                style={{
                  border: "3px solid rgba(0,0,0)",
                  boxShadow: "0 0 10px rgba(0,0,0), 0 0 20px rgba(0,0,0)",
                  margin: "0.5rem",
                }}
              >
                <Image
                  src={photo}
                  alt={name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </a>
            <div className="flex flex-col mt-4">
              <p className="font-bold text-xl sm:text-2xl mb-2 neon-text text-white">
                {name}
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-[#f0edeb]">
                {role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes flicker {
          0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: 0.99;
            filter: drop-shadow(0 0 1px #10dc3c) drop-shadow(0 0 3px #10dc3c) drop-shadow(0 0 10px #10dc3c);
          }
          21%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.4;
            filter: none;
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .neon-text {
          animation: flicker 3s linear infinite;
        }

        .glitch {
          animation: glitch 0.3s linear infinite;
          animation-play-state: running;
        }
      `}</style> */}
    </section>
  );
};

export default Judges;
