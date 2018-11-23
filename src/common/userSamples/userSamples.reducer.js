import { USER_SAMPLES_CONSTANTS } from './userSamples.constants';

export const userSamplesInitialState = [];

export const userSamplesReducer = (state = userSamplesInitialState, action) => {
  switch (action.type) {
    case USER_SAMPLES_CONSTANTS.ADD_USER_SAMPLE:
      return [
        ...state,
        action.payload,
      ];
    case USER_SAMPLES_CONSTANTS.REMOVE_USER_SAMPLE:
      return state.filter(userSample => userSample.id !== action.payload);
    case USER_SAMPLES_CONSTANTS.CLEAR_USER_SAMPLES:
      return userSamplesInitialState;
    default:
      return state;
  }
};
