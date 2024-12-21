/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Tabs, Tab, } from "@nextui-org/react";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaCss3, FaHtml5, FaJs, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb,SiNextdotjs , SiRedux,SiTypescript,SiMongoosedotws, SiPrisma} from "react-icons/si";


const skills = {
    frontend: [
       
        { skill: 'HTML', level: 95, icon: <FaHtml5 size={30} /> },
        { skill: 'CSS', level: 85, icon: <FaCss3 size={30} /> },
        { skill: 'Tailwind', level: 85, icon: <FaCss3Alt size={30} /> },
        { skill: 'React', level: 90, icon: <FaReact size={30} /> },
        { skill: 'Next js', level: 90, icon: <SiNextdotjs size={30} /> },
        { skill: 'Redux', level: 90, icon: <SiRedux size={30} /> },
    ],
    backend: [
        { skill: 'Node.js', level: 80, icon: <FaNodeJs size={30} /> },
        { skill: 'Express.js', level: 75, icon: <FaNodeJs size={30} /> },
        { skill: 'Mongoose', level: 75, icon: <SiMongoosedotws size={30} /> },
        { skill: 'Prisma', level: 75, icon: <SiPrisma size={30} /> },
    ],
    database: [
        { skill: 'MongoDB', level: 85, icon: <SiMongodb size={30} /> },
        { skill: 'PostgreSQL', level: 70, icon: <FaDatabase size={30} /> },
    ],
    languages: [
        { skill: 'JavaScript', level: 90, icon: <FaJs size={30} /> },
        { skill: 'TypeScript', level: 80, icon: <SiTypescript size={30} /> },
    ],
    tools: [
        { skill: 'Git', level: 95, icon: <FaGitAlt size={30} /> },
        { skill: 'Docker', level: 70, icon: <FaGitAlt size={30} /> },
    ],
};

export default function SkillSet() {
    return (
        <section id="skills" className="py-8 text-white">
            <div className="container mx-auto text-center">
                <Tabs aria-label="Skill Categories" variant="bordered"  color="danger">
                    <Tab key="frontend" title="Frontend">
                        <div className="mt-8 flex items-center gap-4 justify-center ">
                            {skills.frontend.map((skill, index) => (
                                <div key={index} className="flex items-center p-2 gap-2 justify-center border ">
                                    <div className="text-pink-700 ">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>

                    <Tab key="backend" title="Backend">
                        <div className="mt-8 flex items-center gap-4 justify-center">
                            {skills.backend.map((skill, index) => (
                                <div key={index} className="flex items-center p-2 gap-2 justify-center border">
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
                                <div key={index} className="flex items-center p-2 gap-2 justify-center border">
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
                                <div key={index} className="flex items-center p-2 gap-2 justify-center border">
                                    <div className="text-pink-700">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif  text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>

                    <Tab key="tools" title="Tools">
                        <div className="mt-8 flex items-center gap-4 justify-center">
                            {skills.tools.map((skill, index) => (
                                <div key={index} className="flex items-center p-2 gap-2 justify-center border">
                                    <div className="text-pink-700">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif  text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
}
