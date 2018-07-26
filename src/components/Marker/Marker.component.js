import React from 'react';

export const MarkerComponent = ({ progress }) => (
  <div className="flex-auto h2 relative">
    <div
      className="h-100 bg-gray absolute"
      style={{ left: `${progress * 100}%`, width: 3 }}
    />
  </div>
);
