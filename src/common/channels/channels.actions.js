import { loadSample } from '../../services/sampleStore';
import { CHANNELS_CONSTANTS } from './channels.constants';
import { setNotes } from '../notes';

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

export const replaceChannels = channels => ({
  type: CHANNELS_CONSTANTS.SET_CHANNELS,
  payload: channels,
});

export const loadPreset = (channels, notes) => (dispatch) => {
  channels.forEach((channel) => {
    loadSample(channel.sample.url);
  });
  dispatch(replaceChannels(channels));
  dispatch(setNotes(notes));
};

export const setChannelSample = (channel, sample) => (dispatch) => {
  loadSample(sample);
  dispatch({
    type: CHANNELS_CONSTANTS.SET_CHANNEL_SAMPLE,
    payload: {
      channel,
      sample,
    },
  });
};
