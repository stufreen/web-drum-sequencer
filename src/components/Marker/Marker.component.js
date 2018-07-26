import React from 'react';

export const MarkerComponent = ({ progress }) => (
  <div className="flex-auto ml1 h2 relative overflow-hidden">
    <div
      className="h-100 bg-light-blue absolute"
      style={{ left: `${progress * 100}%`, width: 5 }}
    />
  </div>
);
