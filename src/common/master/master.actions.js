import { MASTER_CONSTANTS } from './master.constants';

export const setPattern = patternIndex => ({
  type: MASTER_CONSTANTS.SET_PATTERN,
  payload: patternIndex,
});
