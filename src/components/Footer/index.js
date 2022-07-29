import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  ExternalLink,
  ExternalLinksContainer,
  FooterOuterContainer,
  FooterText
} from './style';
import emailIcon from '../../assets/Icons/email_dark.png';
import githubIcon from '../../assets/Icons/github_dark.png';
import linkedinIcon from '../../assets/Icons/linkedin_dark.png';
import {
  EXTERNAL_EMAIL,
  EXTERNAL_GITHUB,
  EXTERNAL_LINKEDIN
} from '../../constants/externalLinks';
import { getCopy } from './copy';

export default function Footer() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <FooterOuterContainer>
      <FooterText
        dangerouslySetInnerHTML={{
          __html: isMobile ? getCopy.mobileCopy : getCopy.copy
        }}
      />
      <ExternalLinksContainer>
        <a href={EXTERNAL_EMAIL} target="_blank" rel="noreferrer">
          <ExternalLink src={emailIcon} alt="Email icon" />
        </a>
        <a href={EXTERNAL_LINKEDIN} target="_blank" rel="noreferrer">
          <ExternalLink src={githubIcon} alt="LinkedIn logo" />
        </a>
        <a href={EXTERNAL_GITHUB} target="_blank" rel="noreferrer">
          <ExternalLink src={linkedinIcon} alt="GitHub logo" />
        </a>
      </ExternalLinksContainer>
    </FooterOuterContainer>
  );
}
