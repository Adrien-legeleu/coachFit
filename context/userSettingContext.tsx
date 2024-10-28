import { User } from "@/type/User";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
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
