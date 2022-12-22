import { FC, ReactNode, useReducer, useEffect } from 'react';
import { EntriesContext, entriesReducer } from './';

import { Entry } from '../../interfaces';

import { entriesAPI } from '../../apis';
import { useSnackbar } from 'notistack';

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
  const { enqueueSnackbar } = useSnackbar();

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
      enqueueSnackbar('Entrada Creada', {
        variant: 'info',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar: boolean = false,
  ) => {
    try {
      const { data } = await entriesAPI.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: 'Entries - Update Entry', payload: data });
      if (showSnackbar) {
        enqueueSnackbar('Entrada Actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right',
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEntry = async (_id: string) => {
    try {
      const { data } = await entriesAPI.delete<Entry>(`/entries/${_id}`);
      dispatch({ type: 'Entries - Delete Entry', payload: data });
      enqueueSnackbar('Entrada Eliminada', {
        variant: 'error',
        autoHideDuration: 1500,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
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
    <EntriesContext.Provider
      value={{ ...state, addNewEntry, updateEntry, deleteEntry }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
