/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */

"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion"

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e : any) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", mouseMove)
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    return (
        <motion.div animate={{ x: position.x + 10, y: position.y + 10 }} className="w-12 h-12 z-[999] fixed hidden md:block rounded-full border-[2px] border-solid border-white">

        </motion.div>
    );
};

export default Cursor;