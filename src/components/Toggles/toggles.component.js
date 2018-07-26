import React from 'react';
import * as R from 'ramda';
import { Toggle } from './Toggle.component';

const sixteenthNotes = R.range(0, 16);

const isActive = (notes, beat) => notes.find(note => note.beat === beat);

export const TogglesComponent = ({ notes, channelID, toggleNote }) => (
  <div className="flex flex-auto">
    {sixteenthNotes.map((index) => {
      const beat = 1 + index / 4;
      return (<Toggle
        key={index}
        isActive={isActive(notes, beat)}
        onClick={() => { toggleNote(channelID, beat) }}
      />);
    })}
  </div>
);
