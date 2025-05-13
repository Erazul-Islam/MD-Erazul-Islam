/* eslint-disable prettier/prettier */

"use client";

import React from "react";

import SkillSet from "@/components/ui/skills-ui/Skills";

const Skills = () => {
  return (
    <div
    className="h-screen"
    //   style={{ backgroundImage: "url('/breadcum-bg.png')" }}
    >
      <div className="font-serif text-pink-800 text-center text-3xl">
        Technical Expertise
      </div>
      <SkillSet />
    </div>
  );
};

export default Skills;
