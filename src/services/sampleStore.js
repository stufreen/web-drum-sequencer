import { fetchFile, decodeFile, decodeAudio } from './fileUtils';

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
