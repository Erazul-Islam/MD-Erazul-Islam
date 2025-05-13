"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type skillsProps = {
  skills: {};
};

const SkillsCard = ({ skills }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const length = pathRef.current?.getTotalLength();

    if (!length) return;

    // Set initial stroke properties
    gsap.set(pathRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Infinite flow animation
    gsap.to(pathRef.current, {
      strokeDashoffset: 0,
      duration: 6,
      repeat: -1,
      ease: "none",
    });

    // Subtle glow effect
    gsap.to(cardRef.current, {
      boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative p-6 rounded-2xl bg-gradient-to-br from-pink-900/80 to-pink-800/90 backdrop-blur-sm w-full max-w-md mx-auto overflow-hidden"
    >
      {/* Animated border path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          ref={pathRef}
          d="M 2,2 L 98,2 L 98,98 L 2,98 L 2,2"
          fill="none"
          stroke="url(#borderGradient)"
          strokeLinecap="round"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient
            id="borderGradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Card content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-100">
          Frontend Skills
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {skills.frontend.map(({ skill, icon }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-lg bg-pink-900/40 hover:bg-pink-800/60 transition-all duration-300 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                {icon}
              </span>
              <span className="font-medium text-pink-100">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
