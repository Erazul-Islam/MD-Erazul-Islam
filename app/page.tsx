/* eslint-disable prettier/prettier */

import { TextGenerateEffect } from "@/components/ui/about-ui/text-generate";
import { BackgroundLines } from "@/components/ui/background-line";
import Image from "next/image";

export default function Home() {

  

  const words = `Hi there! I’m MD. Erazul Islam a passionate Web Developer with a strong eye for design and a knack for crafting seamless, user-friendly experiences. I specialize in building modern, responsive, and scalable websites and applications that bring ideas to life.`

  return (
    <section >
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        
        <TextGenerateEffect className="text-right " words={words} />
      </BackgroundLines>
    </section>
  );
}
