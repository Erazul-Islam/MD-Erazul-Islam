/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
"use client";

import { motion } from "framer-motion";
import React from "react";

// Define the motion settings for the border animation in a variable
const borderMotion = {
    initial: {
        top: "100%",
        left: "100%",
        right: "100%",
        bottom: "100%",
    },
    animate: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    transition: {
        duration: 0.6,
        ease: "easeInOut",
    },
};

// Reusable MotionButton component
export const MotionButton = () => {
    return (
        <motion.button
            className={`relative px-6 py-3 border-2 border-transparent rounded-lg text-white `}
            
            whileHover={{
                scale: 1.05, // Slight scale effect on hover
            }}
            whileTap={{
                scale: 0.95, // Shrinks the button on click
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
            }}
        >
            {/* Animated Border */}
            <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-lg"
                style={{
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                {...borderMotion}
            />
            <span>View</span>
        </motion.button>
    );
};


