/* eslint-disable prettier/prettier */

import { TextGenerateEffect } from "@/components/ui/about-ui/text-generate";
import { BackgroundLines } from "@/components/ui/background-line";

export default function Home() {


  const words = `I am a Full Stack developer`

  return (
    <section className="">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <TextGenerateEffect words={words} />
      </BackgroundLines>
    </section>
  );
}
