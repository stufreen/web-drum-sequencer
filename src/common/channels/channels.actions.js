import { loadSample } from '../../services/sampleStore';
import { CHANNELS_CONSTANTS } from './channels.constants';
import { setNotes, initializeChannelNotes } from '../notes';
import { uuid } from '../../services/uuid';
import samples from '../../samples.config';
import { setSelectedChannel } from '../master';

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

export const setChannelMuted = (channel, muted) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_MUTED,
  payload: {
    channel,
    muted,
  },
});

export const setChannelSolo = (channel, solo) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_SOLO,
  payload: {
    channel,
    solo,
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

export const updateChannelOrder = (oldIndex, newIndex) => ({
  type: CHANNELS_CONSTANTS.UPDATE_CHANNEL_ORDER,
  payload: {
    oldIndex,
    newIndex,
  },
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

export const setChannelReverb = (channel, reverb) => ({
  type: CHANNELS_CONSTANTS.SET_CHANNEL_REVERB,
  payload: {
    channel,
    reverb,
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
  dispatch(setSelectedChannel(channelToAdd.id));
  loadSampleStatefully(dispatch, channelToAdd);
};

export const loadAndSetChannelSample = (channel, sampleURL) => (dispatch) => {
  dispatch(sampleLoaded(channel, false));
  loadSample(sampleURL).then(() => {
    dispatch(sampleLoaded(channel, true));
  });
  dispatch(setChannelSample(channel, sampleURL));
};

export const deleteChannel = (channelID, channels, selectedChannelId) => (dispatch) => {
  if (channels.length === 1) {
    dispatch(newChannel());
  }
  if (selectedChannelId === channelID) {
    dispatch(setSelectedChannel(channels[0].id));
  }
  dispatch(removeChannel(channelID));
};
