import * as stereoPannerPolyfill from 'stereo-panner-node';
import { getAudioContext, getCurrentBeat, updateChannelNodes } from './audioContext';
import { scheduleNotes } from './audioScheduler';
import { setStartTime } from '../common';
import { INTERVAL } from './audioEngine.config';

export const initializeAudio = (store) => {
  stereoPannerPolyfill.polyfill();
  const audioCtx = getAudioContext(); // Start the clock
  setInterval(() => {
    const {
      playbackSession,
      tempo,
      channels,
      notes,
      master,
    } = store.getState();

    updateChannelNodes(channels);

    if (playbackSession.playing) {
      let sT = playbackSession.startTime;
      // Loop if we reached the end of the bar
      const barLength = 4 * 60 / tempo.bpm;
      if (audioCtx.currentTime > playbackSession.startTime + barLength) {
        store.dispatch(setStartTime(playbackSession.startTime + barLength));
        sT = playbackSession.startTime + barLength;
      }

      scheduleNotes({
        notes,
        channels,
        startTime: sT,
        bpm: tempo.bpm,
        pattern: master.pattern,
        currentBeat: getCurrentBeat(tempo.bpm, playbackSession.startTime),
      });
    }
  }, INTERVAL);
};
