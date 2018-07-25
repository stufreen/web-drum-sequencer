import React from 'react';

export const Toggle = ({ isActive, onClick }) => (
  isActive ?
    <button
      className="h4 ml1 bn flex-auto bg-light-red"
      type="button"
      onClick={onClick}
    /> :
    <button
      className="h4 ml1 bn flex-auto bg-dark-gray"
      type="button"
      onClick={onClick}
    />
);
