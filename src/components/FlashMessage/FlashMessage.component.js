import React from 'react';
import PropTypes from 'prop-types';
import { TweenLite } from 'gsap/TweenMax';
import { FLASH_MESSAGES } from '../../common';
import {
  Box,
  HoverButton,
} from '../design-system';
import { InstallPWA } from '../InstallPWA';

const getMessageComponent = (messageKey) => {
  switch (messageKey) {
    case FLASH_MESSAGES.INSTALL_PWA:
      return InstallPWA;
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
      TweenLite.from(
        this.flashBox,
        0.5,
        { autoAlpha: 0, y: '5%' },
      );
    } else if (messageKey) {
      TweenLite.to(this.flashBox, 0.1, { autoAlpha: 0 });
    }
  }

  render() {
    const { messageKey, onDismiss } = this.props;
    const Message = getMessageComponent(messageKey);
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
        >
          <Box
            innerRef={(comp) => { this.flashMessage = comp; }}
            p={4}
          >
            <Message onDismiss={onDismiss} />
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
              width={16}
              height={16}
              hoverOpacity="0.5"
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
