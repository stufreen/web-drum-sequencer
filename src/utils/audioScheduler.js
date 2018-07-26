import * as R from 'ramda';
import { getAudioContext } from '../services';
import { startPlayback, setCurrentBeat } from '../common';

export const LOOKAHEAD = 0.1; // seconds

const cachedArrayBuffers = {};
const schedule = {};

const scheduleNote = (sampleId, noteTime) => {
  const source = getAudioContext().createBufferSource();
  source.buffer = cachedArrayBuffers[sampleId];
  source.connect(getAudioContext().destination);
  source.start(noteTime);
  return source;
};

const scheduleChannel = (channel, state) => {
  if (typeof channel.notes !== 'undefined') {
    // Get some info about current state
    const bpm = R.path(['playbackSession', 'bpm'], state);
    const startTime = R.path(['playbackSession', 'startTime'], state);
    const { currentTime } = getAudioContext();

    // Check if the notes should be scheduled
    channel.notes.forEach((note) => {
      const noteTime = startTime + ((note.beat - 1) * 60 / bpm);
      if (noteTime >= currentTime
        && noteTime < currentTime + LOOKAHEAD) {
        // Don't schedule the same note twice
        if (typeof schedule[note.id] === 'undefined') {
          schedule[note.id] = scheduleNote(channel.id, noteTime);
        }
      } else {
        delete schedule[note.id]; // Clear out irrelevant notes from schedule
      }
    });
  }
};

const tick = (store) => {
  const state = store.getState();

  // Don't do anything if user hasn't pressed play
  if (!R.path(['playbackSession', 'playing'], state)) {
    return;
  }

  // Calculate timing
  const bpm = R.path(['playbackSession', 'bpm'], state);
  const startTime = R.path(['playbackSession', 'startTime'], state);
  const { currentTime } = getAudioContext();
  const currentBeat = (currentTime - startTime + LOOKAHEAD) * (bpm / 60) + 1;

  // Dispatch action to redux to update transport
  store.dispatch(setCurrentBeat(currentBeat));

  // Loop playback if we reached the end of the bar
  const barEnd = startTime + (4 * 60 / bpm);
  if (currentTime + LOOKAHEAD > barEnd) {
    store.dispatch(startPlayback());
  }

  // Schedule notes
  state.channels.forEach((channel) => {
    scheduleChannel(channel, state);
  });
};

function fetchFile(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (response.ok) {
        resolve(response.blob());
      }
      reject(new Error('Network response was not ok.'));
    });
  });
}

function decodeFile(sampleBlob) {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(sampleBlob);
    fileReader.onloadend = () => {
      resolve(fileReader.result);
    };
  });
}

function decodeAudio(audioArrayBuffer) {
  return new Promise((resolve, reject) => {
    getAudioContext().decodeAudioData(audioArrayBuffer, resolve, reject);
  });
}

const loadSamples = (store) => {
  const state = store.getState();
  const loaders = state.channels.map(channel => fetchFile(channel.url)
    .then(decodeFile)
    .then(decodeAudio)
    .then((drumBuffer) => {
      cachedArrayBuffers[channel.id] = drumBuffer;
    }));
  return Promise.all(loaders);
};

export const initializeAudioScheduler = (store) => {
  getAudioContext();
  loadSamples(store)
    .then(() => {
      // Start the loop!!!
      setInterval(() => {
        tick(store);
      }, 25);
    });
};
