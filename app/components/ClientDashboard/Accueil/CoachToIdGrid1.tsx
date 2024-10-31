import { CoachAccueilProps } from "@/app/client/dashboard/[id]/page";
import { Separator } from "@/components/ui/separator";

import React from "react";

export default function CoachToIdGrid1({ coachToId }: CoachAccueilProps) {
  return (
    <div className=" p-6 space-y-12">
      <div className="space-y-6">
        <ul className="flex items-center flex-wrap gap-4">
          <li className="px-5  py-2 rounded-full text-sm capitalize bg-orange-200 border-[1px] border-orange-500 text-orange-800 dark:text-orange-900 dark:bg-orange-300 dark:border-orange-600">
            Mes Spécialisations
          </li>
          {coachToId?.speciality?.map((spe: any, idx: number) => {
            return (
              <li
                className="px-5  py-2 rounded-full text-sm capitalize bg-orange-100 border-[1px] border-orange-400 text-orange-700 dark:text-orange-800 dark:bg-orange-200 dark:border-orange-500"
                key={"spe coachFit number : " + idx}
              >
                {spe.title}
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center flex-wrap gap-4">
          <li className="px-5  py-2 rounded-full text-sm capitalize bg-orange-200 border-[1px] border-orange-500 text-orange-800 dark:text-orange-900 dark:bg-orange-300 dark:border-orange-600">
            Types de clients
          </li>
          {coachToId?.type_clients?.map((type: any, idx: number) => {
            return (
              <li
                className="px-5  py-2 rounded-full text-sm capitalize bg-orange-100 border-[1px] border-orange-400 text-orange-700 dark:text-orange-800 dark:bg-orange-200 dark:border-orange-500"
                key={"type de clients coachFit number : " + idx}
              >
                {type.title}
              </li>
            );
          })}
        </ul>
      </div>
      <p className="text-4xl leading-[3.2rem] font-medium tracking-wider capitalize">
        {coachToId.bio
          ? coachToId.bio
          : "Ce coach n'as pas de bio pour l'instant"}
      </p>
      <div className="space-y-5">
        <h3 className="text-xl font-semibold text-muted-foreground">
          A propos de {coachToId.name}
        </h3>
        <div className="space-y-4">
          <ul className="flex items-start gap-1 flex-col">
            {coachToId.diplome?.map((dipl: any, idx: number) => {
              return (
                <li className="px-4 py-1 rounded-full border-[1px] border-neutral-500 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800">
                  {dipl.title}
                </li>
              );
            })}
          </ul>
          <Separator />
          <div>avis</div>
        </div>
      </div>
    </div>
  );
}
