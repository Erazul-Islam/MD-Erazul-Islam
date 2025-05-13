"use client";
import React from "react";

import ExperienceCard from "@/components/ui/experience-ui/experience";
import FloatingText from "@/components/gsap/floating-text";

const ExperiencePage = () => {
  return (
    <div>
      <FloatingText
        className="font-serif py-8 text-pink-800 text-center text-3xl"
        text="Experience"
      />
      <ExperienceCard />
    </div>
  );
};

export default ExperiencePage;
