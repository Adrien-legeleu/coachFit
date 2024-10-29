import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Select } from "antd"; // Assurez-vous d'importer Select
import { toast } from "react-toastify";
import { useState } from "react";
import { updateCoachThree } from "@/lib/actionsQuizCoach";
import { QuizProps } from "./QuizCoach";
import { diplomes } from "@/data/dataCoach";

// Options de type de diplômes que le coach souhaite

export const Three = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const [valueSelected, setSelectedValues] = useState<string[]>([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);

    if (valueSelected.length > 0) {
      try {
        await updateCoachThree(valueSelected, user.id); // Assurez-vous que cette fonction attend un tableau de strings
        toast.success("Formulaire validé avec succès !");
        nextQuizId();
      } catch (error) {
        toast.error("Erreur lors de la validation du formulaire !");
      }
    } else {
      toast.info("Veuillez choisir un diplôme");
    }
  };

  const handleSelectChange = (value: string[]) => {
    setSelectedValues(value);
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Card className="w-1/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Quel diplôme souhaitez-vous obtenir ?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Select
            mode="multiple"
            placeholder="Veuillez sélectionner"
            onChange={handleSelectChange} // Appelle la fonction correctement
            style={{ width: "100%" }}
            options={diplomes}
          />
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
