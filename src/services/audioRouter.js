import { detuneSupported } from './featureChecks';
import { getAudioContext } from './audioContext';
import { loadImpulseResponse } from './reverb';
import impulseResponse from '../assets/impulse-responses/vocal_duo.wav';

const audioCtx = getAudioContext();

const reverbNode = audioCtx.createConvolver();
reverbNode.connect(audioCtx.destination);
loadImpulseResponse(impulseResponse)
  .then((impulseResponseArrayBuffer) => {
    reverbNode.buffer = impulseResponseArrayBuffer;
  });

/**
 * The channel routing is:
 *
 * Drum Sample
 *  -> Pan node
 *    -> Gain node
 *      -> Master out
 *      -> Reverb gain
 *        -> Master out
 */

const channelGainNodes = {};
const channelPanNodes = {};
const channelReverbNodes = {};

const updateGainNode = (channel) => {
  if (typeof channelGainNodes[channel.id] === 'undefined') {
    // Set up a GainNode to control note volume
    channelGainNodes[channel.id] = audioCtx.createGain();
    channelGainNodes[channel.id].connect(audioCtx.destination);

    // Also route to reverb
    channelGainNodes[channel.id].connect(channelReverbNodes[channel.id]);
  }
  channelGainNodes[channel.id].gain.setValueAtTime(
    typeof channel.gain === 'undefined' ? 1 : channel.gain,
    audioCtx.currentTime,
  );
};

const updatePanNode = (channel) => {
  if (typeof channelPanNodes[channel.id] === 'undefined') {
    // Set up a GainNode to control note volume
    channelPanNodes[channel.id] = audioCtx.createStereoPanner();
    channelPanNodes[channel.id].connect(channelGainNodes[channel.id]);
  }
  channelPanNodes[channel.id].pan.setValueAtTime(
    typeof channel.pan === 'undefined' ? 0 : channel.pan,
    audioCtx.currentTime,
  );
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

export const updateChannelNodes = (channels) => {
  channels.forEach((channel) => {
    updateReverbNode(channel);
    updateGainNode(channel);
    updatePanNode(channel);
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

  // Route to channel pan node
  source.connect(channelPanNodes[channelID]);

  // Connect and start
  source.start(noteTime);
  return source;
};
