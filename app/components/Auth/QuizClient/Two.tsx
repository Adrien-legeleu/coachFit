"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuizProps } from "./QuizClient";
import { toast } from "react-toastify";
import { updateUserTwo } from "@/lib/actionsQuizClient";
import { useState } from "react";

const activityLevels = [
  {
    title: "Initiation",
    description:
      "Jusqu'à 2h d'activité hebdomadaire : pour une mise en forme légère et progressive.",
  },
  {
    title: "Équilibre",
    description:
      "Entre 2h et 5h d'activité par semaine : pour maintenir un mode de vie actif.",
  },
  {
    title: "Performance",
    description:
      "Entre 5h et 8h d'activité par semaine : idéal pour progresser et se renforcer.",
  },
  {
    title: "Excellence",
    description:
      "Plus de 8h d'activité par semaine : pour les passionnés et adeptes de défis intenses.",
  },
];

export const Two = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const [valueSelected, setValueSelected] = useState("");
  const [isSelected, setIsSelected] = useState(Number);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    if (valueSelected !== "") {
      try {
        await updateUserTwo(valueSelected, user.id);
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
    setIsSelected(idx);
    setValueSelected(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Quel est votre rythme d'activité physique ?
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-5  items-end ">
          {activityLevels.map((level: any, idx: number) => {
            return (
              <div
                key={`level : ` + idx}
                className={`shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-800 py-7 px-4 dark:bg-neutral-900 dark:border-neutral-700/70  border-neutral-200/70  border-[1px] rounded-2xl flex items-center justify-center flex-col gap-3 cursor-pointer ease-in-out duration-200 ${
                  isSelected === idx
                    ? "bg-neutral-100 dark:bg-neutral-950"
                    : "dark:bg-neutral-800 bg-neutral-50"
                }`}
                onClick={() => selectLevel(idx, level.title)}
              >
                <h3 className="">{level.title}</h3>
                <p className="text-xs max-w-[18rem] text-muted-foreground text-center">
                  {level.description}
                </p>
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
