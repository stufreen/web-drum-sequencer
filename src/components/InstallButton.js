import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HoverButton } from './design-system';
import { promptToInstall } from '../services/pwaInstall';
import { canInstallSelector } from '../common/window/window.selectors';

const isStandalone = window.matchMedia('(display-mode: standalone)').matches;

const InstallButtonComponent = ({ canInstall }) => (canInstall && !isStandalone
  ? (
    <HoverButton
      onClick={() => {
        promptToInstall();
      }}
      width="auto"
      bg="blue"
      color="white"
      hoverColor="nearWhite"
      hoverBg="darkBlue"
      transitionSpeed="0.2s"
      p="0.6rem 1.2rem"
    >
      INSTALL
    </HoverButton>
  )
  : null);

InstallButtonComponent.propTypes = {
  canInstall: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  canInstall: canInstallSelector(state),
});

export const InstallButton = connect(mapStateToProps)(InstallButtonComponent);
