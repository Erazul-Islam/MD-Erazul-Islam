/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Journey = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const journeys = [
    {
      date: 'June 2023',
      title: 'Started to learn HTML and CSS',
      description:
        'In my journey to becoming a developer, I began with HTML and CSS, the building blocks of web development. Learning how to structure web pages with HTML and style them using CSS was both exciting and foundational, setting the stage for creating visually appealing and user-friendly websites.',
    },
    {
      date: 'July 2023',
      title: 'Started to learn javaScript and React',
      description:
        'Venturing into JavaScript opened the door to dynamic and interactive web development. Building upon this, I delved into React, where I learned to create reusable components, manage state efficiently, and develop powerful, user-centric web applications with ease and flexibility.',
    },
    {
      date: 'October 2023',
      title: 'Explored Backend Development',
      description:
        'I ventured into backend development, working with Node.js, Express, and MongoDB to build RESTful APIs and manage databases efficiently.',
    },
    {
      date: 'January 2024',
      title: 'Motivated to be MERN stack developer',
      description:
        'Driven by a passion for full-stack development, I set my sights on mastering the MERN stack—MongoDB, Express, React, and Node.js. This journey fuels my desire to build dynamic, scalable, and efficient web applications, bridging the gap between seamless front-end interfaces and robust back-end architectures.',
    },
    {
      date: 'Middle of 2024',
      title: 'Explored NEXT JS, REDUX and Backend development',
      description:
        'Taking my development skills further, I dived into Next.js for server-side rendering and seamless routing, mastered Redux for efficient state management, and ventured into backend development with Prisma and PostgreSQL. This exploration equipped me with the tools to build robust, scalable, and full-stack applications with ease.',
    },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-6 my-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-extrabold text-center text-white mb-6 mt-6"
      >
        My Career Journey
      </motion.h1>
      <div className="space-y-4">
        {journeys.map((journey, index) => (
          <motion.div
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-6 md:gap-10`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-pink-800 p-6 rounded-md shadow-lg flex items-center justify-center w-20 h-20"
            >
              <span className="text-xl font-serif">{journey.date}</span>
            </motion.div>

            <div className="md:w-1/2">
              <motion.h3
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-serif text-pink-800"
              >
                {journey.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg font-serif text-white mt-2"
              >
                {journey.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
