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
import { useState } from "react";
import { updateCoachTwo } from "@/lib/actionsQuizCoach";
import { year_exp } from "@/data/dataCoach";

// Définition du type pour les options d'expérience

// Options d'expérience pour les coachs

// Composant principal
export const Two = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const [valueSelected, setValueSelected] = useState<string>("");
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);

    if (valueSelected) {
      try {
        await updateCoachTwo(valueSelected, user.id);
        toast.success("Formulaire validé avec succès !");
        nextQuizId();
      } catch (error) {
        toast.error("Erreur lors de la validation du formulaire !");
      }
    } else {
      toast.info("Veuillez choisir une case");
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
            Quel est votre niveau d'expérience en coaching ?
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-5 items-end">
          {year_exp.map((exp, idx) => (
            <div
              key={`level-${idx}`} // Utilisation d'un format de clé unique
              className={`shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-800 py-7 px-4 dark:bg-neutral-900 dark:border-neutral-700/70 border-neutral-200/70 border-[1px] rounded-2xl flex items-center justify-center flex-col gap-3 cursor-pointer ease-in-out duration-200 ${
                isSelected === idx
                  ? "bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-600"
                  : "dark:bg-neutral-800 bg-neutral-50"
              }`}
              onClick={() => selectLevel(idx, exp.value)}
            >
              <h3>{exp.title}</h3>
              <p className="text-xs max-w-[18rem] text-muted-foreground text-center">
                {exp.description}
              </p>
            </div>
          ))}
        </CardContent>
        <CardFooter className="justify-end gap-4">
          <Button type="button" onClick={backQuizId} variant={"secondary"}>
            Revenir en arrière
          </Button>
          <Button type="submit">Continuer</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
