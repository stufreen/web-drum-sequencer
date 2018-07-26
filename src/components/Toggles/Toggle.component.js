import React from 'react';

export const Toggle = ({ isActive, onClick, highlight }) => (
  isActive ?
    <button
      className={`h3 ml1 bn flex-auto bg-light-red outline-transparent ${ highlight ? 'highlight' : 'no-highlight' }`}
      type="button"
      onClick={onClick}
    /> :
    <button
      className="h3 ml1 bn flex-auto bg-near-white outline-transparent"
      type="button"
      onClick={onClick}
    />
);
