"use client";
/* eslint-disable prettier/prettier */
import React from "react";

import ExperienceCard from "@/components/ui/experience-ui/experience";

const ExperiencePage = () => {
  return (

      <div className=" px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl text-pink-800 text-center">
          Work Experience
        </h1>
        <div className="space-y-8 mt-6 mb-6">
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
