import React from 'react';
import PropTypes from 'prop-types';

export const BPMInputComponent = ({ bpm, setBPM }) => (
  <div className="measure sans-serif">
    <label htmlFor="bpm">
      <span className="f5 b db mb2">
        BPM
      </span>
      <input
        id="bpm"
        className="input-reset ba f2 b--black-20 pa2 mb2 db w4 h3"
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
