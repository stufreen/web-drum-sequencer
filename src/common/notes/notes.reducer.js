import { NOTES_CONSTANTS } from "./notes.constants";

export const notesInitialState = {
  foo: 'bar',
};

export const notesReducer = (state = notesInitialState, action) => {
  switch (action.type) {
    case NOTES_CONSTANTS.SET_FOO:
      return Object.assign({}, state, {
        foo: action.payload
      });
    default:
      return state;
  }
};
