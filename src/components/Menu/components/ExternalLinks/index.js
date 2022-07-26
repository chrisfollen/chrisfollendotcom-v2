import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import placeholderLogo from '../../../../assets/logo.png';

import {
  ExternalLinksOuterContainer,
  ExternalLinksInnerContainer,
  ExternalLink
} from './style';
import {
  EXTERNAL_EMAIL,
  EXTERNAL_GITHUB,
  EXTERNAL_LINKEDIN
} from '../../../../constants/externalLinks';

export default function ExternalLinks({ menuActive }) {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  console.log('menuActive', menuActive);
  return (
    <ExternalLinksOuterContainer menuActive={menuActive}>
      <ExternalLinksInnerContainer isMobile={isMobile}>
        <a href={EXTERNAL_EMAIL} target="_blank" rel="noreferrer">
          <ExternalLink src={placeholderLogo} alt="Email icon" />
        </a>
        <a href={EXTERNAL_LINKEDIN} target="_blank" rel="noreferrer">
          <ExternalLink src={placeholderLogo} alt="LinkedIn logo" />
        </a>
        <a href={EXTERNAL_GITHUB} target="_blank" rel="noreferrer">
          <ExternalLink src={placeholderLogo} alt="GitHub logo" />
        </a>
      </ExternalLinksInnerContainer>
    </ExternalLinksOuterContainer>
  );
}

ExternalLinks.propTypes = {
  menuActive: PropTypes.bool.isRequired
};
