"use client";

import AnimatedButton from "@/components/gsap/animated-button";
import ChangingTexts from "@/components/gsap/changing-text";
import FloatingText from "@/components/gsap/floating-text";
import Cursor from "@/components/ui/cursor/Cursor";
import ContactIcon from "@/shared/icons/icons";

export default function Home() {
  return (
    <section
      className="h-screen"
      style={{ backgroundImage: "url('/banner-background-one.jpg')" }}
    >
      <Cursor />
      <div className="max-w-7xl flex flex-col md:flex-row justify-between md:px-6 mx-auto">
        <div className="md:pt-[15%] py-10 md:py-0 text-center md:text-left px-4 md:px-0 md:text-5xl text-xl order-2 md:order-1">
          <span className="text-base">Hi,</span>
          <div className="md:py-8 py-4">I am Md Erazul Islam, a</div>
          <div>
            <ChangingTexts
              texts={[
                "Full Stack Developer",
                "Front End Developer",
                "Backend Developer",
              ]}
            />
          </div>
          <div className="pt-4 md:pt-8 flex justify-center md:justify-start">
            <AnimatedButton
              href={
                "/https://drive.google.com/file/d/1bLd9PxDWIXiIo1c8N1zpYOCdup-k28kQ/view?usp=drive_link"
              }
              label={"Resume"}
            />
          </div>
          <div className="hidden md:block">
            <h1 className="pt-4 md:pt-8 text-base">Find me on</h1>
            <div>
              <ContactIcon />
            </div>
          </div>
        </div>
        <div className="order-1 relative md:order-2">
          <div className="absolute z-0 md:top-64 top-36 md:left-28 left-10">
            <FloatingText
              className="md:text-6xl text-4xl "
              text="Web Developer"
            />
          </div>
          <img
            alt="taosif"
            className="max-h-screen relative z-10 w-full max-w-md md:max-w-full"
            src="demo.png"
          />
        </div>
      </div>
    </section>
  );
}
