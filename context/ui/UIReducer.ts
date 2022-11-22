import { UIState } from './UIProvider';

type UIActionType = {
  type: 'UI - Open Sidebar' | 'UI - Close Sidebar';
};

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      };
      break;

    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      };
      break;

    default:
      return state;
      break;
  }
  return state;
};
