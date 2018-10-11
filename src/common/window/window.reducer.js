import { WINDOW_CONSTANTS } from './window.constants';

export const windowInitialState = {
  presetPromptOpen: false,
  flashMessageKey: null,
  flashMessageVisible: false,
};

export const windowReducer = (state = windowInitialState, action) => {
  switch (action.type) {
    case WINDOW_CONSTANTS.PRESET_PROMPT_OPEN:
      return {
        ...state,
        presetPromptOpen: action.payload,
      };
    case WINDOW_CONSTANTS.SET_FLASH_MESSAGE:
      return {
        ...state,
        flashMessageKey: action.payload,
        flashMessageVisible: true,
      };
    case WINDOW_CONSTANTS.CLEAR_FLASH_MESSAGE:
      return {
        ...state,
        flashMessageVisible: false,
      };
    default:
      return state;
  }
};
