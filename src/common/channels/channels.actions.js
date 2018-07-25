import { CHANNELS_CONSTANTS } from './channels.constants';

export const toggleNote = (channel, beat) => ({
  type: CHANNELS_CONSTANTS.TOGGLE_NOTE,
  payload: {
    channel,
    beat,
  },
});
