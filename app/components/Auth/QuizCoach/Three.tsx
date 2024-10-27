"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select, SelectItem } from "@nextui-org/select";

import { toast } from "react-toastify";
import { useState } from "react";
import { updateCoachFour } from "@/lib/actionsQuizCoach";
import { QuizProps } from "./QuizCoach";

// Options de type de clients que le coach souhaite
const diplomes = [
  { title: "Nutrition" },
  { title: "Fitness" },
  { title: "Bien-être" },
  { title: "Réhabilitation" },
  { title: "Coaching mental" },
];

export const Three = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const [valueSelected, setSelectedValues] = useState<string[]>([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);

    if (valueSelected.length > 0) {
      try {
        await updateCoachFour(valueSelected, user.id); // Assurez-vous que cette fonction attend un tableau de strings
        toast.success("Formulaire validé avec succès !");
        nextQuizId();
      } catch (error) {
        toast.error("Erreur lors de la validation du formulaire !");
      }
    } else {
      toast.info("Veuillez choisir un type de client");
    }
  };

  // Cette fonction est appelée lorsque la sélection change
  const handleSelectChange = (values: string[]) => {
    setSelectedValues(values);
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
          <Select
            label="Vos diplômes"
            placeholder="Sélectionner un ou plusieurs diplômes"
            selectionMode="multiple"
            className="max-w-xs"
            onChange={handleSelectChange} // Mettez à jour les sélections ici
          >
            {diplomes.map((diplome, idx) => (
              <SelectItem key={idx} value={diplome.title}>
                {" "}
                {/* Ajoutez une valeur pour chaque item */}
                {diplome.title}
              </SelectItem>
            ))}
          </Select>
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
