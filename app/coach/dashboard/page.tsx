"use client";
import { Button } from "@/components/ui/button";
import { getCoach } from "@/lib/actionsCoach";
import { getUser } from "@/lib/actionsUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-toastify";

export default async function DashboardPage() {
  const router = useRouter();
  const user = await getUser();
  const coach = await getCoach(user.id);
  if (!coach) {
    router.push("/client/dashboard");
    toast.error("Erreur , coach n'existe pas");
    throw new Error("erreur , coach n'existe pas");
  }

  return (
    <div className="h-screen flex items-center justify-center">
      {coach.name} {coach.price}/mois
      <Button>Retourner sur votre compte</Button>
    </div>
  );
}
