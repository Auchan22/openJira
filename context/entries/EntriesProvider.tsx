import { FC, ReactNode, useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';

import { Entry } from '../../interfaces';

import { v4 as uuidv4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Lorem Ipsum re loco malardo breoooooo',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'Lorem Ipsum re loco malardo breoooooo 2',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: 'Lorem Ipsum re loco malardo breoooooo 3',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  console.log(state);
  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
