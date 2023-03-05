import { createContext, useContext } from 'react'


export type GlobalContent = {
    language: string
    setLanguage: (value: string) => void
    backgroundColor: string,
    setBackgroundColor: (value: string) => void
}

export const GlobalContext = createContext<GlobalContent>({
    language: "ENG",
    setLanguage: () => {},
    backgroundColor: "#F8F5F4",
    setBackgroundColor: () => {},
})

export const useGlobalContext = () => useContext(GlobalContext);