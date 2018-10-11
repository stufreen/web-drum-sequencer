const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createBufferSource();

export const detuneSupported = typeof source.detune !== 'undefined';
