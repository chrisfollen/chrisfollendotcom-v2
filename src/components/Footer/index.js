import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  ExternalLink,
  ExternalLinksContainer,
  FooterInnerContainer,
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
import { content } from './copy';

export default function Footer() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <FooterOuterContainer>
      <FooterInnerContainer>
        <FooterText
          dangerouslySetInnerHTML={{
            __html: isMobile ? content.mobileCopy : content.copy
          }}
        />
        <ExternalLinksContainer>
          <a href={EXTERNAL_EMAIL} target="_blank" rel="noopener noreferrer">
            <ExternalLink src={emailIcon} alt="Email icon" />
          </a>
          <a href={EXTERNAL_LINKEDIN} target="_blank" rel="noopener noreferrer">
            <ExternalLink src={linkedinIcon} alt="LinkedIn logo" />
          </a>
          <a href={EXTERNAL_GITHUB} target="_blank" rel="noopener noreferrer">
            <ExternalLink src={githubIcon} alt="GitHub logo" />
          </a>
        </ExternalLinksContainer>
      </FooterInnerContainer>
    </FooterOuterContainer>
  );
}
