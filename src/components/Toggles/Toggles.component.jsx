import React from 'react';
import * as R from 'ramda';
import PropTypes from 'prop-types';
import { Box } from '../design-system';
import { Toggle } from './Toggle.component';
import { ToggleGroup } from './ToggleGroup.component';

const isActive = (notes, beat) => notes.find(note => note.beat === beat) !== undefined;

const sixteenthNotes = R.range(0, 16);

export class TogglesComponent extends React.PureComponent {
  render() {
    const {
      notes,
      channelID,
      toggleNote,
      bpm,
      playing,
      pattern,
    } = this.props;
    const toggles = sixteenthNotes.map((index) => {
      const beat = 1 + index / 4;
      return (
        <Toggle
          key={index}
          isActive={isActive(notes, beat)}
          onClick={() => {
            toggleNote(channelID, pattern, beat);
          }}
          bpm={bpm}
          playing={playing}
          beat={beat}
        />
      );
    });

    const toggleGroups = R.splitEvery(4, toggles);

    return (
      <Box display="flex" flex="1 1 auto" alignItems="center">
        {toggleGroups.map((toggleGroup, i) => (
          <ToggleGroup key={i /* eslint-disable-line*/}>
            {toggleGroup}
          </ToggleGroup>
        ))}
      </Box>
    );
  }
}

TogglesComponent.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  channelID: PropTypes.string.isRequired,
  toggleNote: PropTypes.func.isRequired,
  bpm: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  pattern: PropTypes.number.isRequired,
};
