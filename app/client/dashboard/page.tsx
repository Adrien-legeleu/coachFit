import { Button } from "@/components/ui/button";
import { getCoach } from "@/lib/actionsCoach";
import { getUser } from "@/lib/actionsUser";
import Link from "next/link";

import React from "react";

export default async function DashboardPage() {
  const user = await getUser();
  const coach = await getCoach(user.id);

  return (
    <div className="h-screen flex items-center justify-center">
      {user.health_conditions} uiduidudis
      {coach ? (
        <Link href="/coach/dashboard">
          <Button>Voir votre compte Coach</Button>
        </Link>
      ) : (
        <Link href="/coach/information">
          <Button>Devenir Coach</Button>
        </Link>
      )}
    </div>
  );
}
