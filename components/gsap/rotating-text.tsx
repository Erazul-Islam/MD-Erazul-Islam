// CircleWithRotatingText.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CircleWithRotatingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      rotation: 360,
      transformOrigin: "50% 0%",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {/* Circle with border only */}
      <div className="relative w-40 h-40 rounded-full border-4 border-pink-500 flex items-center justify-center">
        {/* Center dot */}
        <div className="w-2 h-2 bg-pink-600 rounded-full" />
      </div>

      {/* Rotating text wrapper */}
      <div className="relative w-40 h-40">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 origin-top">
          <p ref={textRef} className="text-white font-semibold">
            Rotating Text Around
          </p>
        </div>
      </div>
    </div>
  );
};

export default CircleWithRotatingText;
