/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Tabs, Tab, } from "@nextui-org/react";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase, FaCss3, FaHtml5, FaJs, FaCss3Alt } from 'react-icons/fa';

const skills = {
    frontend: [
       
        { skill: 'React', level: 90, icon: <FaReact size={40} /> },
        { skill: 'HTML', level: 95, icon: <FaHtml5 size={40} /> },
        { skill: 'HTML', level: 95, icon: <FaHtml5 size={40} /> },
        { skill: 'CSS', level: 85, icon: <FaCss3 size={40} /> },
        { skill: 'Tailwind CSS', level: 85, icon: <FaCss3Alt size={40} /> },
    ],
    backend: [
        { skill: 'Node.js', level: 80, icon: <FaNodeJs size={40} /> },
        { skill: 'Express.js', level: 75, icon: <FaNodeJs size={40} /> },
    ],
    database: [
        { skill: 'MongoDB', level: 85, icon: <FaDatabase size={40} /> },
        { skill: 'PostgreSQL', level: 70, icon: <FaDatabase size={40} /> },
    ],
    languages: [
        { skill: 'JavaScript', level: 90, icon: <FaJs size={40} /> },
        { skill: 'TypeScript', level: 80, icon: <FaJs size={40} /> },
    ],
    tools: [
        { skill: 'Git', level: 95, icon: <FaGitAlt size={40} /> },
        { skill: 'Docker', level: 70, icon: <FaGitAlt size={40} /> },
    ],
};

export default function SkillSet() {
    return (
        <section id="skills" className="py-20 text-white">
            <div className="container mx-auto text-center">
                <Tabs aria-label="Skill Categories" variant="bordered"  color="danger">
                    <Tab key="frontend" title="Frontend">
                        <div className="space-y-6 flex items-center gap-4 justify-center ">
                            {skills.frontend.map((skill, index) => (
                                <div key={index} className="flex items-center justify-center border space-x-4">
                                    <div className="text-pink-700">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>

                    <Tab key="backend" title="Backend">
                        <div className="space-y-6">
                            {skills.backend.map((skill, index) => (
                                <div key={index} className="flex items-center justify-center space-x-4">
                                    <div className="text-white">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif mb-2 text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>

                    <Tab key="database" title="Database">
                        <div className="space-y-6">
                            {skills.database.map((skill, index) => (
                                <div key={index} className="flex items-center justify-center space-x-4">
                                    <div className="text-white">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif mb-2 text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>

                    <Tab key="languages" title="Languages">
                        <div className="space-y-6">
                            {skills.languages.map((skill, index) => (
                                <div key={index} className="flex items-center justify-center space-x-4">
                                    <div className="text-white">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif mb-2 text-left">{skill.skill}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>

                    <Tab key="tools" title="Tools">
                        <div className="space-y-6">
                            {skills.tools.map((skill, index) => (
                                <div key={index} className="flex items-center justify-center space-x-4">
                                    <div className="text-white">{skill.icon}</div>
                                    <div className="flex flex-col w-full">
                                        <h3 className="text-xl font-serif mb-2 text-left">{skill.skill}</h3>
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
