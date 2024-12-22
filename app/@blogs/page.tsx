/* eslint-disable prettier/prettier */
"use client"

import React from 'react';

import ReadingBlog from '@/components/ui/blogs-ui/ReadingBlog';

const Blogs = () => {
    return (
        <div className=''>
            <h1 className='text-center font-serif text-pink-800 text-4xl mb-4'>Latest Blog</h1>
            <ReadingBlog/>
        </div>
    );
};

export default Blogs;