import samples from '../samples.config.json';

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
