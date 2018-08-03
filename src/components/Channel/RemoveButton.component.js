import React from 'react';
import PropTypes from 'prop-types';
import { HoverButton } from '../design-system';

export const RemoveButton = ({ onClick }) => (
  <HoverButton
    bg="transparent"
    hoverBg="darkGray"
    color="gray"
    hoverColor="nearWhite"
    p={0}
    borderRadius="3em"
    width={40}
    height={40}
    display="flex"
    justifyContent="space-between"
    onClick={onClick}
    fontSize={3}
    alignSelf="center"
    transitionSpeed="0.2s"
  >
    -
  </HoverButton>
);

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
