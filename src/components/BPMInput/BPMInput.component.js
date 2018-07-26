import React from 'react';

export const BPMInputComponent = ({ bpm, setBPM }) => (
  <div className="measure sans-serif">
    <label htmlFor="bpm" className="f5 b db mb2">BPM</label>
    <input
      id="bpm"
      className="input-reset ba f2 b--black-20 pa2 mb2 db w4 h3"
      type="number"
      value={bpm}
      onChange={(e) => {
        setBPM(parseInt(e.target.value));
      }}
    />
  </div>
);