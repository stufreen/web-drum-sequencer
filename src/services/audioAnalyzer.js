import { analyserNode } from './audioRouter';

const pcmData = new Float32Array(analyserNode.fftSize);

export function getVolume() {
  analyserNode.getFloatTimeDomainData(pcmData);
  let peak = 0;
  for (const amplitude of pcmData) {
    if (amplitude > peak) {
      peak = amplitude;
    }
  }
  return peak;
}
