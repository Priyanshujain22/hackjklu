"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import img1 from "@/public/Commitee_Images/groupimage.jpg";
import img2 from "@/public/Commitee_Images/groupimage.jpg";
import img3 from "@/public/Commitee_Images/groupimage.jpg";
import img4 from "@/public/Commitee_Images/groupimage.jpg";
import img5 from "@/public/Commitee_Images/groupimage.jpg";
import img6 from "@/public/Commitee_Images/groupimage.jpg";
import img7 from "@/public/Commitee_Images/groupimage.jpg";
import img8 from "@/public/Commitee_Images/groupimage.jpg";
import img9 from "@/public/Commitee_Images/groupimage.jpg";
import img10 from "@/public/Commitee_Images/groupimage.jpg";

const Carousel = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic sliding logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  // Logic for hiding the title after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 5000); // Hide after 5 seconds

    return () => clearTimeout(timer); // Clear the timeout on component unmount
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center space-y-8 mt-8 mb-8">
      {/* Title */}
      {showTitle && (
        <div
          className="absolute top-0 w-full text-center p-4"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: showTitle ? 1 : 0,
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Our Community Crew
          </h2>
        </div>
      )}

      {/* Carousel */}
      <div className="custom-carousel relative overflow-hidden w-full h-[300px] md:h-[400px] max-w-4xl mx-auto">
        {/* Images */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="min-w-full flex justify-center items-center">
              <Image
                src={img}
                alt={`Carousel Image ${index + 1}`}
                className="rounded-xl object-cover"
                placeholder="blur"
                quality={100}
                width={800} // Adjust width as per your preference
                height={600} // Adjust height as per your preference
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={nextSlide}
        >
          Next
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
