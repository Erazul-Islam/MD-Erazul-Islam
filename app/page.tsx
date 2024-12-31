/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */

import { TextGenerateEffect } from "@/components/ui/about-ui/text-generate";
import { BackgroundLines } from "@/components/ui/background-line";
import FloatingButton from "@/components/ui/button/button";
import Cursor from "@/components/ui/cursor/Cursor";



export default function Home() {
  const words = ` A passionate Web Developer with a strong eye for design and a knack for crafting seamless, user-friendly experiences.`

  return (
    <section >
      <Cursor/>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <div className="lg:flex lg:mt-12 justify-between">
          <img alt="Taosif" className="w-52 lg:ml-[310px] ml-20 h-52 border border-pink-700 rounded-full " src="https://res.cloudinary.com/djs5y6ey5/image/upload/v1735572158/web-photoaidcom-cropped_fhjkb6.png" />
          <div className="lg:mr-[240px] lg:ml-[240px]">
            <div className="text-4xl mt-4 font-serif">
              Hi, I am  <span className="text-pink-600">Md. Erazul Islam</span> 
            </div>
            <TextGenerateEffect words={words} />
            <FloatingButton />
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
} 
