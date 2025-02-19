"use client";

import { useEffect, useState } from "react";
import Header from "../Header/Header";
import HeaderSmall from "../HeaderSmall/HeaderSmall";

const igShortcode = "DGQTeRSS7br"; // Replace with dynamic shortcode if needed

const Speakers: React.FC = () => {
  const [bgImage, setBgImage] = useState("/screenBlur.webp"); // Initial blurred background
  const [isInstagramLoaded, setIsInstagramLoaded] = useState(false);

  useEffect(() => {
    // Preload the high-quality image
    const img = new Image();
    img.src = "/screen.webp";
    img.onload = () => setBgImage("/screen.webp"); // Replace when loaded
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isInstagramLoaded && window.scrollY > 300) { // Load only when scrolled
        setIsInstagramLoaded(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInstagramLoaded]);

  useEffect(() => {
    if (isInstagramLoaded) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    }
  }, [isInstagramLoaded]);

  return (
    <section
      className="px-5 :pt-10 relative bg-black/50"
      id="speakers"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Accessibility: Use an img tag with alt text for SEO */}
      <img
        src="/screen.webp"
        srcSet="/screenBlur.webp 480w, /screen.webp 1080w"
        alt="Event background"
        className="hidden" // Keep hidden for SEO purposes
        fetchPriority="high"
      />

      <h2 className="text-center my-5 sm:my-10 relative z-10">
        <Header text="Speaker" />
      </h2>

      <div className="flex justify-center relative z-10">
        {isInstagramLoaded ? (
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/p/${igShortcode}/?utm_source=ig_embed&amp;utm_campaign=loading`}
            data-instgrm-version="12"
            style={{
              background: "#000",
              border: "0",
              borderRadius: "3px",
              boxShadow: "0 0 5px rgba(255, 255, 255, 0.2)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: "0",
              width: "99.375%",
              overflow: "hidden",
            }}
          ></blockquote>
        ) : (
          <HeaderSmall text="Loading Instagram Reel..." />
        )}
      </div>
    </section>
  );
};

export default Speakers;
