import silence from '../assets/silence.mp3';

export const unmute = () => {
  var el = document.createElement('audio');
  el.src = silence;
  el.play();
};
