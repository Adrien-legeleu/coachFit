"use client";
import { getUser } from "@/lib/actionsUser";
import React, { useEffect, useState } from "react";

import { useUserSettingContext } from "@/context/userSettingContext";
import SettingForm from "./SettingForm";

export default function Setting() {
  const { setUser, isLoadingFalse, isLoadingTrue } = useUserSettingContext();
  useEffect(() => {
    const fetchUser = async () => {
      isLoadingTrue();
      try {
        const userData = await getUser();
        isLoadingFalse();
        setUser(userData);
      } catch (error) {
        console.error("erreur fetching user");
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {" "}
      <SettingForm />
    </div>
  );
}
