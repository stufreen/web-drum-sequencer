import { detuneSupported, stereoPannerSupported } from './featureChecks';
import { getAudioContext } from './audioContext';
import { loadImpulseResponse } from './reverb';
import impulseResponse from '../assets/impulse-responses/ruby-room.mp3';

const audioCtx = getAudioContext();

const reverbNode = audioCtx.createConvolver();
reverbNode.connect(audioCtx.destination);
loadImpulseResponse(impulseResponse).then((impulseResponseArrayBuffer) => {
  reverbNode.buffer = impulseResponseArrayBuffer;
});

/**
 * The channel routing is:
 *
 * Drum Sample
 *  -> Gain node
 *    -> Reverb node
 *      -> Master out
 *    -> Pan node
 *      -> Master out
 */

const channelGainNodes = {};
const channelPanNodes = {};
const channelReverbNodes = {};

const calculateGain = (channel, soloEnabled) => {
  if (channel.muted) {
    return 0;
  }
  if (soloEnabled && !channel.solo) {
    return 0;
  }
  if (channel.gain === 'undefined') {
    return 1;
  }
  return channel.gain;
};

const updateGainNode = (channel, soloEnabled) => {
  if (typeof channelGainNodes[channel.id] === 'undefined') {
    // Set up a GainNode to control note volume
    channelGainNodes[channel.id] = audioCtx.createGain();
    channelGainNodes[channel.id].connect(channelPanNodes[channel.id]);

    // Also route to reverb
    channelGainNodes[channel.id].connect(channelReverbNodes[channel.id]);
  }
  channelGainNodes[channel.id].gain.setValueAtTime(
    calculateGain(channel, soloEnabled),
    audioCtx.currentTime,
  );
};

const updatePanNode = (channel) => {
  if (stereoPannerSupported) {
    if (typeof channelPanNodes[channel.id] === 'undefined') {
      channelPanNodes[channel.id] = audioCtx.createStereoPanner();
      channelPanNodes[channel.id].connect(audioCtx.destination);
    }
    channelPanNodes[channel.id].pan.setValueAtTime(
      typeof channel.pan === 'undefined' ? 0 : channel.pan,
      audioCtx.currentTime,
    );
  } else {
    if (typeof channelPanNodes[channel.id] === 'undefined') {
      channelPanNodes[channel.id] = audioCtx.createPanner();
      channelPanNodes[channel.id].panningModel = 'equalpower';
      channelPanNodes[channel.id].connect(audioCtx.destination);
    }
    const pan = typeof channel.pan === 'undefined' ? 0 : channel.pan;
    channelPanNodes[channel.id].setPosition(pan, 0, 1 - Math.abs(pan));
    return;
  }
};

const updateReverbNode = (channel) => {
  if (typeof channelReverbNodes[channel.id] === 'undefined') {
    // Set up a GainNode to control the send volume to reverb
    channelReverbNodes[channel.id] = audioCtx.createGain();
    channelReverbNodes[channel.id].connect(reverbNode);
  }
  channelReverbNodes[channel.id].gain.setValueAtTime(
    typeof channel.reverb === 'undefined' ? 0 : channel.reverb,
    audioCtx.currentTime,
  );
};

const checkSoloEnabled = (channels) => {
  for (let i = 0; i < channels.length; i += 1) {
    if (channels[i].solo) {
      return true;
    }
  }
  return false;
};

export const updateChannelNodes = (channels) => {
  channels.forEach((channel) => {
    updateReverbNode(channel);
    updatePanNode(channel);
    updateGainNode(channel, checkSoloEnabled(channels));
  });
};

export const playNote = (noteTime, buffer, channelID, notePitch = 0) => {
  // Set up the AudioBufferSourceNode
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;

  // Detune if available
  if (detuneSupported) {
    source.detune.value = notePitch;
  }

  // Route to channel gain node
  source.connect(channelGainNodes[channelID]);

  // Connect and start
  source.start(noteTime);
  return source;
};
