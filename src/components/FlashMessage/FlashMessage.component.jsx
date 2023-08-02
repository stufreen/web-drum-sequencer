import React from 'react';
import PropTypes from 'prop-types';
import * as animol from 'animol';
import { FLASH_MESSAGES } from '../../common';
import {
  Box,
  HoverButton,
} from '../design-system';
import { SampleLoadError } from '../SampleLoadError.component';
import { PresetSaved } from '../PresetSaved.component';
import { PresetDeleted } from '../PresetDeleted.component';
import { timedCallback } from '../timedCallback.hoc';

const getMessageComponent = (messageKey) => {
  switch (messageKey) {
    case FLASH_MESSAGES.SAMPLE_LOAD_ERROR:
      return SampleLoadError;
    case FLASH_MESSAGES.PRESET_SAVED:
      return PresetSaved;
    case FLASH_MESSAGES.PRESET_DELETED:
      return PresetDeleted;
    default:
      return undefined;
  }
};

export class FlashMessageComponent extends React.Component {
  componentDidMount() {
    this.animateBox();
  }

  componentDidUpdate() {
    this.animateBox();
  }

  animateBox() {
    const { flashMessageVisible, messageKey } = this.props;
    if (messageKey && flashMessageVisible) {
      this.flashBox.style.display = 'block';
      animol.css(
        this.flashBox,
        500,
        { opacity: 0, transform: { translateY: '10%' } },
        { opacity: 1, transform: { translateY: '0%' } },
        animol.Easing.easeOutCubic,
      );
    } else if (messageKey) {
      const animation = animol.css(
        this.flashBox,
        200,
        { opacity: 1 },
        { opacity: 0 },
        animol.Easing.easeInCubic,
      );
      animation.promise.then(() => {
        this.flashBox.style.display = 'none';
      });
    }
  }

  render() {
    const { messageKey, onDismiss } = this.props;
    const Message = getMessageComponent(messageKey);
    const DisappearingMessage = timedCallback(onDismiss, 6000)(Message);
    return Message
      ? (
        <Box
          bg="white"
          position="fixed"
          bottom={0}
          right={0}
          m={3}
          boxShadow="0 0.5rem 3rem rgba(0,0,0,0.9)"
          maxWidth="30rem"
          innerRef={(comp) => { this.flashBox = comp; }}
          opacity="0"
        >
          <Box
            innerRef={(comp) => { this.flashMessage = comp; }}
            p={4}
          >
            <DisappearingMessage onDismiss={onDismiss} />
            <HoverButton
              bg="transparent"
              m={1}
              display="flex"
              justifyContent="space-between"
              onClick={onDismiss}
              fontSize={3}
              alignItems="center"
              alignSelf="center"
              transitionSpeed="0.2s"
              position="absolute"
              right="0.3rem"
              top="0.3rem"
              width="0.8rem"
              height="0.8rem"
              hoverOpacity="0.5"
              p={0}
            >
              <svg width="100%" height="100%" viewBox="169 215 170 170" xmlns="http://www.w3.org/2000/svg">
                <path d="M 169.72656,371.38672 L 238.67188,302.44141 L 169.92188,233.69141 L 181.25,222.36328 L 250,291.11328 L 318.75,222.36328 L 329.6875,233.49609 L 260.9375,302.24609 L 330.07812,371.38672 L 318.94531,382.71484 L 249.80469,313.57422 L 180.85938,382.51953 L 169.72656,371.38672 z" />
              </svg>
            </HoverButton>
          </Box>
        </Box>
      )
      : null;
  }
}

FlashMessageComponent.propTypes = {
  messageKey: PropTypes.string,
  onDismiss: PropTypes.func.isRequired,
  flashMessageVisible: PropTypes.bool,
};

FlashMessageComponent.defaultProps = {
  messageKey: null,
  flashMessageVisible: false,
};
