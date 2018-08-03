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

export const setChannelGain = (channel, gain) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_GAIN,
  payload: {
    channel,
    gain,
  },
});

export const addChannel = () => ({
  type: CHANNELS_CONSTANTS.ADD_CHANNEL,
});

export const removeChannel = id => ({
  type: CHANNELS_CONSTANTS.REMOVE_CHANNEL,
  payload: id,
});
