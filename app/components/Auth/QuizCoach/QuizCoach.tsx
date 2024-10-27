"use client";
import { Button } from "@/components/ui/button";
import { getUser } from "@/lib/actionsUser";
import { useEffect, useState } from "react";

import { Two } from "./Two";
import { Three } from "./Three";
import { Five } from "./Five";
import { Six } from "./Six";
import Link from "next/link";
import { One } from "./One";
import { Four } from "./Four";

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
  3: <Three user={user} backQuizId={backQuizId} nextQuizId={nextQuizId} />,
  4: <Four user={user} backQuizId={backQuizId} nextQuizId={nextQuizId} />,
  5: <Five user={user} backQuizId={backQuizId} nextQuizId={nextQuizId} />,
  6: <Six user={user} backQuizId={backQuizId} nextQuizId={nextQuizId} />,
});

export const QuizCoach = () => {
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
    <div className="flex items-center justify-center pt-16   h-screen ">
      {quizId == 0 ? (
        <div className="flex items-center gap-8 flex-col">
          <h1 className="text-center text-5xl">Envie de devenir Coach ?</h1>
          <p className="text-center text-muted-foreground text-2xl max-w-4xl">
            renseignez quelques informations avant de continuer avant de
            commencez a exercer votre profession !
          </p>
          <div className="space-x-6">
            <Link href="/client/dashboard">
              {" "}
              <Button variant={"secondary"}>Retour</Button>
            </Link>
            <Button onClick={() => setQuizId(1)}>Commencez</Button>{" "}
          </div>
        </div>
      ) : (
        componentQuiz(user, backQuizId, nextQuizId)[quizId] || (
          <p>Écran non disponible</p>
        )
      )}
    </div>
  );
};
