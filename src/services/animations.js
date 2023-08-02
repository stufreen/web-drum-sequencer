import { getCurrentBeat } from './audioContext';
import { swing } from './swing';

const draw = (store) => {
  // Get some data from redux store
  const state = store.getState();
  const { bpm, swing: swingAmount } = state.tempo;
  const { playing, startTime } = state.playbackSession;
  const currentBeat = getCurrentBeat(bpm, startTime);

  // Grab all the toggles and animate them
  const toggles = document.getElementsByClassName('wds-beat-marker');
  for (let i = 0; i < toggles.length; i += 1) {
    const toggle = toggles[i];
    const { beat, active } = toggle.dataset;
    const beatNum = parseFloat(beat);
    const swingBeat = swing(beatNum, swingAmount);
    const isActive = active === 'true';
    if (
      playing &&
      isActive &&
      currentBeat - swingBeat < 0.25 &&
      currentBeat - swingBeat > 0
    ) {
      toggle.style.transition = 'all 0s';
      toggle.style.opacity = '0.8';
      toggle.style.transform = 'scale(1.3)';
    } else {
      toggle.style.transition = `all ${120 / bpm}s`;
      toggle.style.opacity = 0;
      toggle.style.transform = 'scale(1)';
    }
  }

  window.requestAnimationFrame(() => {
    draw(store);
  });
};

export const startAnimations = (store) => {
  window.requestAnimationFrame(() => {
    draw(store);
  });
};
