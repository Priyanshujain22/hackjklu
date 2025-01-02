"use client";

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    src: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-3 overflow-hidden max-w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-4 py-2 w-max animate-scroll flex-nowrap",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="flex-shrink-0 w-[200px] h-[150px] md:w-[300px] md:h-[200px] rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-[0_0_2px_#10cf23,0_0_5px_#10cf23]"
            key={item.name}
          >
            <Image
              src={item.src}
              alt={item.name}
              width={300}  // Automatically handled by Next.js
              height={200}  // Automatically handled by Next.js
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
