"use client";
import { Button } from "@/components/ui/button";
import { getCoach } from "@/lib/actionsCoach";

import { getUser } from "@/lib/actionsUser";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [coach, setCoach] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        const coachData = await getCoach(userData.id);
        setUser(userData);
        setCoach(coachData);
        console.log(coachData);
      } catch (error) {
        console.error("error fetching data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      {user && user.health_conditions}
      {coach ? (
        <Link href="/coach/dashboard">
          <Button>Voir votre compte Coach </Button>
        </Link>
      ) : (
        <Link href="/coach/information">
          <Button>Devenir Coach</Button>
        </Link>
      )}
    </div>
  );
}
