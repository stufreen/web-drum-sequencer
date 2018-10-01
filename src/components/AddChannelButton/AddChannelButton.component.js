import React from 'react';
import PropTypes from 'prop-types';
import { HoverButton } from '../design-system';

export const AddChannelButtonComponent = ({ newChannel }) => (
  <HoverButton
    onClick={newChannel}
    width="16rem"
    bg="darkGray"
    color="gray"
    hoverColor="nearWhite"
    hoverBg="steel"
    transitionSpeed="0.2s"
    ml={1}
    mt={2}
  >
    Add Channel +
  </HoverButton>
);

AddChannelButtonComponent.propTypes = {
  newChannel: PropTypes.func.isRequired,
};
