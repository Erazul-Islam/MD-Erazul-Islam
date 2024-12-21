/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */

"use client";

import { motion } from "framer-motion";

// Reusable variant for waving border animation
export const waveBorderVariants = {
    animate: {
        // Using random border-radius to create the wave effect
        borderRadius: [
            "50%", // Circle
            "40% 60% 50% 50%", // Random shape
            "60% 40% 50% 50%", // Another random shape
            "50%", // Back to circle
        ],
        transition: {
            duration: 3, // Duration of each wave
            repeat: Infinity, // Repeat infinitely
            ease: "easeInOut", // Smooth transition
        },
    },
};

export default function WavyImage() {
    return (
        <motion.div
            className="w-52 h-52 border-4 border-pink-700 rounded-full overflow-hidden lg:ml-[340px]"
            variants={waveBorderVariants}  // Assign the reusable animation variant
            initial="animate" // Start animation immediately
            animate="animate" // Loop the animation
        >
            <img
                alt="Taosif"
                className="w-full h-full object-cover" // Ensures the image is fully covered within the container
                src="https://i.ibb.co/Lt3jQHy/Untitled-design.png"
            />
        </motion.div>
    );
}


