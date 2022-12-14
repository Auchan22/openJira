import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType =
  | {
      type: 'Entries - Add Entry';
      payload: Entry;
    }
  | {
      type: 'Entries - Update Entry';
      payload: Entry;
    }
  | {
      type: 'Entries - Refresh Entries';
      payload: Entry[];
    }
  | {
      type: 'Entries - Delete Entry';
      payload: Entry;
    };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType,
): EntriesState => {
  switch (action.type) {
    case 'Entries - Add Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case 'Entries - Update Entry':
      return {
        ...state,
        entries: state.entries.map((e) => {
          if (e._id === action.payload._id) {
            e.status = action.payload.status;
            e.description = action.payload.description;
          }
          return e;
        }),
      };

    case 'Entries - Refresh Entries':
      return { ...state, entries: [...action.payload] };

    case 'Entries - Delete Entry':
      return {
        ...state,
        entries: state.entries.filter((e) => e._id !== action.payload._id),
      };

    default:
      return state;
  }
};
