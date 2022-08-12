import React, { useEffect } from 'react';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { content } from './copy';
import {
  HeadingContainer,
  StyledBreakLine,
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
  StyledBodyExternalLink,
  ProjectDescriptionLeft
} from './style';

import HomepageImage from '../../assets/home.jpg';
import Homeward from '../../assets/homeward.jpg';

import { Heading3 } from '../../Typography/style';

import Footer from '../../components/Footer';
import { EXTERNAL_EMAIL } from '../../constants/externalLinks';

export default function Portfolio() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <HeadingContainer>
          <Heading3 as="h2">{content.heading}</Heading3>
        </HeadingContainer>
        <InnerPageContainer>
          <ProjectContainer>
            <ProjectTextContainer>
              <ProjectHeading>{content.portfolio.homeward.name}</ProjectHeading>
              <ProjectBreakLine />
              <ProjectTitle>{content.portfolio.homeward.title}</ProjectTitle>
              <ProjectDescriptionLeft>
                {content.portfolio.homeward.description}
              </ProjectDescriptionLeft>
            </ProjectTextContainer>
            <ProjectImageContainer>
              <StyledImage src={Homeward} />
            </ProjectImageContainer>
          </ProjectContainer>
          <ProjectContainerRight>
            <ProjectImageContainer>
              <StyledImage
                src={HomepageImage}
                style={{ transform: 'scaleX(-1)' }}
              />
            </ProjectImageContainer>
            <ProjectTextContainer>
              <ProjectHeadingRight>
                {content.portfolio.chrisfollen.name}
              </ProjectHeadingRight>
              <ProjectBreakLine />
              <ProjectTitle>{content.portfolio.chrisfollen.title}</ProjectTitle>
              <ProjectDescription>
                {content.portfolio.chrisfollen.description}
                <StyledBodyExternalLink
                  href={content.portfolio.chrisfollen.linkPath}
                >
                  {content.portfolio.chrisfollen.linkText}
                </StyledBodyExternalLink>
                {content.portfolio.chrisfollen.description2}
              </ProjectDescription>
            </ProjectTextContainer>
          </ProjectContainerRight>
          <ContactContainer>
            <StyledBreakLine />
            <Heading3>{content.lowHeading}</Heading3>
            <LowSubheader>
              {content.lowSubheading}
              <StyledBodyExternalLink href={EXTERNAL_EMAIL}>
                {content.email}
              </StyledBodyExternalLink>
            </LowSubheader>
          </ContactContainer>
        </InnerPageContainer>

        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
