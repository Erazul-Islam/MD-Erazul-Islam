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
      title: 'Completed My First Frontend Project',
      description:
        'In July 2023, I completed my first frontend project. It was a challenging but rewarding experience that enhanced my skills in React, CSS, and JavaScript.',
    },
    {
      date: 'August 2023',
      title: 'Explored Backend Development',
      description:
        'By August 2023, I ventured into backend development, working with Node.js, Express, and MongoDB to build RESTful APIs and manage databases efficiently.',
    },
  ];

  return (
    <div className="container mx-auto p-8 md:p-16 ">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-extrabold text-center text-white mb-12"
      >
        My Career Journey
      </motion.h1>
      <div className="space-y-20">
        {journeys.map((journey, index) => (
          <motion.div
            key={index}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-10`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="border border-pink-800 text-white p-6 rounded-md shadow-lg flex items-center justify-center w-20 h-20"
            >
              <span className="text-xl font-serif">{journey.date}</span>
            </motion.div>

            <div className="md:w-1/2 mt-4">
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
