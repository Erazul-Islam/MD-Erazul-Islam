/* eslint-disable prettier/prettier */

"use client"

import { useParams } from 'next/navigation';
import React from 'react';

const BlogDetails = () => {

    const {id} = useParams()
    console.log(id)

    return (
        <div>
            Blog
        </div>
    );
};

export default BlogDetails;