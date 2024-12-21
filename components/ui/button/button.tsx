/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */

"use client"


import { motion } from "framer-motion";
import Link from "next/link";

export const waveVariants = {
    initial: {
        y: 0,
    },
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export default function FloatingButton() {
    return (
        <motion.div
            className="mt-6"
            variants={waveVariants}
            initial="initial"
            animate="animate"
        >
            <Link href={'https://drive.google.com/file/d/1hG1fjMCmcD773wxZvwA4Oao3Dyhm9Dzs/view?usp=sharing'}>
                <motion.button
                    className="relative border border-pink-700 text-white w-28 h-12 rounded-sm shadow-lg overflow-hidden focus:outline-none "
                    initial="initial"
                    whileHover="hover"

                >
                    Resume
                </motion.button>
            </Link>
        </motion.div>
    );
}

