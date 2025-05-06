"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type changingTextProps = {
  texts: string[];
};

const ChangingTexts: React.FC<changingTextProps> = ({ texts }) => {
  const [currentInex, setCurrentIndex] = useState(0);
  const textWrapper = useRef<HTMLDivElement>(null);
  const splitTextIntoSpans = (text: string) => {
    const mid = Math.floor(text.length / 2);

    return text.split("").map((letter, i) => (
      <span key={i} className="inline-block opacity-0" data-index={i - mid}>
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  useEffect(() => {
    const animateText = () => {
      const wrapper = textWrapper.current;

      if (!wrapper) return;

      const spans = wrapper.querySelectorAll("span");

      gsap.killTweensOf(spans);

      spans.forEach((span) => {
        gsap.set(span, { y: -50, opacity: 0 });
      });

      Math.floor(spans.length / 2);

      gsap.to(spans, {
        y: 0,
        opacity: 1,
        stagger: {
          each: 0.04,
          from: "center",
        },
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    };

    animateText();
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentInex]);

  return (
    <div ref={textWrapper} className="text-pink-600 text-3xl md:text-5xl">
      {splitTextIntoSpans(texts[currentInex])}
    </div>
  );
};

export default ChangingTexts;
