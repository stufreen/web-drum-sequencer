import { getAudioContext } from './audioContext';
import { loadSamples } from './sampleStore';
import { scheduleNotes } from './audioScheduler';
import { setCurrentBeat, setStartTime } from '../common';
import { INTERVAL } from './audioEngine.config';

export const getCurrentBeat = ({ bpm, startTime }, { currentTime }) => {
  const beatLengthSeconds = bpm / 60;
  const currentBeat = ((currentTime - startTime) * beatLengthSeconds);
  return (currentBeat % 4) + 1;
};

export const initializeAudio = (store) => {
  const audioCtx = getAudioContext(); // Start the clock
  loadSamples(store)
    .then(() => {
      setInterval(() => {
        const { playbackSession, channels } = store.getState();
        if (playbackSession.playing) {
          scheduleNotes(playbackSession, channels, playbackSession.currentBeat);

          // Loop if we reached the end of the bar
          const barLength = 4 * 60 / playbackSession.bpm;
          if (audioCtx.currentTime > playbackSession.startTime + barLength) {
            store.dispatch(setStartTime(playbackSession.startTime + barLength));
          }

          const currentBeat = getCurrentBeat(playbackSession, audioCtx);
          store.dispatch(setCurrentBeat(currentBeat));
        }
      }, INTERVAL);
    });
};
