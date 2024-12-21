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

  const milestones = [
    { year: "June 2023", event: "Started my first job as a Junior Developer", description: "I embarked on my journey to become a full-stack developer in June 2023. Motivated by a deep interest in technology and problem-solving, I started with web development and progressively built a strong foundation in front-end and back-end technologies" },
    { year: " 2023", event: "Started my first job as a Junior Developer", description: "I embarked on my journey to become a full-stack developer in June 2023. Motivated by a deep interest in technology and problem-solving, I started with web development and progressively built a strong foundation in front-end and back-end technologies" },
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
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
            className=" flex-col md:flex-row items-center justify-center gap-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="border border-pink-800 text-white p-6 rounded-md shadow-lg flex items-center justify-center w-20 h-20"
            >
              <span className="text-xl font-serif">{milestone.year}</span>
            </motion.div>

            <div className="md:w-1/2">
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-serif text-pink-800"
              >
                {milestone.event}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-white mt-2"
              >
                {milestone.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Journey;

