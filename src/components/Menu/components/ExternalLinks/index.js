import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import emailIcon from '../../../../assets/Icons/email.png';
import githubIcon from '../../../../assets/Icons/github.png';
import linkedinIcon from '../../../../assets/Icons/linkedin.png';
import emailDarkIcon from '../../../../assets/Icons/email_dark.png';
import githubDarkIcon from '../../../../assets/Icons/github_dark.png';
import linkedinDarkIcon from '../../../../assets/Icons/linkedin_dark.png';

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

  return (
    <ExternalLinksOuterContainer menuActive={menuActive}>
      <ExternalLinksInnerContainer isMobile={isMobile}>
        <a href={EXTERNAL_EMAIL} target="_blank" rel="noopener noreferrer">
          <ExternalLink
            src={isMobile ? emailDarkIcon : emailIcon}
            alt="Email icon"
          />
        </a>
        <a href={EXTERNAL_LINKEDIN} target="_blank" rel="noopener noreferrer">
          <ExternalLink
            src={isMobile ? linkedinDarkIcon : linkedinIcon}
            alt="LinkedIn logo"
          />
        </a>
        <a href={EXTERNAL_GITHUB} target="_blank" rel="noopener noreferrer">
          <ExternalLink
            src={isMobile ? githubDarkIcon : githubIcon}
            alt="GitHub logo"
          />
        </a>
      </ExternalLinksInnerContainer>
    </ExternalLinksOuterContainer>
  );
}

ExternalLinks.propTypes = {
  menuActive: PropTypes.bool.isRequired
};
