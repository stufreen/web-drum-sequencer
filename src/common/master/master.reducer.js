import { MASTER_CONSTANTS } from './master.constants';

export const masterInitialState = {
  pattern: 0,
};

export const masterReducer = (state = masterInitialState, action) => {
  switch (action.type) {
    case MASTER_CONSTANTS.SET_PATTERN:
      return {
        ...state,
        pattern: action.payload,
      };
    default:
      return state;
  }
};
