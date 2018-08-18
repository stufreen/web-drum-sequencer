import { loadSample } from '../../services/sampleStore';
import { CHANNELS_CONSTANTS } from './channels.constants';
import { setNotes, initializeChannelNotes } from '../notes';
import { uuid } from '../../services/uuid';

export const setChannelGain = (channel, gain) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_GAIN,
  payload: {
    channel,
    gain,
  },
});

export const addChannel = id => ({
  type: CHANNELS_CONSTANTS.ADD_CHANNEL,
  payload: id,
});

export const removeChannel = id => ({
  type: CHANNELS_CONSTANTS.REMOVE_CHANNEL,
  payload: id,
});

export const replaceChannels = channels => ({
  type: CHANNELS_CONSTANTS.SET_CHANNELS,
  payload: channels,
});

export const sampleLoaded = (channelID, isLoaded) => ({
  type: CHANNELS_CONSTANTS.SAMPLE_LOADED,
  payload: {
    channelID,
    isLoaded,
  },
});

export const setChannelSample = (channel, sampleURL) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_SAMPLE,
  payload: {
    channel,
    sampleURL,
  },
});

export const loadSampleStatefully = (dispatch, channel) => {
  dispatch(sampleLoaded(channel.id, false));
  loadSample(channel.sample.url).then(() => {
    dispatch(sampleLoaded(channel.id, true));
  });
};

export const loadPreset = (channels, notes) => (dispatch) => {
  channels.forEach((channel) => {
    loadSampleStatefully(dispatch, channel);
  });
  dispatch(replaceChannels(channels));
  dispatch(setNotes(notes));
};

export const newChannel = () => (dispatch) => {
  const newID = uuid();
  dispatch(addChannel(newID));
  dispatch(initializeChannelNotes(newID));
};

export const loadAndSetChannelSample = (channel, sampleURL) => (dispatch) => {
  dispatch(sampleLoaded(channel, false));
  loadSample(sampleURL).then(() => {
    dispatch(sampleLoaded(channel, true));
  });
  dispatch(setChannelSample(channel, sampleURL));
};
