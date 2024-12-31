/* eslint-disable prettier/prettier */

"use client"

import React, { useEffect, useState } from 'react';

const BlogDetails = () => {
    
    const [data,setData] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try{
                const res = await fetch("/public/blog.json")
                const data = await res.json()

                setData(data)
            }
            catch (err) {

            }
        }

        fetchBlogs()
    },[])

    return (
        <div>
            Blog
        </div>
    );
};

export default BlogDetails;