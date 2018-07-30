import { getAudioContext } from './audioContext';

export const sampleStore = {};

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

export const loadSamples = (store) => {
  const state = store.getState();
  const loaders = state.channels.map(channel => fetchFile(channel.url)
    .then(decodeFile)
    .then(decodeAudio)
    .then((drumBuffer) => {
      sampleStore[channel.id] = drumBuffer;
    }));
  return Promise.all(loaders);
};
