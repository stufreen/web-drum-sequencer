import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { Box } from '../design-system';
import { Toggle } from './Toggle.component';
import { ToggleGroup } from './ToggleGroup.component';

const isActive = (notes, beat) => notes.find(note => note.beat === beat) !== undefined;

const highlight = (beat, currentBeat) => {
  if (currentBeat > beat && currentBeat < beat + 0.25) {
    return true;
  }
  return false;
};

const sixteenthNotes = R.range(0, 16);

export const TogglesComponent = ({
  notes,
  channelID,
  toggleNote,
  currentBeat,
}) => {
  const toggles = sixteenthNotes.map((index) => {
    const beat = 1 + index / 4;
    return (
      <Toggle
        key={index}
        isActive={isActive(notes, beat)}
        onClick={() => { toggleNote(channelID, beat); }}
        highlight={highlight(beat, currentBeat)}
      />
    );
  });

  const toggleGroups = R.splitEvery(4, toggles);

  return (
    <Box display="flex" flex="1 1 auto">
      {toggleGroups.map(toggleGroup => (
        <ToggleGroup>
          {toggleGroup}
        </ToggleGroup>
      ))}
    </Box>
  );
};

TogglesComponent.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  channelID: PropTypes.string.isRequired,
  toggleNote: PropTypes.func.isRequired,
  currentBeat: PropTypes.number.isRequired,
};
