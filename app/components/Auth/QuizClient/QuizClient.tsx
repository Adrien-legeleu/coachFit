"use client";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/actionsUser";
import { useEffect, useState } from "react";
import { One } from "./One";
import { Two } from "./Two";

export interface QuizProps {
  user: any;
  backQuizId: () => void;
  nextQuizId: () => void;
}
interface QuizComponents {
  [key: number]: JSX.Element; // Permet d'indexer avec des nombres
}
const componentQuiz = (
  user: any,
  backQuizId: () => void,
  nextQuizId: () => void
): QuizComponents => ({
  1: <One user={user} backQuizId={backQuizId} nextQuizId={nextQuizId} />,
  2: <Two user={user} backQuizId={backQuizId} nextQuizId={nextQuizId} />,
});

export const QuizClient = () => {
  const [user, setUser] = useState<any>(null);
  const [quizId, setQuizId] = useState(0);

  const backQuizId = () => {
    setQuizId(quizId - 1);
  };
  const nextQuizId = () => {
    setQuizId(quizId + 1);
  };

  const fetchUser = async () => {
    try {
      const userData = await getUser();
      setUser(userData);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="flex items-center justify-center pt-20   h-screen ">
      {quizId == 0 ? (
        <div className="flex items-center gap-8 flex-col">
          <h1 className="text-center text-5xl">Bienvuenue dans CoachFit</h1>
          <p className="text-center text-muted-foreground text-2xl max-w-4xl">
            Avant de commencer a utiliser CaochFit , Renseignez quelques
            informations avant de continuer
          </p>
          <Button onClick={() => setQuizId(1)}>Commencez</Button>
        </div>
      ) : (
        componentQuiz(user, backQuizId, nextQuizId)[quizId] || (
          <p>Écran non disponible</p>
        )
      )}
    </div>
  );
};
