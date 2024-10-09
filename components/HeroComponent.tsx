"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/TypewriterEffect";

export default function HeroComponent() {
  return (
    <div className="h-[100vh] w-full dark:bg-black bg-black-100  dark:bg-grid-white/[0.2] bg-grid-white/[0.03] relative flex items-center justify-center overflow-hidden flex-col pt-32 pb-5 ">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="-top-40 -left-10 md:-left-60 md:-top-35 w-[50vw] h-screen"
        fill="gray"
      />

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-2 md:gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-7xl font-bold text-white text-center">
          SAJAD ALI ISMAIL
        </div>
        <div className="font-extralight text-2xl md:text-4xl text-neutral-200 py-2 md:py-4">
          MERN Stack Web Developer
        </div>
      </motion.div>
      <TypewriterEffectSmooth
        words={[
          {
            text: "From",
          },
          {
            text: "database ",
            className: "text-blue-200",
          },
          {
            text: "to",
          },
          {
            text: "interface:",
            className: "text-blue-200",
          },
          {
            text: "creating",
          },
          {
            text: "efficient",
          },
          {
            text: "web apps",
          },
          {
            text: "with the",
          },
          {
            text: "MERN stack.",
            className: "text-blue-500 dark:text-blue-500 mb-1",
          },
        ]}
      />
      <div></div>
    </div>
  );
}
