"use client";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jacques",
    username: "@jacques",
    body: "Je n'ai jamais vu quelque chose comme ça auparavant. C'est incroyable, j'adore CoachFit.",
    img: "https://avatar.vercel.sh/jacques",
  },
  {
    name: "Juliette",
    username: "@juliette",
    body: "Honnêtement, je suis sans mots. Cette application dépasse mes attentes !",
    img: "https://avatar.vercel.sh/juliette",
  },

  {
    name: "Sophie",
    username: "@sophie",
    body: "CoachFit a totalement changé ma routine d'entraînement ! Je recommande à 100%.",
    img: "https://avatar.vercel.sh/sophie",
  },
  {
    name: "Claire",
    username: "@claire",
    body: "Depuis que j'utilise CoachFit, je me sens plus en forme et suivi par des professionnels !",
    img: "https://avatar.vercel.sh/claire",
  },
  {
    name: "Antoine",
    username: "@antoine",
    body: "Les programmes sont variés et adaptés. CoachFit est exactement ce dont j'avais besoin.",
    img: "https://avatar.vercel.sh/antoine",
  },
  {
    name: "Camille",
    username: "@camille",
    body: "Je progresse de semaine en semaine avec les conseils des coachs, merci CoachFit !",
    img: "https://avatar.vercel.sh/camille",
  },
  {
    name: "Maxime",
    username: "@maxime",
    body: "Je recommande CoachFit à tous mes amis. Super pratique pour garder la forme en ligne !",
    img: "https://avatar.vercel.sh/maxime",
  },
  {
    name: "Léa",
    username: "@lea",
    body: "L'application est facile à utiliser et les coachs sont super motivants. CoachFit est top !",
    img: "https://avatar.vercel.sh/lea",
  },
  {
    name: "Lucas",
    username: "@lucas",
    body: "Chaque séance me motive davantage. CoachFit a transformé mon entraînement !",
    img: "https://avatar.vercel.sh/lucas",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-5",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="42" height="42" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm">{body}</blockquote>
    </figure>
  );
};

export const HomeNotice = () => {
  return (
    <div className="max-x-[1300px] mx-auto flex flex-col items-center justify-center gap-4 mt-12">
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-3xl font-bold tracking-wide"
      >
        Ce que les gens disent
      </motion.h2>
      <p className="text-muted-foreground text-lg">
        Ne vous contentez pas de nous croire sur parole. Voici ce que{" "}
        <strong>de vraies personnes</strong> disent à propos de CoachFit
      </p>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden ">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};
