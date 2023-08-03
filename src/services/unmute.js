import silence from '../assets/silence.mp3';

let hasBeenUnmuted = false;

export const unmute = () => {
  if (!hasBeenUnmuted) {
    var el = document.createElement('audio');
    el.src = silence;
    el.play();
    hasBeenUnmuted = true;
  }
};
