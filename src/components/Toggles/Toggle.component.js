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
        ? 0.8
        : 0;
      const transition = currentBeat - beat < 0.25 && currentBeat - beat > 0
        ? 'all 0s'
        : `all ${120 / bpm}s`;
      const transform = currentBeat - beat < 0.25 && currentBeat - beat > 0
        ? 'scale(1.3)'
        : 'scale(1)';
      this.button.style.transition = transition;
      this.button.style.opacity = `${opacity}`;
      this.button.style.transform = transform;
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
          bg="paleMelon"
          width="100%"
          height="100%"
          left={0}
          top={0}
          opacity={0}
          borderRadius="100%"
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
