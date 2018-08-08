import { getAudioContext, getCurrentBeat } from './audioContext';
import { scheduleNotes } from './audioScheduler';
import { setStartTime } from '../common';
import { INTERVAL } from './audioEngine.config';

export const initializeAudio = (store) => {
  const audioCtx = getAudioContext(); // Start the clock
  setInterval(() => {
    const {
      playbackSession,
      tempo,
      channels,
      notes,
    } = store.getState();

    if (playbackSession.playing) {
      scheduleNotes({
        notes,
        channels,
        startTime: playbackSession.startTime,
        bpm: tempo.bpm,
        pattern: 0, // TO DO: Pull from store
        currentBeat: getCurrentBeat(tempo.bpm, playbackSession.startTime),
      });

      // Loop if we reached the end of the bar
      const barLength = 4 * 60 / tempo.bpm;
      if (audioCtx.currentTime > playbackSession.startTime + barLength) {
        store.dispatch(setStartTime(playbackSession.startTime + barLength));
      }
    }
  }, INTERVAL);
};
