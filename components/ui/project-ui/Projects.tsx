/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";


const Card3D = () => {
    const projects = [
        {
            name: "Pet Care",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1735572568/web_kn1l96.jpg",
            liveLink: "https://petcareclient-phi.vercel.app/",
            backendRepo: "https://github.com/Erazul-Islam/pet-and-care-backend",
            clientRepo: "https://github.com/Erazul-Islam/Pet-Care-FrontEnd",
            details: "Pet Care is a social media platform for pet enthusiasts to share tips, stories, and interact with posts, fostering a community for knowledge sharing and engagement around pet care",
        },
        {
            name: "Auto Bike",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1735572974/Screenshot_297_ylnht4.png",
            liveLink: "https://auto-bike-two.vercel.app",
            clientRepo: "https://github.com/Erazul-Islam/Bike-Rental-Service-FrontEnd",
            backendRepo: "https://github.com/Erazul-Islam/bike-rental-service",
            details: "An interactive platform for renting bikes with advanced features for users and a powerful admin dashboard for managing rentals.",
        },
        {
            name: "Japanese Learning",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1735573466/learn-japanese-mountain-and-sun-symbols-indicating-japan-language-HJG0KE_jgaztl.jpg",
            liveLink: "https://japanese-language.vercel.app/",
            clientRepo: "https://github.com/Erazul-Islam/Japanese-Vocabulary-learning-Application-Client",
            backendRepo: "https://github.com/Erazul-Islam/Japanese-Vocabulary-learning-Application-Backend",
            details: "An interactive language-learning platform designed to help users master Japanese vocabulary through personalized and engaging tools.",
        },
        {
            name: "Chat Verse",
            image: "https://res.cloudinary.com/djs5y6ey5/image/upload/v1735645657/approved-chat-app-icon-vector-28873697_rvqsge.jpg",
            liveLink: "https://the-messenger-client.onrender.com",
            clientRepo: "https://github.com/Erazul-Islam/The-Messenger-Client",
            backendRepo: "https://github.com/Erazul-Islam/The-Messenger",
            details: "This is a real time chat application where user can chat with a predefined group. Join the group and sent messages with each other",
        },
    ];

    return (
        <div className="relative flex justify-center items-center overflow-hidden pl-8 pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto lg:ml-[230px] lg:mr-[65px] w-full">
                {projects.map((project, index) => {
                    const [isFlipped, setIsFlipped] = useState(false);

                    const toggleFlip = () => setIsFlipped((prev) => !prev);

                    return (
                        <motion.div
                            key={index}
                            className="relative mt-8 w-80 h-96 [perspective:1000px] z-10"
                            onMouseEnter={() => !isFlipped && setIsFlipped(true)} 
                            onMouseLeave={() => isFlipped && setIsFlipped(false)} 
                            onClick={toggleFlip} 
                            whileHover={{
                                scale: 1.05, 
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-xl shadow-2xl  p-4 border border-pink-800  text-white flex flex-col justify-center items-center"
                                style={{ transformStyle: "preserve-3d" }}
                                animate={{
                                    rotateY: isFlipped ? 180 : 0,
                                    translateZ: [0, 10, 0], 
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Front Side */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center [backface-visibility:hidden]">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-[250px] h-64 object-cover rounded-xl  mb-4"
                                    />
                                    <h1 className="text-2xl font-serif">{project.name}</h1>
                                    <button
                                        className="mt-4 px-6 py-2 bg-none rounded-md border font-serif border-pink-800 text-white"
                                    >
                                        View Project
                                    </button>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-none text-white rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                    <h1 className="text-xl font-bold">Project Details</h1>
                                    <p className="mt-2 ml-4 mr-4 text-center text-sm">{project.details}</p>
                                    <div className="mt-4 ml-20">
                                        <button className="mt-4 px-6 py-2 bg-none rounded-md border font-serif border-pink-800 text-white"><Link href={project.liveLink}>Live</Link></button>
                                        <button className="mt-4 px-6 py-2 bg-none rounded-md border font-serif border-pink-800 text-white"><Link href={project.clientRepo}>Client Repository</Link></button><br />
                                        <button className="mt-4 px-6 py-2 bg-none rounded-md border font-serif border-pink-800 text-white"><Link href={project.backendRepo}>Backend Repository</Link></button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card3D;
