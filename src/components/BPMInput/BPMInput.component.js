import React from 'react';
import PropTypes from 'prop-types';

export const BPMInputComponent = ({ bpm, setBPM }) => (
  <div className="measure sans-serif ml3">
    <label htmlFor="bpm">
      <input
        id="bpm"
        className="input-reset ba f2 b--mid-gray bw1 pa2 mb2 db w4 h3 bg-black red br2"
        type="number"
        value={bpm}
        onChange={(e) => {
          setBPM(parseInt(e.target.value, 10));
        }}
      />
    </label>
  </div>
);

BPMInputComponent.propTypes = {
  bpm: PropTypes.number.isRequired,
  setBPM: PropTypes.func.isRequired,
};
