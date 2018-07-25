import * as R from 'ramda';
import { getAudioContext } from '../services';

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
    const bpm = R.path(['playbackSession', 'bpm'], state);
    const startTime = R.path(['playbackSession', 'startTime'], state);
    const currentTime = getAudioContext().currentTime;
    channel.notes.forEach((note) => {
      const noteTime = startTime + (note.beat * 60 / bpm);
      if (noteTime >= currentTime &&
        noteTime < currentTime + LOOKAHEAD &&
        typeof schedule[note.id] === 'undefined') {
        schedule[note.id] = scheduleNote(channel.id, noteTime);
      }
    });
  }
};

const tick = (store) => {
  const state = store.getState();
  // console.log(state);
  if (!R.path(['playbackSession', 'playing'], state)) {
    return;
  }
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
    })
  })
}

function decodeFile(sampleBlob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    const soundBuffer = fileReader.readAsArrayBuffer(sampleBlob);
    fileReader.onloadend = (e) => {
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
  const loaders = state.channels.map((channel) => {
    return fetchFile(channel.url)
      .then(decodeFile)
      .then(decodeAudio)
      .then((drumBuffer) => {
        cachedArrayBuffers[channel.id] = drumBuffer;
      });
  });
  return Promise.all(loaders);
};

export const initializeAudioScheduler = (store) => {
  getAudioContext();
  loadSamples(store)
    .then(() => {
      tick(store);
      setInterval(() => {
        tick(store);
      }, 25);
    });
};
