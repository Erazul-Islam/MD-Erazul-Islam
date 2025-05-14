/* eslint-disable prettier/prettier */
"use client"

import React from 'react';

import ReadingBlog from '@/components/ui/blogs-ui/ReadingBlog';
import FloatingText from '@/components/gsap/floating-text';

const Blogs = () => {
    return (
        <div className='mt-12'>
            <FloatingText className='text-center font-serif text-pink-800 text-4xl mb-4' text='Latest Blog' />
            <div className='max-w-7xl mx-auto'>
                <ReadingBlog/>
            </div>
        </div>
    );
};

export default Blogs;