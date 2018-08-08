import samples from '../samples.config.json';
import { uuid } from '../services/uuid';

export default {
  name: 'Roland 707',
  bpm: 130,
  channels: [
    {
      id: '707kick',
      sample: samples[0],
      gain: 1,
    },
    {
      id: '707snare',
      sample: samples[1],
      gain: 1,
    },
    {
      id: '707hat',
      sample: samples[2],
      gain: 0.6,
    },
    {
      id: '707rim',
      sample: samples[3],
      gain: 0.5,
    },
  ],
  notes: {
    '707kick': [
      [
        {
          beat: 1,
          id: uuid(),
        },
        {
          beat: 2.5,
          id: uuid(),
        },
        {
          beat: 4.25,
          id: uuid(),
        },
      ],
      [],
      [],
      [],
    ],
    '707snare': [
      [
        {
          beat: 2,
          id: uuid(),
        },
        {
          beat: 4,
          id: uuid(),
        },
      ],
      [],
      [],
      [],
    ],
    '707hat': [
      [
        {
          beat: 1,
          id: uuid(),
        },
        {
          beat: 2,
          id: uuid(),
        },
        {
          beat: 3,
          id: uuid(),
        },
        {
          beat: 4,
          id: uuid(),
        },
      ],
      [],
      [],
      [],
    ],
    '707rim': [
      [
        {
          beat: 1.75,
          id: uuid(),
        },
        {
          beat: 3.5,
          id: uuid(),
        },
      ],
      [],
      [],
      [],
    ],
  },
};
