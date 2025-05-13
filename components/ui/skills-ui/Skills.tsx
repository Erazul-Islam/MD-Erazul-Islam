import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCss3,
  FaHtml5,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiMongoosedotws,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";

import SkillsCardFrontEnd from "./skills-card";

import { SkillsCategory } from "@/types";

const skills: SkillsCategory = {
  frontend: [
    { skill: "HTML", level: 95, icon: <FaHtml5 size={30} /> },
    { skill: "CSS", level: 85, icon: <FaCss3 size={30} /> },
    { skill: "Tailwind", level: 85, icon: <FaCss3Alt size={30} /> },
    { skill: "React", level: 90, icon: <FaReact size={30} /> },
    { skill: "Next js", level: 90, icon: <SiNextdotjs size={30} /> },
    { skill: "Redux", level: 90, icon: <SiRedux size={30} /> },
    { skill: "Socket io", level: 90, icon: <SiSocketdotio size={30} /> },
  ],
  backend: [
    { skill: "Node.js", level: 80, icon: <FaNodeJs size={30} /> },
    { skill: "Express.js", level: 75, icon: <FaNodeJs size={30} /> },
    { skill: "Mongoose", level: 75, icon: <SiMongoosedotws size={30} /> },
    { skill: "Prisma", level: 75, icon: <SiPrisma size={30} /> },
  ],
  database: [
    { skill: "MongoDB", level: 85, icon: <SiMongodb size={30} /> },
    { skill: "PostgreSQL", level: 70, icon: <FaDatabase size={30} /> },
  ],
  languages: [
    { skill: "JavaScript", level: 90, icon: <FaJs size={30} /> },
    { skill: "TypeScript", level: 80, icon: <SiTypescript size={30} /> },
  ],
};

export default function SkillSet() {
  return (
    <section className="mx-auto max-w-7xl md:px-6" id="skills">
      <SkillsCardFrontEnd skills={skills} />
    </section>
  );
}
