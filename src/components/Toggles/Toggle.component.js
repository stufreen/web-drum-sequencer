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
  borderRadius: '100%',
};

export class Toggle extends React.Component {
  componentDidMount() {
    this.updateToggle.bind(this);
    this.updateToggle();
  }

  updateToggle() {
    if (!this.button) {
      return; // Button has unmounted, stop the animation
    }

    const {
      playing,
      startTime,
      bpm,
      isActive,
      beat,
    } = this.props;

    if (playing
      && isActive
      && getCurrentBeat(bpm, startTime) - beat < 0.25
      && getCurrentBeat(bpm, startTime) - beat > 0
    ) {
      this.button.style.transition = 'all 0s';
      this.button.style.opacity = '0.8';
      this.button.style.transform = 'scale(1.3)';
    } else {
      this.button.style.transition = `all ${120 / bpm}s`;
      this.button.style.opacity = 0;
      this.button.style.transform = 'scale(1)';
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
        width={[14, 14, 16, 18, 18, 20, 24, 26]}
        height={[14, 14, 16, 18, 18, 20, 24, 26]}
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
