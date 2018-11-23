import { USER_SAMPLES_CONSTANTS } from './userSamples.constants';

export const addUserSample = sample => ({
  type: USER_SAMPLES_CONSTANTS.ADD_USER_SAMPLE,
  payload: sample,
});

export const removeUserSample = sampleId => ({
  type: USER_SAMPLES_CONSTANTS.REMOVE_USER_SAMPLE,
  payload: sampleId,
});

export const clearUserSamples = () => ({
  type: USER_SAMPLES_CONSTANTS.CLEAR_USER_SAMPLES,
});

export const loadAndSetUserSample = (channelId, files) => (dispatch) => {

};
