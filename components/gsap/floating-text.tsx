import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const FloatingText: React.FC<{ text: string; className: string }> = ({
  text,
  className,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef) return;
    gsap.to(textRef.current, {
      y: -15,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div ref={textRef} className={`${className}`}>
      {text}
    </div>
  );
};

export default FloatingText;
