let audioCtx;

export const getAudioContext = () => {
  if (typeof audioCtx === 'undefined') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

export const playNote = (noteTime, buffer, gain = 1) => {
  // Set up the AudioBufferSourceNode
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;

  // Set up a GainNode to control note volume
  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(gain, audioCtx.currentTime);

  // Connect and start
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  source.start(noteTime);
  return source;
};
