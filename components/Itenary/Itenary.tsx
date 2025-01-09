"use client";

import React, { useState } from "react";
import itineraryData from "../../data/itinerary.json";
import Header from "../Header/Header";

interface TimelineEvent {
  time: string;
  event: string;
  tags: string[];
}

interface ItineraryData {
  day1Events: TimelineEvent[];
  day2Events: TimelineEvent[];
  day3Events: TimelineEvent[];
}

const Itenary = () => {
  const { day1Events, day2Events, day3Events } = itineraryData as ItineraryData;

  const [activeFilter, setActiveFilter] = useState("all");

  const highlightClass = (tags: string[]) => {
    // Check if any of the event's tags match the activeFilter
    if (activeFilter === "all" || tags.includes(activeFilter)) {
      return "";
    } else {
      return "opacity-50"; // Dims events that do not match the selected tag
    }
  };

  return (
    <section id="itinerary" className='pt-10'>
      <div className="mx-[1rem] my-[3rem] min-h-screen" id="itinerary-section">
        <div className="container mx-auto">
          <h2 className="text-center my-10">
            <Header text="Itinerary" />
          </h2>

          {/* Button Group for Highlighting */}
          <div className="text-center my-4">
            <button
              className={`px-4 py-2 mx-2 ${activeFilter === "all" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 mx-2 ${activeFilter === "mandatory" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveFilter("mandatory")}
            >
              Mandatory
            </button>
            <button
              className={`px-4 py-2 mx-2 ${activeFilter === "fun" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveFilter("fun")}
            >
              Fun
            </button>
            <button
              className={`px-4 py-2 mx-2 ${activeFilter === "food" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveFilter("food")}
            >
              Food
            </button>
            <button
              className={`px-4 py-2 mx-2 ${activeFilter === "workshop" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              onClick={() => setActiveFilter("workshop")}
            >
              Workshop
            </button>

          </div>

          {/* Itinerary Sections */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="rounded-xl border-2 border-gray-500">
                <h2 className="rounded-t-xl border-b-2 border-gray-500 bg-gray-800 px-4 py-2 text-center text-lg font-semibold text-gray-300">
                  Day 1
                </h2>
                <Timeline
                  events={day1Events}
                  highlightClass={highlightClass}
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
                  highlightClass={highlightClass}
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
                  highlightClass={highlightClass}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline: React.FC<{ events: TimelineEvent[]; highlightClass: (tags: string[]) => string }> = ({ events, highlightClass }) => {
  return (
    <div className="relative ml-[3.5rem]">
      <div className="absolute left-0 h-full w-px bg-gray-500" style={{
        boxShadow: "0px 0px 2.783px 0px #FFF, 0px 0px 5.566px 0px #FFF, 0px 0px 19.481px 0px #FFF",
      }}></div>
      <div className="flex flex-col items-start">
        {events.map((event, index) => (
          <div key={index} className={`my-2.5 flex items-start ${highlightClass(event.tags)}`}>
            <div className={`absolute left-0 -translate-x-1/2 transform rounded-full bg-gray-700 px-3 py-2 text-sm font-semibold text-white`}>
              {event.time}
            </div>
            <div className={`ml-[3rem] px-3 py-3 text-[0.9rem] text-gray-200`}>
              {event.event}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itenary;
