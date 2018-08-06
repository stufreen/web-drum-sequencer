import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ss from 'styled-system';
import { getCurrentBeat } from '../../services/audioContext';
import { Box } from '../design-system';

const BeatButton = styled.button`
  ${ss.color}
  ${ss.space}
  ${ss.width}
  ${ss.height}
  ${ss.borders}
  ${ss.borderRadius}
  outline: none;
  overflow: hidden;
  transition: background-color 0.1s;
  position: relative;
`;

BeatButton.defaultProps = {
  border: 'none',
  borderRadius: '0.75rem',
  height: '1.5rem',
  width: '1.5rem',
};

export class Toggle extends React.Component {
  componentDidMount() {
    this.updateToggle.bind(this);
    this.updateToggle();
  }

  updateToggle() {
    const {
      playing,
      startTime,
      bpm,
      isActive,
      beat,
    } = this.props;

    if (playing && isActive && this.button) {
      const currentBeat = getCurrentBeat({ bpm, startTime });
      const opacity = currentBeat - beat < 0.25 && currentBeat - beat > 0
        ? 1
        : 0;
      const transition = currentBeat - beat < 0.25 && currentBeat - beat > 0
        ? 'opacity 0s'
        : `opacity ${bpm / 120}s`;
      this.button.style.transition = transition;
      this.button.style.opacity = `${opacity}`;
    }

    window.requestAnimationFrame(() => {
      this.updateToggle();
    });
  }

  render() {
    const { isActive, onClick } = this.props;
    return (
      <BeatButton
        type="button"
        bg={isActive ? 'melon' : 'darkGray'}
        onClick={onClick}
      >
        <Box
          position="absolute"
          bg="nearWhite"
          width="100%"
          height="100%"
          left={0}
          top={0}
          opacity={0}
          innerRef={(ref) => { this.button = ref; }}
        />
      </BeatButton>
    );
  }
}

Toggle.defaultProps = {
  startTime: null,
};

Toggle.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  startTime: PropTypes.number,
  bpm: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  beat: PropTypes.number.isRequired,
};
