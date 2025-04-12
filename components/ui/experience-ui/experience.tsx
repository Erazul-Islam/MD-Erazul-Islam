"use client";

/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  UsersIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const ExperienceCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverItem = {
    hover: {
      y: -3,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto font-serif rounded-xl border border-pink-700 overflow-hidden hover:border-pink-400 transition-colors duration-300"
      initial="hidden"
      variants={cardVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {/* Glowing header */}
      <div className="relative p-6 bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">
              N.I Bloom Investments LTD
            </h2>
            <p className="text-blue-200">
              Software Development Intern (Remote)
            </p>
          </div>
          <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
            January 2025 - February 2025
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-300 mb-6">
          Collaborated with a cross-functional team including developers and
          designers to build UI components for a custom accounting software.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: <CodeBracketIcon className="w-10 h-10 text-red-400" />,
              text: "Built responsive UI for accounting software using Next.js, Tailwind CSS, and shadcn/ui.",
            },
            {
              icon: <UsersIcon className="w-10 h-10 text-red-400" />,
              text: "Created pages for Journal, Ledger, Balance Sheet, Profit & Loss, Trial Balance, Products, and Contact.",
            },
            {
              icon: <DocumentTextIcon className="w-10 h-10 text-red-400" />,
              text: "Collaborated with developers and designers; attended daily meetings and shared progress.",
            },
            {
              icon: (
                <ArrowTopRightOnSquareIcon className="w-10 h-10 text-red-400" />
              ),
              text: "Contributed to internal docs by explaining accounting workflows in simple terms.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg border border-pink-700 cursor-default"
              variants={hoverItem}
              whileHover="hover"
            >
              {item.icon}
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="font-medium text-white mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "Tailwind CSS", "shadcn/ui", "Prisma" , "mongodb" ,"GitHub"].map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-sm border border-pink-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
