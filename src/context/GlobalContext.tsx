import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";

interface ProviderProps {
  children: ReactNode;
}

export type GlobalContent = {
  language: string;
  setLanguage: (value: string) => void;
};

export const GlobalContext = createContext({} as GlobalContent);

export const useGlobalContext = () => useContext(GlobalContext);

export function GlobalContextProvider({ children }: ProviderProps) {
  const [language, setLanguage] = useLocalStorage(
    "language",
    localStorage.getItem("language") === null
      ? "ENG"
      : localStorage.getItem("language")
  );

  return (
    <GlobalContext.Provider value={{ language, setLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default useGlobalContext;
