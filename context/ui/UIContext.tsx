import { createContext } from 'react';

export interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  setIsAddingEntry: (b: boolean) => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
