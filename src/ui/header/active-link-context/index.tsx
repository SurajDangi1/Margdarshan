import { Dispatch, SetStateAction, createContext, useContext } from "react";

export const ActiveLinkContext = createContext<{
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
} | null>(null);

export const useActiveLinkContext = () => useContext(ActiveLinkContext);