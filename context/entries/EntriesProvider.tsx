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

    try {
      const { data } = await entriesAPI.post<Entry>('/entries', {
        description,
      });
      dispatch({ type: 'Entries - Add Entry', payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesAPI.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: 'Entries - Update Entry', payload: data });
    } catch (error) {
      console.error(error);
    }
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
