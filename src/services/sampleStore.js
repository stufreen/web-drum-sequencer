import { fetchFile, decodeFile, decodeAudio } from './fileUtils';
import { saveToDB, getFromDB } from './database';

export const sampleStore = {};

export const loadSample = (url) => {
  if (typeof sampleStore[url] !== 'undefined') {
    return Promise.resolve(true);
  }

  return getFromDB(url)
    .then(decodeAudio)
    .then((drumBuffer) => {
      sampleStore[url] = drumBuffer;
      return true;
    })
    .catch(() => fetchFile(url)
      .then(decodeFile)
      .then(decodeAudio)
      .then((drumBuffer) => {
        sampleStore[url] = drumBuffer;
        return true;
      })
      .catch(() => false));
};

export const saveToSampleStore = (file) => {
  const id = file.name;
  return decodeFile(file)
    .then((myArrayBuffer) => {
      saveToDB(myArrayBuffer, id);
      return decodeAudio(myArrayBuffer);
    })
    .then((drumBuffer) => {
      sampleStore[id] = drumBuffer;
      return id;
    });
};
