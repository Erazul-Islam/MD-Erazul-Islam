/* eslint-disable prettier/prettier */

"use client"

import React from 'react';

import SkillSet from '@/components/ui/skills-ui/Skills';

const Skills = () => {
    return (
        <div>
            <div className='font-serif text-pink-800 text-center text-3xl mt-12'>
                Technical Expertise
            </div>
            <SkillSet/>
        </div>
    );
};

export default Skills;