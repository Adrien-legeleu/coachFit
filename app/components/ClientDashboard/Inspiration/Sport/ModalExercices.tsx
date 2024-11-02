"use client";

import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconRotate,
} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface SportRandomProps {
  exercises: any[];
}

export default function SportRandom({ exercises }: SportRandomProps) {
  const [idxExercice, setIdxExercice] = useState(0);

  const nextExercice = () => {
    setIdxExercice((prev) => (prev + 1 < exercises.length ? prev + 1 : prev));
  };
  const previousExercice = () => {
    setIdxExercice((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const restartExercices = () => {
    setIdxExercice(0);
  };

  return (
    <div className="p-6 w-full overflow-y-auto">
      {exercises.length === 0 ? (
        <div>Aucun exercice disponible</div>
      ) : (
        <div key={`exercice-${idxExercice}`} className="space-y-8">
          <div className="flex justify-between gap-8">
            <h2 className="text-3xl font-bold tracking-wide">
              {exercises[idxExercice]?.name ?? ""}
            </h2>
            <div className="flex gap-4">
              {idxExercice > 0 && (
                <Button variant="secondary" onClick={previousExercice}>
                  <IconArrowNarrowLeft className="h-4 w-4" />
                </Button>
              )}
              {exercises.length - 1 === idxExercice ? (
                <div className="flex gap-2">
                  <DialogClose asChild>
                    <Button type="button">Terminer</Button>
                  </DialogClose>
                  <Button onClick={restartExercices} variant={"secondary"}>
                    <IconRotate className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button onClick={nextExercice}>
                  <IconArrowNarrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <ul className="flex justify-between gap-4">
            <li className="rounded-full bg-amber-500 border-[2px] text-neutral-800 border-amber-600 py-2 px-5">
              {exercises[idxExercice]?.bodyPart ?? ""}
            </li>
            <div className="flex gap-2">
              <li className="rounded-full bg-amber-300 border-[2px] text-neutral-800 border-amber-400 py-2 px-5">
                {exercises[idxExercice]?.target ?? ""}
              </li>
              {exercises[idxExercice]?.secondaryMuscles?.map(
                (muscle: string, idx: number) => (
                  <li
                    key={`muscle-${idx}`}
                    className="rounded-full bg-amber-200 border-[2px] text-neutral-800 border-amber-300 py-2 px-5"
                  >
                    {muscle}
                  </li>
                )
              )}
            </div>
          </ul>
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center w-full">
              <Image
                unoptimized
                width={250}
                height={250}
                src={exercises[idxExercice]?.gifUrl ?? ""}
                alt="image exercice"
                className="w-2/3  rounded-3xl object-contain"
              />
            </div>
            <div className="space-y-2">
              {exercises[idxExercice]?.instructions?.map(
                (instr: string, idx: number) => (
                  <div key={`instruction-${idx}`}>
                    <span className="font-semibold">{idx}</span>: {instr}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
