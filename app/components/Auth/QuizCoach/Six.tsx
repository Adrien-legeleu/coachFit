"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { QuizProps } from "./QuizCoach";
import { toast } from "react-toastify";
import { updateUserSix } from "@/lib/actionsQuizClient";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { updateCoachSix } from "@/lib/actionsQuizCoach";

export const Six = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const router = useRouter();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    try {
      const formData = new FormData(event.currentTarget); // Utiliser currentTarget pour obtenir le formulaire
      await updateCoachSix(formData, user.id);

      toast.success("Succès , redirection vers votre tableau de bord !");
      router.push("/coach/dashboard");
    } catch (error) {
      console.error(error); // Log de l'erreur pour débogage
      toast.error("Erreur lors de la validation du formulaire !");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <Card className="w-1/3 mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Dernière ligne droite !
          </CardTitle>
          <CardDescription className="text-center">
            Envie de vous décrire mieux ?
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center ">
          <Textarea
            className="min-h-40"
            placeholder="Votre bio"
            name="bio"
            id="bio"
          />
        </CardContent>
        <CardFooter className="justify-end gap-4">
          <Button type="button" onClick={backQuizId} variant={"secondary"}>
            Revenir en arrière
          </Button>
          <Button type="submit">Finir</Button>
        </CardFooter>
      </Card>
    </form>
  );
};
