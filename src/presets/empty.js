import samples from '../samples.config';

export const EMPTY_NOTE_ROW = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

export default {
  name: 'Empty',
  bpm: 80,
  swing: 0,
  channels: [
    {
      id: 'empty_channel',
      sample: samples[0],
      gain: 1,
    },
  ],
  notes: {
    empty_channel: EMPTY_NOTE_ROW,
  },
};
