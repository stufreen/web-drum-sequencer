import React from 'react';
import * as R from 'ramda';

const sixteenthNotes = R.range(0, 16);

export const Toggles = () => (
  <div className="flex flex-auto">
    {sixteenthNotes.map((index) => (
      <button
        className="h4 mr1 flex-auto"
        type="button"
        key={index}
        onClick={() => { console.log(index); }}
      />
    ))}
  </div>
);
