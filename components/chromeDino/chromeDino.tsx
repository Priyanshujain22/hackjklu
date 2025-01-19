"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import Image from "next/image";
import dino_run_0 from "@/public/dino/dino-run-0.png";
import dino_run_1 from "@/public/dino/dino-run-1.png";
import ground from "@/public/dino/ground.png";
import cactusImg from "@/public/dino/cactus.png";

// Constants for Dino States
export enum DINO_STATES {
  RUNNING = "RUNNING",
}

// Dino Component
const Dino = forwardRef<HTMLImageElement, { state: DINO_STATES; style?: React.CSSProperties }>(
  ({ state, style }, ref) => {
    const localRef = useRef<HTMLImageElement>(null);
    const combinedRef = ref || localRef;

    useEffect(() => {
      let interval: ReturnType<typeof setInterval> | null = null;
      if (combinedRef && "current" in combinedRef && combinedRef.current) {
        const imgElement = combinedRef.current;

        if (state === DINO_STATES.RUNNING) {
          const images = [dino_run_0, dino_run_1];
          let currentIdx = 0;

          interval = setInterval(() => {
            currentIdx = (currentIdx + 1) % images.length;
            imgElement.src = images[currentIdx].src;
          }, 150);
        }
      }

      return () => {
        if (interval) clearInterval(interval);
      };
    }, [state, combinedRef]);

    return <Image ref={combinedRef} src={dino_run_0} alt="Dino" className="absolute" style={style} />;
  }
);

Dino.displayName = "Dino";

// Ground Component
const Ground = forwardRef<HTMLDivElement, { obstaclePositions: number[]; setObstaclePositions: React.Dispatch<React.SetStateAction<number[]>> }>(
  ({ obstaclePositions, setObstaclePositions }, ref) => {
    const moveObstacles = () => {
      setObstaclePositions((prev) =>
        prev.map((pos) => {
          if (pos < -50) return Math.floor(Math.random() * 1500) + 800; // Reset when off screen
          return pos - 3; // Move to the left
        })
      );
    };

    useEffect(() => {
      const interval = setInterval(moveObstacles, 30);
      return () => clearInterval(interval);
    }, [obstaclePositions, setObstaclePositions]);

    return (
      <div
        ref={ref}
        className="absolute bottom-0 flex"
        style={{ width: "100%", height: "40px", overflow: "hidden" }}
      >
        <div className="relative w-[2000px] h-full flex">
          {[...Array(4)].map((_, idx) => (
            <Image key={idx} src={ground} alt="Ground" className="w-[500px] h-full object-cover" />
          ))}
          {obstaclePositions.map((pos, idx) => (
            <Image
              key={idx}
              src={cactusImg}
              alt="Cactus"
              className="absolute"
              style={{ left: `${pos}px`, bottom: "5px", height: "40px", width: "30px" }}
            />
          ))}
        </div>
      </div>
    );
  }
);

Ground.displayName = "Ground";

// Main Game Component
function DinoGame() {
  const [dinoState] = useState<DINO_STATES>(DINO_STATES.RUNNING);
  const [obstaclePositions, setObstaclePositions] = useState<number[]>([1000, 1500, 2000]); // Initial positions
  const dinoRef = useRef<HTMLImageElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-[200px] flex justify-center items-center relative overflow-hidden">
      <Dino
        ref={dinoRef}
        state={dinoState}
        style={{
          bottom: "10px",
          left: "50px",
          height: "50px",
          width: "50px",
        }}
      />
      <Ground ref={groundRef} obstaclePositions={obstaclePositions} setObstaclePositions={setObstaclePositions} />
    </div>
  );
}

export default DinoGame;
