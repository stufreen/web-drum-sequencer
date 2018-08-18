import React from 'react';
import PropTypes from 'prop-types';
import { HoverButton } from '../design-system';
import theme from '../../styles/theme';

export const RemoveButton = ({ onClick }) => (
  <HoverButton
    bg="transparent"
    hoverBg="darkGray"
    color="gray"
    hoverColor="nearWhite"
    p={0}
    borderRadius="3em"
    width={[20, 20, 30, 30, 40]}
    height={[20, 20, 30, 30, 40]}
    display="flex"
    justifyContent="center"
    onClick={onClick}
    fontSize={3}
    alignItems="middle"
    alignSelf="center"
    transitionSpeed="0.2s"
  >
    <svg width="14" height="14" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
      <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" fill={theme.colors.steel} />
    </svg>
  </HoverButton>
);

RemoveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
