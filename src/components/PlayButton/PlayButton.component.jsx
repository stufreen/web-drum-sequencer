import React from 'react';
import PropTypes from 'prop-types';
import { FancyButton } from '../FancyButton.component';
import { Text } from '../design-system';

const StyledPlayButton = FancyButton.extend`
  margin-bottom: 1px;
  width: 8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export function PlayButtonComponent({
  startPlaybackAndResume,
  stopPlayback,
  playing,
}) {
  return playing ? (
    <StyledPlayButton onClick={stopPlayback} variant="red">
      <Text mr={2} fontSize={1}>
        Stop
      </Text>
      <svg
        width="0.9em"
        height="0.9em"
        viewBox="0 0 371 371"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" fill="none" fillRule="evenodd">
          <rect fill="#FFFFFF" x="0" y="0" width="371" height="371" />
        </g>
      </svg>
    </StyledPlayButton>
  ) : (
    <StyledPlayButton onClick={startPlaybackAndResume} variant="green">
      <Text mr={2} fontSize={1}>
        PLAY
      </Text>
      <svg
        width="1.1em"
        height="0.9em"
        viewBox="0 0 452 396"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g fill="#FFFFFF">
            <rect stroke="#FFFFFF" x="0.5" y="11.5" width="131" height="369" />
            <polygon points="202.140625 0 202.140625 396 452 198" />
          </g>
        </g>
      </svg>
    </StyledPlayButton>
  );
}

PlayButtonComponent.propTypes = {
  startPlaybackAndResume: PropTypes.func.isRequired,
  stopPlayback: PropTypes.func.isRequired,
  playing: PropTypes.bool.isRequired,
};
