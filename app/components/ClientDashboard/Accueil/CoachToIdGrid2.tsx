import { CoachAccueilProps } from "@/app/client/dashboard/[id]/page";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function CoachToIdGrid2({ coachToId }: CoachAccueilProps) {
  const genderTranslate = (value: string | null) => {
    const genders: { [key: string]: string } = {
      male: "Homme",
      female: "Femme",
    };

    return value && genders[value] ? genders[value] : "Non spécifié";
  };

  return (
    <div className="flex justify-center h-screen relative">
      <div className="h-auto">
        <div className="bg-neutral-50 relative mt-10 p-6 space-y-4 min-w-[350px]  dark:bg-neutral-800 shadow-xl dark:shadow-2xl flex flex-col items-center shadow-black/10 dark:shadow-neutral-200/10 rounded-3xl">
          <div className="flex items-center justify-between w-full">
            <div>
              {coachToId.note ? (
                <p className="text-xs">
                  <IconStarFilled className="h-2 w-2 text-yellow-400" />
                  {coachToId.note}{" "}
                  <span className="ml-4">({coachToId?.reviews?.length})</span>
                </p>
              ) : (
                <p className="text-xs  text-muted-foreground">
                  Pas encore de note
                </p>
              )}
            </div>
            <div>
              <Badge coach={coachToId} />
            </div>
          </div>
          <Image
            src={coachToId.image ?? ""}
            alt={"profil coach caochFit de " + coachToId.name}
            width={200}
            height={200}
            className="h-48 w-48 rounded-full"
          />
          <div>
            <h3 className="text-xl font-bold text-center">{coachToId.name}</h3>

            <p className="text-lg font-semibold text-muted-foreground text-left capitalize">
              {coachToId.year_exp}
            </p>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm font-semibold text-muted-foreground text-left ">
                {coachToId.age} ans
              </p>
              <Separator orientation="vertical" className="h-4" />
              <p className="text-sm font-semibold text-muted-foreground text-left">
                {genderTranslate(coachToId?.gender)}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Tarif</h4>
              <p className=" text-muted-foreground font-semibold tracking-wide">
                {coachToId.price}€/mois
              </p>
            </div>
          </div>

          <div className="pt-5">
            <Button className="px-10 py-8  text-lg rounded-full">
              Contactez-moi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
