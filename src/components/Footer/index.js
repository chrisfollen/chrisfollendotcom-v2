import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  ExternalLink,
  ExternalLinksContainer,
  FooterOuterContainer,
  FooterText
} from './style';
import placeholderLogo from '../../assets/logo.png';
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
          <ExternalLink src={placeholderLogo} alt="Email icon" />
        </a>
        <a href={EXTERNAL_LINKEDIN} target="_blank" rel="noreferrer">
          <ExternalLink src={placeholderLogo} alt="LinkedIn logo" />
        </a>
        <a href={EXTERNAL_GITHUB} target="_blank" rel="noreferrer">
          <ExternalLink src={placeholderLogo} alt="GitHub logo" />
        </a>
      </ExternalLinksContainer>
    </FooterOuterContainer>
  );
}
