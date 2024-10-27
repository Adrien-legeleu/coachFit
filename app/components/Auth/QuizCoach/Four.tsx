"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuizProps } from "./QuizCoach";
import { toast } from "react-toastify";
import { updateUserFour } from "@/lib/actionsQuizClient";
import { useState } from "react";

const goals = [
  {
    title: "Améliorer ma condition",
  },
  {
    title: "Réduire mon stress",
  },
  {
    title: "Gagner en endurance",
  },
  {
    title: "Renforcer ma musculature",
  },
  {
    title: "Optimiser mon sommeil",
  },
];

export const Four = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const [valueSelected, setValueSelected] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState<number[]>([]);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    if (valueSelected.length > 0) {
      try {
        await updateUserFour(valueSelected, user.id);
        toast.success("Formulaire validé avec succès !");
        nextQuizId();
      } catch (error) {
        toast.error("Erreur lors de la validation du formulaire !");
      }
    } else {
      toast.info("Veuillez choisir un level");
    }
  };
  const selectLevel = (idx: number, value: string) => {
    if (isSelected.includes(idx)) {
      setIsSelected((prev) => prev.filter((item) => item !== idx));
      setValueSelected((prev) => prev.filter((item) => item !== value));
    } else {
      // Si non sélectionné, on l'ajoute aux états
      setIsSelected((prev) => [...prev, idx]);
      setValueSelected((prev) => [...prev, value]);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Card className="w-1/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Quel est votre but ?l
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {goals.map((goa: any, idx: number) => {
            return (
              <div
                key={`level : ` + idx}
                className={`shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-800 p-3 dark:bg-neutral-900 dark:border-neutral-700/70  border-neutral-200/70  border-[1px] rounded-2xl flex items-center   cursor-pointer ease-in-out duration-200 ${
                  isSelected.includes(idx)
                    ? "bg-neutral-100 dark:bg-neutral-950"
                    : "dark:bg-neutral-800 bg-neutral-50"
                }`}
                onClick={() => selectLevel(idx, goa.title)}
              >
                <h3>{goa.title}</h3>
              </div>
            );
          })}
        </CardContent>
        <CardFooter className="justify-end gap-4  ">
          <Button type="button" onClick={backQuizId} variant={"secondary"}>
            Revenir en arrière
          </Button>
          <Button type="submit">Continuer</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
