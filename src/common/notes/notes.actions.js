import { NOTES_CONSTANTS } from './notes.constants';

export const initializeChannelNotes = (channelID) => ({
  type: NOTES_CONSTANTS.INITIALIZE_CHANNEL,
  payload: channelID,
});

export const removeChannelNotes = (channelID) => ({
  type: NOTES_CONSTANTS.REMOVE_CHANNEL,
  payload: channelID,
});

export const setNotes = (notes) => ({
  type: NOTES_CONSTANTS.SET_NOTES,
  payload: notes,
});

export const toggleNote = (channelID, pattern, beat) => ({
  type: NOTES_CONSTANTS.TOGGLE_NOTE,
  payload: {
    channelID,
    pattern,
    beat,
  },
});
