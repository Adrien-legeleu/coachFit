"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuizProps } from "../QuizClient/QuizClient";
import { toast } from "react-toastify";
import { useState } from "react";
import { updateCoachFour } from "@/lib/actionsQuizCoach";

// Options de type de clients que le coach souhaite
const clientTypes = [
  {
    title: "Débutants",
    description: "Clients qui commencent leur parcours de fitness.",
  },
  {
    title: "Intermédiaires",
    description: "Clients avec une certaine expérience en activité physique.",
  },
  {
    title: "Avancés",
    description: "Clients qui cherchent à améliorer leurs performances.",
  },
  {
    title: "Seniors",
    description: "Clients expérimentés qui visent des défis intenses.",
  },
  {
    title: "Réhabilitation",
    description: "Clients ayant besoin d'un accompagnement spécifique.",
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
        await updateCoachFour(valueSelected, user.id);
        toast.success("Formulaire validé avec succès !");
        nextQuizId();
      } catch (error) {
        toast.error("Erreur lors de la validation du formulaire !");
      }
    } else {
      toast.info("Veuillez choisir un type de client");
    }
  };

  const selectLevel = (idx: number, value: string) => {
    if (isSelected.includes(idx)) {
      setIsSelected((prev) => prev.filter((item) => item !== idx));
      setValueSelected((prev) => prev.filter((item) => item !== value));
    } else {
      setIsSelected((prev) => [...prev, idx]);
      setValueSelected((prev) => [...prev, value]);
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Card className="w-1/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Quel type de clients souhaitez-vous avoir ?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {clientTypes.map((client, idx) => {
            return (
              <div
                key={`level-${idx}`} // Utilisation d'un format de clé unique
                className={`shadow-2xl   shadow-neutral-200/50 dark:shadow-neutral-800 p-3 dark:bg-neutral-900 dark:border-neutral-700/70 border-neutral-200/70 border-[1px] rounded-2xl flex items-center cursor-pointer ease-in-out duration-200 ${
                  isSelected.includes(idx)
                    ? "bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-600"
                    : "dark:bg-neutral-800 bg-neutral-50"
                }`}
                onClick={() => selectLevel(idx, client.title)}
              >
                <h3 className="flex-1">{client.title}</h3>
                <p className="text-xs  flex-1 text-center text-muted-foreground">
                  {client.description}
                </p>
              </div>
            );
          })}
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
