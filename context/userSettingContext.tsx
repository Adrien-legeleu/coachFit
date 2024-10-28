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
}

export const UserSettingContext = createContext<ContextProps>({
  user: null,
  setUser: () => {},
});

export const UserSettingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserSettingContext.Provider value={{ user, setUser }}>
      {children}
    </UserSettingContext.Provider>
  );
};

export const useUserSettingContext = () => {
  return useContext(UserSettingContext);
};
