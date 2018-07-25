import { NOTES_CONSTANTS } from './notes.constants';

export const setFoo = (val) => ({
  type: NOTES_CONSTANTS.SET_FOO,
  payload: val,
});
