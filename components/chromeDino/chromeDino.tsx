"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import dino_stationary from "@/public/dino/dino-stationary.png";
import dino_run_0 from "@/public/dino/dino-run-0.png";
import dino_run_1 from "@/public/dino/dino-run-1.png";
import ground from "@/public/dino/ground.png";
import cactusImg from "@/public/dino/cactus.png";

export enum DINO_STATES {
  STATIC = "STATIC",
  RUNNING = "RUNNING",
  JUMPING = "JUMPING",
}

interface DinoProps {
  state: DINO_STATES;
  className?: string;
  style?: React.CSSProperties; // Added style prop for controlling the vertical position
}

const Dino = forwardRef<HTMLImageElement, DinoProps>(({ state, className, style }, ref) => {
  const localRef = useRef<HTMLImageElement>(null);
  const combinedRef = ref || localRef;

  useEffect(() => {
    if (!combinedRef || !("current" in combinedRef) || !combinedRef.current)
      return;

    const imgElement = combinedRef.current as HTMLImageElement;
    let interval: ReturnType<typeof setInterval> | null = null;

    if (state === DINO_STATES.RUNNING) {
      const images = [dino_run_0, dino_run_1];
      let currentIdx = 0;

      interval = setInterval(() => {
        currentIdx = (currentIdx + 1) % images.length;
        imgElement.src = images[currentIdx].src;  // Access the 'src' property
      }, 100);
    } else if (state === DINO_STATES.JUMPING) {
      imgElement.src = dino_stationary.src; // Access the 'src' property
    } else {
      imgElement.src = dino_stationary.src; // Access the 'src' property
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [state]);

  return <img ref={combinedRef} className={className} style={style} />;
});

interface ObstaclesProps {
  updater: number;
  obstaclePositions: number[];
  setObstaclePositions: React.Dispatch<React.SetStateAction<number[]>>;
}

const Obstacles: React.FC<ObstaclesProps> = ({ updater, obstaclePositions, setObstaclePositions }) => {
  const count = Math.floor(3 + Math.random() * 3);  // Limiting number of obstacles
  const positions: number[] = [];

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      // Randomly place obstacles on the screen within a proper range
      const newNumber = 1000 + Math.floor(Math.random() * 2000); 
      let flag = true;
      positions.forEach((position) => {
        if (position <= newNumber + 250 && position >= newNumber - 250) {
          flag = false;
        }
      });
      if (flag) positions.push(newNumber);
      else i--;
    }

    setObstaclePositions(positions.sort());  // Sort positions so that obstacles are placed sequentially
  }, [updater]);

  return (
    <div className="relative">
      {obstaclePositions.map((position, key) => (
        <img
          key={key}
          src={cactusImg.src}
          alt="Cactus"
          className="absolute bottom-[15px]"
          style={{
            left: `${position}px`, 
            height: "40px", 
            width: "30px"
          }}
        />
      ))}
    </div>
  );
};

interface GroundProps {
  updater: number;
  obstaclePositions: number[];
  setObstaclePositions: React.Dispatch<React.SetStateAction<number[]>>;
}

const Ground = forwardRef<HTMLDivElement, GroundProps>(
  ({ updater, obstaclePositions, setObstaclePositions }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute bottom-0 inline-flex"
        style={{ width: "10000px" }}
      >
        <div className="w-[2500px] h-[25px]">
          <img
            src={ground.src} // Access the 'src' property
            alt="Ground"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[2500px] h-[25px]">
          <img
            src={ground.src} // Access the 'src' property
            alt="Ground"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[2500px] h-[25px]">
          <img
            src={ground.src} // Access the 'src' property
            alt="Ground"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[2500px] h-[25px]">
          <img
            src={ground.src} // Access the 'src' property
            alt="Ground"
            className="w-full h-full object-cover"
          />
        </div>

        <Obstacles
          obstaclePositions={obstaclePositions}
          updater={updater}
          setObstaclePositions={setObstaclePositions}
        />
      </div>
    );
  }
);

function DinoGame() {
  const [dinoState, setDinoState] = useState<DINO_STATES>(DINO_STATES.STATIC);
  const [speed, setSpeed] = useState<number>(10);
  const [dinoPositionX, setDinoPositionX] = useState(0);
  const [dinoBottom, setDinoBottom] = useState<string>("17px");
  const [updater, setUpdater] = useState<number>(0);
  const [obstaclePositions, setObstaclePositions] = useState<number[]>([]);

  const groundRef = useRef<HTMLDivElement>(null);
  const dinoRef = useRef<HTMLImageElement>(null);

  const handleStart = () => {
    setDinoState(DINO_STATES.RUNNING);
  };

  const handleJump = (e: KeyboardEvent) => {
    if (e.key === " " && dinoState !== DINO_STATES.JUMPING) { // Ensure dino is not already jumping
      setDinoState(DINO_STATES.JUMPING);
    }
  };

  useEffect(() => {
    window.addEventListener("beforeunload", () => sessionStorage.clear(), { once: true });
    window.addEventListener("keydown", handleStart, { once: true });
    window.addEventListener("keydown", handleJump);

    return () => {
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("keydown", handleJump);
    };
  }, []);

  useEffect(() => {
    let pos = Number(sessionStorage.getItem("score")) || 1;

    const gameInterval = setInterval(() => {
      if (groundRef.current) {
        let position = pos % 2500;
        --pos;
        groundRef.current.style.left = `${position * 3}px`; // Scrolling ground

        if (position === 0) setUpdater((prev) => prev + 1); // Update obstacles when ground moves completely

        if (pos % 2000 === 0) {
          setSpeed((prev) => prev / 1.1); // Slow down the game speed gradually
        }
      }

      // Jumping Logic
      if (dinoState === DINO_STATES.JUMPING) {
        setDinoBottom("125px");

        setTimeout(() => {
          setDinoBottom("17px");
          setDinoState(DINO_STATES.RUNNING); // Resume running after the jump
        }, 250);
      }

      // Move obstacles to the left
      setObstaclePositions((prev) => {
        return prev.map((pos) => {
          if (pos < -50) {
            return Math.floor(Math.random() * 2000) + 1000;
          }
          return pos - 3;
        });
      });
    }, speed);

    return () => {
      sessionStorage.setItem("score", String(pos));
      clearInterval(gameInterval);
    };
  }, [dinoState, updater]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-full border-3 border-gray-500 overflow-hidden">
        <Dino
          ref={dinoRef}
          state={dinoState}
          style={{
            bottom: dinoBottom, // Dynamically update the vertical position of Dino during the jump
            left: `${dinoPositionX}px`
          }}
          className="absolute transition-all duration-500"
        />
        <Ground
          obstaclePositions={obstaclePositions}
          setObstaclePositions={setObstaclePositions}
          updater={updater}
          ref={groundRef}
        />
      </div>
    </div>
  );
}

export default DinoGame;
