let audioCtx;

export const getAudioContext = () => {
  if (typeof audioCtx === 'undefined') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};

export const getCurrentBeat = (bpm, startTime, currentTime) => {
  const safeCurrentTime =
    typeof currentTime === 'undefined' ? audioCtx.currentTime : currentTime;

  const beatLengthSeconds = bpm / 60;
  const currentBeat = (safeCurrentTime - startTime) * beatLengthSeconds;
  return (currentBeat % 4) + 1;
};
