import { fetchFile, decodeFile, decodeAudio } from './fileUtils';

const impulseResponses = {};

export const loadImpulseResponse = (fileName) => {
  if (typeof impulseResponses[fileName] !== 'undefined') {
    return Promise.resolve(impulseResponses[fileName]);
  }
  return fetchFile(fileName)
    .then(decodeFile)
    .then(decodeAudio);
};
