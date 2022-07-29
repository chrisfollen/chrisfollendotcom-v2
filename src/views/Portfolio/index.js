import React, { useEffect } from 'react';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { getCopy } from './copy';
import {
  HeadingContainer,
  StyledBreakLine,
  StyledBodyLink,
  LowSubheader,
  ProjectContainer,
  ProjectHeading,
  ProjectTitle,
  ProjectDescription,
  ProjectBreakLine,
  ProjectImageContainer,
  ProjectTextContainer,
  StyledImage,
  ContactContainer,
  ProjectHeadingRight,
  ProjectContainerRight,
  StyledBodyExternalLink
} from './style';

import ChrisImage from '../../assets/testing-12.jpg';
import Homeward from '../../assets/homeward.jpg';

import { Heading3 } from '../../Typography/style';

import Footer from '../../components/Footer';
import { EXTERNAL_EMAIL } from '../../constants/externalLinks';

export default function Portfolio() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <HeadingContainer>
          <Heading3 as="h2">{getCopy.heading}</Heading3>
        </HeadingContainer>
        <InnerPageContainer>
          <ProjectContainer>
            <ProjectTextContainer>
              <ProjectHeading>{getCopy.portfolio.homeward.name}</ProjectHeading>
              <ProjectBreakLine />
              <ProjectTitle>{getCopy.portfolio.homeward.title}</ProjectTitle>
              <ProjectDescription>
                {getCopy.portfolio.homeward.description}
              </ProjectDescription>
            </ProjectTextContainer>
            <ProjectImageContainer>
              <StyledImage src={Homeward} />
            </ProjectImageContainer>
          </ProjectContainer>
          <ProjectContainerRight>
            <ProjectImageContainer>
              <StyledImage
                src={ChrisImage}
                style={{ transform: 'scaleX(-1)' }}
              />
            </ProjectImageContainer>
            <ProjectTextContainer>
              <ProjectHeadingRight>
                {getCopy.portfolio.chrisfollen.name}
              </ProjectHeadingRight>
              <ProjectBreakLine />
              <ProjectTitle>{getCopy.portfolio.chrisfollen.title}</ProjectTitle>
              <ProjectDescription>
                {getCopy.portfolio.chrisfollen.description}
                <StyledBodyExternalLink
                  href={getCopy.portfolio.chrisfollen.linkPath}
                >
                  {getCopy.portfolio.chrisfollen.linkText}
                </StyledBodyExternalLink>
                {getCopy.portfolio.chrisfollen.description2}
              </ProjectDescription>
            </ProjectTextContainer>
          </ProjectContainerRight>
          <ContactContainer>
            <StyledBreakLine />
            <Heading3>{getCopy.lowHeading}</Heading3>
            <LowSubheader>
              {getCopy.lowSubheading}
              <StyledBodyLink to={EXTERNAL_EMAIL}>
                {getCopy.email}
              </StyledBodyLink>
            </LowSubheader>
          </ContactContainer>
        </InnerPageContainer>

        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
