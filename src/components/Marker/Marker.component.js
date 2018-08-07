import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../design-system';
import { getCurrentBeat } from '../../services/audioContext';

const Container = Box.extend`
  overflow: hidden;
`;

export class MarkerComponent extends React.PureComponent {
  componentDidMount() {
    this.updateMarker.bind(this);
    this.updateMarker();
  }

  updateMarker() {
    const { playing, startTime, bpm } = this.props;
    if (playing) {
      const currentBeat = getCurrentBeat(bpm, startTime);
      const progress = (currentBeat - 1) / 4 * 100;
      this.marker.style.width = `${progress}%`;
    }
    window.requestAnimationFrame(() => {
      this.updateMarker();
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Container flex="1 1 auto" position="relative">
        <div
          ref={(ref) => { this.marker = ref; }}
          style={{
            height: '100%',
            backgroundColor: 'white',
            opacity: 0.2,
            position: 'absolute',
            width: 0,
          }}
        />
        <Box position="absolute" display="flex" width="100%">
          {children}
        </Box>
      </Container>
    );
  }
}

MarkerComponent.defaultProps = {
  startTime: null,
};

MarkerComponent.propTypes = {
  startTime: PropTypes.number,
  bpm: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
