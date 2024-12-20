/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */

import { motion } from "framer-motion"

import { TextGenerateEffect } from "@/components/ui/about-ui/text-generate";
import { BackgroundLines } from "@/components/ui/background-line";



export default function Home() {
  const words = ` A passionate Web Developer with a strong eye for design and a knack for crafting seamless, user-friendly experiences.`

  return (
    <section >
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="lg:flex mt-12 justify-between">
          <img alt="Taosif" className="w-52 h-52 border border-pink-700 rounded-full lg:ml-[340px]" src="https://i.ibb.co.com/Lt3jQHy/Untitled-design.png" />
          <div className="lg:mr-[240px] lg:ml-[240px]">
            <div className="text-4xl font-serif">
              Hi, I am Md. Erazul Islam
            </div>
            <TextGenerateEffect words={words} />
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
} 
