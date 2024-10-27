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
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    try {
      const formData = new FormData(event.currentTarget); // Utiliser currentTarget pour obtenir le formulaire
      await updateUserOne(formData, user.id);
      toast.success("Formulaire validé avec succès !");
      nextQuizId(); // Appeler nextQuizId ici après succès
    } catch (error) {
      console.error(error); // Log de l'erreur pour débogage
      toast.error("Erreur lors de la validation du formulaire !");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-2xl tracking-wide">
            Vos informations essentielles
          </CardTitle>
          <CardDescription className="text-center ">
            Remplissez votre poids, âge, etc.
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
              defaultValue={user?.name ?? ""}
              required
            />
          </div>
          <div>
            <Label htmlFor="age" className="text-muted-foreground">
              Âge
            </Label>
            <Input name="age" id="age" type="number" min={12} required />
          </div>
          <div>
            <Label htmlFor="height" className="text-muted-foreground">
              Taille en cm
            </Label>
            <Input name="height" id="height" type="number" min={90} required />
          </div>
          <div>
            <Label htmlFor="tel" className="text-muted-foreground">
              tel
            </Label>
            <Input name="tel" id="tel" type="tel" required />
          </div>
          <div>
            <Label htmlFor="weight" className="text-muted-foreground">
              Poids en kg
            </Label>
            <Input
              name="weight"
              step="0.1"
              id="weight"
              type="number"
              min={20}
              required
            />
          </div>
          <Select required name="sex">
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez votre sexe" />
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