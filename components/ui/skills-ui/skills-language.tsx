"use client";
import React from "react";

import { SkillsCardProps } from "@/types";

const SkillsCardLanguage: React.FC<SkillsCardProps> = ({ skills }) => {
  return (
    <div className=" rounded-xl max-w-xs  shadow-lg hover:shadow-2xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Languages
      </h2>
      <div className="space-y-3">
        {skills.languages?.map((one, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            <span className="text-gray-200 font-medium">{one.skill}</span>
            <span className="text-2xl text-pink-600">{one.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCardLanguage;
