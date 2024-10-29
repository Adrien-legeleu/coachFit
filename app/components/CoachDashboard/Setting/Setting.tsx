"use client";
import { getUser } from "@/lib/actionsUser";
import React, { useEffect, useState } from "react";

import SettingForm from "./SettingForm";
import { useCoachSettingContext } from "@/context/coachSettingContext";
import { getCoach } from "@/lib/actionsCoach";

export default function Setting() {
  const { setCoach, isLoadingFalse, isLoadingTrue } = useCoachSettingContext();
  useEffect(() => {
    const fetchUser = async () => {
      isLoadingTrue();
      try {
        const userData = await getUser();
        const CoachData = await getCoach(userData.id);
        isLoadingFalse();
        setCoach(CoachData);
      } catch (error) {
        console.error("erreur fetching coach");
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <SettingForm />
    </div>
  );
}
