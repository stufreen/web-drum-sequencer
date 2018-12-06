import { fetchFile, decodeFile, decodeAudio } from './fileUtils';
import { saveToDb } from './database';

export const sampleStore = {};

export const loadSample = (url) => {
  if (typeof sampleStore[url] !== 'undefined') {
    return Promise.resolve(true);
  }

  return fetchFile(url)
    .then(decodeFile)
    .then(decodeAudio)
    .then((drumBuffer) => {
      sampleStore[url] = drumBuffer;
      return true;
    })
    .catch(() => false);
};

export const saveToSampleStore = (file) => {
  const id = file.name;
  return decodeFile(file)
    .then((myArrayBuffer) => {
      saveToDb(myArrayBuffer, id);
      return decodeAudio(myArrayBuffer);
    })
    .then((drumBuffer) => {
      sampleStore[id] = drumBuffer;
      return id;
    });
};
