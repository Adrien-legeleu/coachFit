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

export const One = ({ user, backQuizId, nextQuizId }: QuizProps) => {
  const onSubmit = async (event: any) => {
    event.preventDefault();
    console.log(user);
    try {
      await updateUserOne(new FormData(event.target), user.id);
      toast.success("formulaire validé vec succès !");
    } catch (error) {
      toast.error("erreur lors de la validation du formulaire !");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Vos informations essentiels
          </CardTitle>
          <CardDescription className="text-center ">
            Remplissez votre poids , age etc
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-5 my-4 items-end ">
          <div>
            <Label htmlFor="name" className="text-muted-foreground">
              Nom
            </Label>
            <Input
              name="name"
              type="text"
              id="name"
              defaultValue={user.name ?? ""}
              required
            />
          </div>
          <div>
            <Label htmlFor="age" className="text-muted-foreground">
              Age
            </Label>
            <Input name="age" id="age" type="number" min={12} required />
          </div>
          <div>
            <Label htmlFor="weight" className="text-muted-foreground">
              Poids en kg
            </Label>
            <Input name="weight" id="weight" type="number" min={20} required />
          </div>
          <Select required name="sex">
            <SelectTrigger>
              <SelectValue placeholder="Selectionnez votre sexe" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sexe</SelectLabel>
                <SelectItem value="female">Femme</SelectItem>
                <SelectItem value="male">Homme</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter className="justify-end gap-4  ">
          <Button type="button" onClick={backQuizId} variant={"secondary"}>
            Revenir en arrière
          </Button>
          <Button type="submit" onClick={nextQuizId}>
            Continuer
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
