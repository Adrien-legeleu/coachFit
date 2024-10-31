import CoachToIdGrid1 from "@/app/components/ClientDashboard/Accueil/CoachToIdGrid1";
import CoachToIdGrid2 from "@/app/components/ClientDashboard/Accueil/CoachToIdGrid2";

import { getCoachToId } from "@/lib/actionsAllCoachs";
import { Coach } from "@/type/Coach";

import React from "react";
import { toast } from "react-toastify";

interface ParamsCoachId {
  params: {
    id: string;
  };
}
export interface CoachAccueilProps {
  coachToId: Coach;
}

export default async function pageCoachId({ params }: ParamsCoachId) {
  const coachToId = await getCoachToId(params.id);
  if (!coachToId) {
    toast.info("coach est pas trouvé à l'id:" + params.id);
  }
  return (
    <div className="grid-cols-60/40 grid  w-full p-16 overflow-y-auto">
      <CoachToIdGrid1 coachToId={coachToId} />
      <CoachToIdGrid2 coachToId={coachToId} />
    </div>
  );
}
