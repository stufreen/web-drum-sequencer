import { loadSample } from '../../services/sampleStore';
import { CHANNELS_CONSTANTS } from './channels.constants';

export const toggleNote = (channel, beat) => ({
  type: CHANNELS_CONSTANTS.TOGGLE_NOTE,
  payload: {
    channel,
    beat,
  },
});

export const setChannelSample = (channel, sample) => {
  loadSample(sample);
  return {
    type: CHANNELS_CONSTANTS.SET_CHANNEL_SAMPLE,
    payload: {
      channel,
      sample,
    },
  };
};
