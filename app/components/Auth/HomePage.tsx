"use client";
import { Spotlight } from "@/components/aceternity/Spotlight";
import Image from "next/image";
import Logo from "@/app/Logo.png";
import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="orange"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full flex items-center flex-col justify-center pt-20 md:pt-0">
          <motion.div>
            <Image
              src={Logo}
              width={30}
              height={30}
              alt="logo de coachFit"
              className="h-20 w-20"
            />
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
            CoachFit <br /> is the solution for you.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-400 dark:text-neutral-300 max-w-lg leading-loose text-center mx-auto">
            CoachFit effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div>
    </div>
  );
};
