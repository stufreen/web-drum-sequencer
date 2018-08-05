import samples from '../samples.config.json';
import { uuid } from '../services/uuid';

export default {
  name: 'Roland 707',
  bpm: 130,
  channels: [
    {
      id: uuid(),
      sample: samples[0],
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
        {
          beat: 4.25,
          id: uuid(),
        },
      ],
    },
    {
      id: uuid(),
      sample: samples[1],
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
      sample: samples[2],
      gain: 0.6,
      notes: [
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
    },
    {
      id: uuid(),
      sample: samples[3],
      gain: 0.5,
      notes: [
        {
          beat: 1.75,
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
