import { createContext } from 'react';

export interface ContextProps {
  sidemenuOpen: boolean;
}

export const UiContext = createContext({} as ContextProps);
