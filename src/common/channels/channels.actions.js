import { loadSample } from '../../services/sampleStore';
import { CHANNELS_CONSTANTS } from './channels.constants';
import { setNotes, initializeChannelNotes } from '../notes';
import { uuid } from '../../services/uuid';
import samples from '../../samples.config';

export const setChannelGain = (channel, gain) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_GAIN,
  payload: {
    channel,
    gain,
  },
});

export const setChannelPan = (channel, pan) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_PAN,
  payload: {
    channel,
    pan,
  },
});

export const setChannelPitchCoarse = (channel, pitchCoarse) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_PITCH_COARSE,
  payload: {
    channel,
    pitchCoarse,
  },
});

export const setChannelPitchFine = (channel, pitchFine) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_PITCH_FINE,
  payload: {
    channel,
    pitchFine,
  },
});

export const addChannel = channel => ({
  type: CHANNELS_CONSTANTS.ADD_CHANNEL,
  payload: channel,
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

export const loadChannels = (channels, notes) => (dispatch) => {
  channels.forEach((channel) => {
    loadSampleStatefully(dispatch, channel);
  });
  dispatch(replaceChannels(channels));
  dispatch(setNotes(notes));
};

export const newChannel = () => (dispatch) => {
  const channelToAdd = {
    id: uuid(),
    sample: samples[0],
    gain: 1,
    pitchCoarse: 0,
    pitchFine: 0,
    pan: 0,
  };
  dispatch(addChannel(channelToAdd));
  dispatch(initializeChannelNotes(channelToAdd.id));
  loadSampleStatefully(dispatch, channelToAdd);
};

export const loadAndSetChannelSample = (channel, sampleURL) => (dispatch) => {
  dispatch(sampleLoaded(channel, false));
  loadSample(sampleURL).then(() => {
    dispatch(sampleLoaded(channel, true));
  });
  dispatch(setChannelSample(channel, sampleURL));
};
