import React, { useEffect, useRef } from 'react';
import { Box } from './design-system';
import { getVolume } from '../services/audioAnalyzer';

const DECAY = 0.95;

let prevVal = 0;

export const VolumeMeter = () => {
  const ref = useRef();

  function updateVolumeMeter() {
    if (ref.current) {
      const currentVolume = getVolume();

      // Decay slowly
      const isIncreasing = currentVolume > prevVal;
      let meteredVolume;
      if (isIncreasing) {
        meteredVolume = currentVolume;
      } else {
        meteredVolume = currentVolume + (prevVal - currentVolume) * DECAY;
      }
      prevVal = meteredVolume;

      // Convert to CSS
      const percent = Math.min(Math.round(meteredVolume * 75), 50);
      const color = `hsla(16, 100%, ${percent}%, 1)`;
      ref.current.style.backgroundColor = color;
      window.requestAnimationFrame(() => {
        updateVolumeMeter();
      });
    }
  }

  useEffect(() => {
    window.requestAnimationFrame(() => {
      updateVolumeMeter();
    });
  });

  return (
    <Box
      width={6}
      height={6}
      borderRadius="50%"
      bg="black"
      innerRef={ref}
      mx={1}
    />
  );
};
