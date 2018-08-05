import samples from '../samples.config.json';
import { uuid } from '../services/uuid';

export default {
  name: 'Roland 808 - 1',
  bpm: 108,
  channels: [
    {
      id: uuid(),
      sample: samples[6],
      gain: 1,
      notes: [
        {
          beat: 1,
          id: uuid(),
        },
        {
          beat: 2.5,
          id: uuid(),
        },
      ],
    },
    {
      id: uuid(),
      sample: samples[8],
      gain: 1,
      notes: [],
    },
    {
      id: uuid(),
      sample: samples[9],
      gain: 1,
      notes: [
        {
          beat: 2,
          id: uuid(),
        },
        {
          beat: 4,
          id: uuid(),
        },
      ],
    },
    {
      id: uuid(),
      sample: samples[10],
      gain: 0.5,
      notes: [
        {
          beat: 1.5,
          id: uuid(),
        },
        {
          beat: 2.5,
          id: uuid(),
        },
        {
          beat: 3.5,
          id: uuid(),
        },
      ],
    },
    {
      id: uuid(),
      sample: samples[11],
      gain: 0.5,
      notes: [
        {
          beat: 4.5,
          id: uuid(),
        },
      ],
    },
    {
      id: uuid(),
      sample: samples[7],
      gain: 0.4,
      notes: [
        {
          beat: 2.75,
          id: uuid(),
        },
        {
          beat: 3.5,
          id: uuid(),
        },
      ],
    },
  ],
};
