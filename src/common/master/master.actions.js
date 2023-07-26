import { MASTER_CONSTANTS } from './master.constants';

export const setPattern = (patternIndex) => ({
  type: MASTER_CONSTANTS.SET_PATTERN,
  payload: patternIndex,
});

export const setSelectedChannel = (channelID) => ({
  type: MASTER_CONSTANTS.SET_SELECTED_CHANNEL,
  payload: channelID,
});
