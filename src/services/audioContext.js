let audioCtx;
const channelGainNodes = {};

export const getAudioContext = () => {
  if (typeof audioCtx === 'undefined') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

export const updateChannelNodes = (channels) => {
  channels.forEach((channel) => {
    if (typeof channelGainNodes[channel.id] === 'undefined') {
      // Set up a GainNode to control note volume
      channelGainNodes[channel.id] = audioCtx.createGain();
      channelGainNodes[channel.id].connect(audioCtx.destination);
    }
    channelGainNodes[channel.id].gain.setValueAtTime(channel.gain, audioCtx.currentTime);
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

export const playNote = (noteTime, buffer, channelID) => {
  // Set up the AudioBufferSourceNode
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;

  // Route to channel gain node
  source.connect(channelGainNodes[channelID]);

  // Connect and start
  source.start(noteTime);
  return source;
};
