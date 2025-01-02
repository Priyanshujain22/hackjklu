"use client";

import React from "react";
import itineraryData from "../../data/itinerary.json";
// import styles from "./Itenary.module.css";

interface TimelineEvent {
  time: string;
  event: string;
}


interface ItineraryData {
  day1Events: TimelineEvent[];
  day2Events: TimelineEvent[];
  day3Events: TimelineEvent[];
}

const Itenary = () => {
  const { day1Events, day2Events, day3Events } = itineraryData as ItineraryData;

  return (
    <section>
      <div
        className={`mx-[1rem] my-[3rem] min-h-screen`}
        id="itinerary-section"
      >
        <div className="container mx-auto">
          <h1
            className={`mb-4 text-center text-[2rem] md:text-[4rem]`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, #cf3a33 5.87%, #f6982f 59.11%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            ITINERARY
          </h1>
          <div className={`grid grid-cols-1 gap-8 md:grid-cols-3`}>
            <div>
              <div className="rounded-xl border-2 border-gray-500">
                <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
                  Day 1
                </h2>
                <Timeline
                  events={day1Events}
                  highlightEvents={[
                    "Opening Ceremony",
                    "Workshop by JDW",
                    "Hackathon Starts",
                    "Improv Event",
                  ]}
                />
              </div>
            </div>
            <div>
              <div className="rounded-xl border-2 border-gray-500">
                <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
                  Day 2
                </h2>
                <Timeline
                  events={day2Events}
                  highlightEvents={[
                    "Coding Ninjas Event",
                    "Session by Pranav M.",
                    "Qawwali Night",
                    "Session by Prof. Iyenger",
                    "Improv by Nakab",
                    "Workshop by GFG",
                    "Music Night by Anunaad",
                  ]}
                />
              </div>
            </div>
            <div>
              <div className="rounded-xl border-2 border-gray-500">
                <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
                  Day 3
                </h2>
                <Timeline
                  events={day3Events}
                  highlightEvents={["DJ night by JDW", "Closing Ceremony", "Software Engineering Session"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineEvent {
  time: string;
  event: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  highlightEvents?: string[];
}

const Timeline: React.FC<TimelineProps> = ({ events, highlightEvents }) => {
  return (
    <div className="relative ml-[3.5rem]">
      <div
        className="absolute left-0 h-full w-px bg-gray-500"
        style={{
          boxShadow:
            "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
        }}
      ></div>
      <div className="flex flex-col items-start">
        {events.map((event, index) => (
          <div key={index} className="my-2.5 flex items-start">
            <div
              className={`absolute left-0 -translate-x-1/2 transform rounded-full bg-gray-700
            px-3 py-2 text-sm font-semibold text-white ${highlightEvents && highlightEvents.includes(event.event)
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-black"
                  : ""
                }`}
            >
              {event.time}
            </div>
            <div
              className={`ml-[3rem] px-3 py-3 text-[0.9rem] text-gray-200`}
            >
              {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itenary