export const swing = (beatTime, swingAmount) => {
  const SWING_TIMING = 0.5; // eight note cycles
  const MAX_SWING = 0.95;

  const beatCyclePos = beatTime % SWING_TIMING;
  const beatCyclePercentage = beatCyclePos / SWING_TIMING;


  const fx = (beatCyclePercentage ** (1 - swingAmount)) * MAX_SWING; // Exponential function
  const offset = (fx - beatCyclePercentage) * beatCyclePos;

  return beatTime + offset;
};
