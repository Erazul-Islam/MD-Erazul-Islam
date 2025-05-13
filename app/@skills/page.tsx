/* eslint-disable prettier/prettier */

"use client";

import React from "react";

import SkillSet from "@/components/ui/skills-ui/Skills";
import FloatingText from "@/components/gsap/floating-text";

const Skills = () => {
  return (
    <div
    >
      <FloatingText className="font-serif py-8 text-pink-800 text-center text-3xl" text="Technical Expertise"/>
      <SkillSet />
    </div>
  );
};

export default Skills;
