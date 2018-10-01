import { channelsInitialState, channelsReducer } from './channels.reducer';
import {
  setChannelSample,
  setChannelGain,
  setChannelPan,
  addChannel,
  removeChannel,
  replaceChannels,
  setChannelPitchCoarse,
  setChannelPitchFine,
} from './channels.actions';

jest.mock('../../presets');
jest.mock('../../samples.config');

const testSample = '/fake/sample/b/url.wav';

describe('setChannelSample', () => {
  test('should change a sample', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelSample(channelsInitialState[0].id, testSample),
    );
    expect(state[0].sample.url).toEqual(testSample);
  });
});

describe('setChannelGain', () => {
  test('should change gain for a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelGain(channelsInitialState[0].id, 0.5),
    );
    expect(state[0].gain).toEqual(0.5);
  });
});

describe('setChannelPan', () => {
  test('should change pan for a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelPan(channelsInitialState[0].id, 0.5),
    );
    expect(state[0].pan).toEqual(0.5);
  });
});

describe('setChannelPitchCoarse', () => {
  test('should change pitch (coarse) for a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelPitchCoarse(channelsInitialState[0].id, 5),
    );
    expect(state[0].pitchCoarse).toEqual(5);
  });
});

describe('setChannelPitchFine', () => {
  test('should change pitch (fine) for a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      setChannelPitchFine(channelsInitialState[0].id, -50),
    );
    expect(state[0].pitchFine).toEqual(-50);
  });
});


describe('addChannel', () => {
  test('should add a channel', () => {
    const state = channelsReducer(
      channelsInitialState,
      addChannel({
        id: '12345',
        gain: 1,
        sample: {},
      }),
    );
    expect(state.length).toEqual(channelsInitialState.length + 1);
  });
});

describe('removeChannel', () => {
  test('should remove a channel that exists', () => {
    const state = channelsReducer(
      channelsInitialState,
      removeChannel(channelsInitialState[0].id),
    );
    expect(state.length).toEqual(channelsInitialState.length - 1);
  });

  test('should do nothing if no channel matches the ID', () => {
    const state = channelsReducer(
      channelsInitialState,
      removeChannel('foo'),
    );
    expect(state.length).toEqual(channelsInitialState.length);
  });
});

describe('replaceChannels', () => {
  test('should replace existing channels', () => {
    const state = channelsReducer(
      channelsInitialState,
      replaceChannels([
        {
          id: 'empty_channel',
          sample: 'test',
          gain: 1,
        },
      ]),
    );
    expect(state.length).toEqual(1);
  });
});
