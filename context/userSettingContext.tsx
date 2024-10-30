"use client";
import { getUser } from "@/lib/actionsUser";
import { User } from "@/type/User";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: Boolean;
  isLoadingFalse: () => void;
  isLoadingTrue: () => void;
}

export const UserSettingContext = createContext<ContextProps>({
  user: null,
  setUser: () => {},
  isLoading: true,
  isLoadingFalse: () => {},
  isLoadingTrue: () => {},
});

export const UserSettingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setisLoading] = useState(true);
  const isLoadingFalse = () => {
    setisLoading(false);
  };
  const isLoadingTrue = () => {
    setisLoading(true);
  };
  const fetchUser = async () => {
    try {
      const userData = await getUser();
      setUser(userData);
      console.log(userData);
    } catch (error) {
      console.error("user not found");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserSettingContext.Provider
      value={{ user, setUser, isLoading, isLoadingFalse, isLoadingTrue }}
    >
      {children}
    </UserSettingContext.Provider>
  );
};

export const useUserSettingContext = () => {
  return useContext(UserSettingContext);
};
