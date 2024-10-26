import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { QuizProps } from "./QuizClient";
import { toast } from "react-toastify";
import { updateUserOne } from "@/lib/actionsQuizClient";

export const Two = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    console.log(user);
    try {
      await updateUserOne(new FormData(event.target), user.id);
      toast.success("Formulaire validé avec succès !");
      nextQuizId(); // Appeler nextQuizId ici
    } catch (error) {
      toast.error("Erreur lors de la validation du formulaire !");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Quel est votre level d'activité
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-5 my-4 items-end ">
          <div className="bg-neutral-50 shadow-2xl shadow-neutral-200 dark:shadow-neutral-800 p-8 dark:bg-neutral-900  border-neutral-100 dark:border-neutral-800 border-[1px] rounded-2xl flex items-center justify-center flex-col">
            <h3 className="">Très peu</h3>
            <p className="text-xs text-muted-foreground text-center">
              moins de 2h d'activité par semaine
            </p>
          </div>
          <div className="bg-neutral-50 shadow-2xl shadow-neutral-200 dark:shadow-neutral-800 p-8 dark:bg-neutral-900  border-neutral-100 dark:border-neutral-800 border-[1px] rounded-2xl flex items-center justify-center flex-col">
            <h3 className="">moyen</h3>
            <p className="text-xs text-muted-foreground text-center">
              moins de 5h d'activité par semaine
            </p>
          </div>
          <div className="bg-neutral-50 shadow-2xl shadow-neutral-200 dark:shadow-neutral-800 p-8 dark:bg-neutral-900  border-neutral-100 dark:border-neutral-800 border-[1px] rounded-2xl flex items-center justify-center flex-col">
            <h3 className="">bien</h3>
            <p className="text-xs text-muted-foreground text-center">
              moins de 8h d'activité par semaine
            </p>
          </div>
          <div className="bg-neutral-50 shadow-2xl shadow-neutral-200 dark:shadow-neutral-800 p-8 dark:bg-neutral-900  border-neutral-100 dark:border-neutral-800 border-[1px] rounded-2xl flex items-center justify-center flex-col">
            <h3 className="">Intense</h3>
            <p className="text-xs text-muted-foreground text-center">
              plus de 8h d'activité par semaine
            </p>
          </div>
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
