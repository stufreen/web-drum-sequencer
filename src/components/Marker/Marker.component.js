import React from 'react';
import PropTypes from 'prop-types';

export const MarkerComponent = ({ progress }) => (
  <div className="flex">
    <div className="w4 h2 pa2" />
    <div className="flex-auto ml1 h2 relative overflow-hidden bg-lightest-blue mb1">
      <div
        className="h-100 bg-light-blue absolute"
        style={{ left: `${progress * 100}%`, width: 5 }}
      />
    </div>
  </div>
);

MarkerComponent.propTypes = {
  progress: PropTypes.number.isRequired,
};
