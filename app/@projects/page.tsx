"use client";

import React from "react";

import Card3D from "@/components/ui/project-ui/Projects";
import FloatingText from "@/components/gsap/floating-text";

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <FloatingText
        className="font-serif py-8 text-pink-800 text-center text-3xl"
        text="Projects"
      />
      <Card3D />
    </div>
  );
};

export default Projects;
