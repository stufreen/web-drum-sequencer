import samples from '../samples.config.json';

export default {
  name: 'Roland 808 - 1',
  bpm: 108,
  channels: [
    {
      id: '808-1',
      sample: samples[6],
      gain: 1,
    },
    {
      id: '808-2',
      sample: samples[8],
      gain: 1,
    },
    {
      id: '808-3',
      sample: samples[9],
      gain: 1,
    },
    {
      id: '808-4',
      sample: samples[10],
      gain: 0.5,
    },
    {
      id: '808-5',
      sample: samples[11],
      gain: 0.5,
    },
    {
      id: '808-6',
      sample: samples[7],
      gain: 0.4,
    },
  ],
  notes: {
    '808-1': [[], [], [], []],
    '808-2': [[], [], [], []],
    '808-3': [[], [], [], []],
    '808-4': [[], [], [], []],
    '808-5': [[], [], [], []],
    '808-6': [[], [], [], []],
  },
};
