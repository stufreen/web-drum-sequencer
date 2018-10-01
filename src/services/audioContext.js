let audioCtx;
const channelGainNodes = {};
const channelPanNodes = {};

export const getAudioContext = () => {
  if (typeof audioCtx === 'undefined') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

const updateGainNode = (channel) => {
  if (typeof channelGainNodes[channel.id] === 'undefined') {
    // Set up a GainNode to control note volume
    channelGainNodes[channel.id] = audioCtx.createGain();
    channelGainNodes[channel.id].connect(audioCtx.destination);
  }
  channelGainNodes[channel.id].gain.setValueAtTime(channel.gain || 1, audioCtx.currentTime);
};

const updatePanNode = (channel) => {
  if (typeof channelPanNodes[channel.id] === 'undefined') {
    // Set up a GainNode to control note volume
    channelPanNodes[channel.id] = audioCtx.createStereoPanner();
    channelPanNodes[channel.id].connect(channelGainNodes[channel.id]);
  }
  channelPanNodes[channel.id].pan.setValueAtTime(channel.pan || 0, audioCtx.currentTime);
};

export const updateChannelNodes = (channels) => {
  channels.forEach((channel) => {
    updateGainNode(channel);
    updatePanNode(channel);
  });
};

export const getCurrentBeat = (bpm, startTime, currentTime) => {
  const safeCurrentTime = typeof currentTime === 'undefined'
    ? audioCtx.currentTime
    : currentTime;

  const beatLengthSeconds = bpm / 60;
  const currentBeat = ((safeCurrentTime - startTime) * beatLengthSeconds);
  return (currentBeat % 4) + 1;
};

export const playNote = (noteTime, buffer, channelID, notePitch = 0) => {
  // Set up the AudioBufferSourceNode
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.detune.value = notePitch;

  // Route to channel pan node
  source.connect(channelPanNodes[channelID]);

  // Connect and start
  source.start(noteTime);
  return source;
};
