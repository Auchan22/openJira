import { FC, ReactNode, useReducer, useEffect } from 'react';
import { EntriesContext, entriesReducer } from './';

import { Entry } from '../../interfaces';

import { entriesAPI } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

interface Props {
  children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    // const newEntry: Entry = {
    //   _id: uuidv4(),
    //   description,
    //   createdAt: Date.now(),
    //   status: 'pending',
    // };

    const { data } = await entriesAPI.post<Entry>('/entries', { description });
    try {
      dispatch({ type: 'Entries - Add Entry', payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: 'Entries - Update Entry', payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesAPI.get<Entry[]>('/entries');
    dispatch({ type: 'Entries - Refresh Entries', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
