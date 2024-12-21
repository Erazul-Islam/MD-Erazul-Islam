/* eslint-disable prettier/prettier */

"use client"

import Card3D from '@/components/ui/project-ui/Projects';
import React from 'react';

const Projects = () => {
    return (
        <div>
            <h1 className='font-serif text-center text-3xl text-pink-700'>Projects</h1>
            <Card3D/>
        </div>
    );
};

export default Projects;