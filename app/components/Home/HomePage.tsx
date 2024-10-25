"use client";
import { Spotlight } from "@/components/aceternity/Spotlight";
import Image from "next/image";
import Logo from "@/app/Logo.svg";
import { motion } from "framer-motion";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="orange"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex items-center flex-col justify-center pt-20 md:pt-0">
          <motion.div
            initial={{ scale: 6, opacity: 0, y: 150 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={Logo}
              width={30}
              height={30}
              alt="logo de coachFit"
              className="h-20 w-20"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>
                {" "}
                CoachFit <br /> is the solution for you.
              </span>
            </AnimatedShinyText>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
            className="mt-4 font-normal text-base text-muted-foreground max-w-lg leading-loose text-center mx-auto"
          >
            CoachFit effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </motion.p>
        </div>
      </div>
    </div>
  );
};
