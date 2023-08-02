import { getAudioContext } from './audioContext';

export const fetchFile = (url) => new Promise(
  (resolve, reject) => {
    fetch(url).then((response) => {
      if (response.ok) {
        resolve(response.blob());
      }
      reject(new Error('Network response was not ok.'));
    });
  },
);

export const decodeFile = (sampleBlob) => new Promise(
  (resolve) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(sampleBlob);
    fileReader.onloadend = () => {
      resolve(fileReader.result);
    };
  },
);

export const decodeAudio = (audioArrayBuffer) => new Promise(
  (resolve, reject) => {
    getAudioContext().decodeAudioData(audioArrayBuffer, resolve, reject);
  },
);
