import Logo from "@/app/Logo.svg";
import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col  pt-12 pb-5 px-10">
      <div className="h-[20rem] w-full">
        <TextHoverEffect text="CoachFit" />
      </div>
      <div className="flex justify-between  items-center">
        <div>
          <div className="gap-2 flex items-end">
            <Image
              src={Logo}
              width={30}
              height={30}
              alt="Logo de coachFit"
              className="w-8 h-8"
            />
            <span className="text-muted-foreground tracking-wider">
              @Adrien Legeleux
            </span>
          </div>
          <p className="ml-1 mt-2 text-muted-foreground text-xs">© CoachFit</p>
        </div>
        <div className="">
          <Button variant="link">Mentions légales</Button>
          <Button variant="link">Qui sommes-nous</Button>
        </div>
      </div>
    </div>
  );
};
