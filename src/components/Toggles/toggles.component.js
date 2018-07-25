import React from 'react';
import * as R from 'ramda';
import { Toggle } from './Toggle.component';

const sixteenthNotes = R.range(0, 16);

export const TogglesComponent = ({ notes, channelID, toggleNote }) => (
  <div className="flex flex-auto">
    {sixteenthNotes.map((index) => (
      <Toggle
        key={index}
        isActive={notes.indexOf(index) >= 0}
        onClick={() => { toggleNote(channelID, index) }}
      />
    ))}
  </div>
);
