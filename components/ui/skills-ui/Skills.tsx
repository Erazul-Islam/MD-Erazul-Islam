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

import SkillsCard from "./skills-card";

const skills = {
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
    <section className="py-16 px-4 text-white" id="skills">
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white/10 transform -translate-x-1/2 hidden md:block" />

        {/* Frontend (Top Left) */}
        <div className="space-y-6">
          <SkillsCard skills={skills} />
        </div>

        {/* Backend (Top Right) */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold border-b border-white/20 pb-2">
            Backend
          </h3>
          <div className="space-y-3">
            {skills.backend.map(({ skill, icon }, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-green-400">{icon}</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Database (Bottom Left) */}
        <div className="space-y-6 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold border-b border-white/20 pb-2">
            Database
          </h3>
          <div className="space-y-3">
            {skills.database.map(({ skill, icon }, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-yellow-400">{icon}</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages (Bottom Right) */}
        <div className="space-y-6 mt-8 md:mt-0">
          <h3 className="text-2xl font-semibold border-b border-white/20 pb-2">
            Languages
          </h3>
          <div className="space-y-3">
            {skills.languages.map(({ skill, icon }, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-purple-400">{icon}</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
{
  /* <div className="container mx-auto text-center">
  <Tabs aria-label="Skill Categories" variant="bordered" color="danger">
    <Tab key="frontend" title="Frontend">
      <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
        {skills.frontend.map((skill, index) => (
          <div
            key={index}
            className=" flex items-center p-2 gap-2 justify-center border"
          >
            <div className="text-pink-700">{skill.icon}</div>
            <h3 className="text-xl font-serif mt-2">{skill.skill}</h3>
          </div>
        ))}
      </div>
    </Tab>
    <Tab key="backend" title="Backend">
      <div className="mt-8 flex flex-wrap items-center gap-4 justify-center">
        {skills.backend.map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-2 gap-2 justify-center border"
          >
            <div className="text-pink-700">{skill.icon}</div>
            <div className="flex flex-col w-full">
              <h3 className="text-xl font-serif  text-left">{skill.skill}</h3>
            </div>
          </div>
        ))}
      </div>
    </Tab>
    <Tab key="database" title="Database">
      <div className="mt-8 flex items-center gap-4 justify-center">
        {skills.database.map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-2 gap-2 justify-center border"
          >
            <div className="text-pink-700">{skill.icon}</div>
            <div className="flex flex-col w-full">
              <h3 className="text-xl font-serif  text-left">{skill.skill}</h3>
            </div>
          </div>
        ))}
      </div>
    </Tab>
    <Tab key="languages" title="Languages">
      <div className="mt-8 flex items-center gap-4 justify-center">
        {skills.languages.map((skill, index) => (
          <div
            key={index}
            className="flex items-center p-2 gap-2 justify-center border"
          >
            <div className="text-pink-700">{skill.icon}</div>
            <div className="flex flex-col w-full">
              <h3 className="text-xl font-serif  text-left">{skill.skill}</h3>
            </div>
          </div>
        ))}
      </div>
    </Tab>
  </Tabs>
</div>; */
}
