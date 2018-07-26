let audioCtx;

export const getAudioContext = () => {
  if (typeof audioCtx === 'undefined') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
};
