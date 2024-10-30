"use client";
import { Button } from "@/components/ui/button";
import { getCoach } from "@/lib/actionsCoach";
import { getUser } from "@/lib/actionsUser";
import Link from "next/link";

import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [coach, setCoach] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        const coachData = await getCoach(userData.id);
        setUser(userData);
        setCoach(coachData);
        if (!coachData) {
          router.push("/client/dashboard");
          toast.error("Erreur , coach n'existe pas");
        }
        console.log(coachData);
      } catch (error) {
        console.error("error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {coach?.name} {coach?.price}/mois
      <Link href="/client/dashboard">
        <Button>Retourner sur votre compte</Button>
      </Link>
    </div>
  );
}
