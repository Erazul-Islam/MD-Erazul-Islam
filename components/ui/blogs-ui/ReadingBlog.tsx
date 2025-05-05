/* eslint-disable prettier/prettier */
import { Image } from "@nextui-org/react";
import Link from "next/link";

import { BackgroundGradient } from "../background-gradient";

export default function ReadingBlog() {
  const blogs = [
    {
      id: "1",
      name: "AI Interview",
      image:
        "https://res.cloudinary.com/djs5y6ey5/image/upload/v1734875172/DALL_E_2024-11-24_18.39.21_-_A_professional_setting_showing_a_job_interview_involving_artificial_intelligence._The_scene_includes_a_futuristic_AI_robot_with_a_sleek_and_humanoid_a_j2azpc.webp",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7266433136991830017",
      description: "Have you ever heard AI interview?..",
    },
    {
      id: "2",
      name: "Next js",
      image:
        "https://res.cloudinary.com/djs5y6ey5/image/upload/v1734875086/DALL_E_2024-12-07_13.43.42_-_A_sleek_and_modern_illustration_representing_Next.js_development._The_scene_includes_a_futuristic_workspace_with_a_glowing_computer_screen_displaying_uu3ymc.webp",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7271070061983875072",
      description: "Exploring the Power of Next.js..",
    },
    {
      id: "3",
      name: "React js",
      image:
        "https://res.cloudinary.com/djs5y6ey5/image/upload/v1734875210/1733424498446_byxjd7.jpg",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7270509314631450626/",
      description: "React js , the javaScript library,..",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 px-4 md:px-8 lg:px-20 mt-6">
      {blogs.map((one) => (
        <BackgroundGradient
          key={one.id}
          className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
        >
          <Image
            alt="jordans"
            className="object-contain"
            height="400"
            src={one.image}
            width="400"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            {one.name}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {one.description}
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            <Link href={one.link}><span> Read </span></Link>
          </button>
        </BackgroundGradient>
      ))}
    </div>
  );
}
