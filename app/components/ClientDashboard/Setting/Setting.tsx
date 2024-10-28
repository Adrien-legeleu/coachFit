"use client";
import { getUser } from "@/lib/actionsUser";
import React, { useEffect, useState } from "react";
import SettingNoForm from "./SettingNoForm";
import { useUserSettingContext } from "@/context/userSettingContext";

export default function Setting() {
  const [isFormSetting, setIsFormSetting] = useState(false);
  const { setUser } = useUserSettingContext();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("erreur fetching user");
      }
    };
    fetchUser();
  }, []);
  const closeFormSetting = () => {
    setIsFormSetting(false);
  };
  const openFormSetting = () => {
    setIsFormSetting(true);
  };

  return (
    <div>
      {" "}
      <SettingNoForm openFormSetting={openFormSetting} />
    </div>
  );
}
