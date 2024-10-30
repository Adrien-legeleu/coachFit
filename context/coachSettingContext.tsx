"use client";
import { getCoach } from "@/lib/actionsCoach";
import { getUser } from "@/lib/actionsUser";
import { Coach } from "@/type/Coach";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  coach: Coach | null;
  setCoach: Dispatch<SetStateAction<Coach | null>>;
  isLoading: Boolean;
  isLoadingFalse: () => void;
  isLoadingTrue: () => void;
}

export const CoachSettingContext = createContext<ContextProps>({
  coach: null,
  setCoach: () => {},
  isLoading: true,
  isLoadingFalse: () => {},
  isLoadingTrue: () => {},
});

export const CoachSettingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [coach, setCoach] = useState<Coach | null>(null);
  const [isLoading, setisLoading] = useState(true);
  const isLoadingFalse = () => {
    setisLoading(false);
  };
  const isLoadingTrue = () => {
    setisLoading(true);
  };

  const fetchCoach = async () => {
    try {
      const userData = await getUser();
      const coachData = await getCoach(userData.id);
      setCoach(coachData);
    } catch (error) {
      console.error("coach not found");
    }
  };

  useEffect(() => {
    fetchCoach();
  }, []);

  return (
    <CoachSettingContext.Provider
      value={{ coach, setCoach, isLoading, isLoadingFalse, isLoadingTrue }}
    >
      {children}
    </CoachSettingContext.Provider>
  );
};

export const useCoachSettingContext = () => {
  return useContext(CoachSettingContext);
};
