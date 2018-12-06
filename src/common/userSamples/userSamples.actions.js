import { saveToSampleStore } from '../../services/sampleStore';
import { USER_SAMPLES_CONSTANTS } from './userSamples.constants';
import { setChannelUserSample } from '../channels';

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

export const saveUserSample = (channel, files) => (dispatch) => {
  saveToSampleStore(files[0])
    .then((myKey) => {
      dispatch(addUserSample(myKey));
      dispatch(setChannelUserSample(channel, myKey));
    });
};
