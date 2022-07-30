import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  ExperienceContainer,
  ExperienceHeader,
  HeroBody,
  HeroHeader,
  HeroSubheader,
  ResumeColumnsContainer,
  ResumeHeroContainer,
  ResumeInnerContainer,
  ResumeLeftColumn,
  ResumeOuterContainer,
  ResumeRightColumn,
  ResumeTitle,
  StyledBody,
  StyledBreakLine,
  VerticalLine
} from './style';
import { content } from './copy';
import { Body, BodyBold, BodyItalic } from '../../../../Typography/style';

export default function Resume() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  return (
    <ResumeOuterContainer>
      <ResumeTitle>{content.heading}</ResumeTitle>
      {isMobile ? <StyledBreakLine /> : <VerticalLine />}
      <ResumeInnerContainer>
        <ResumeHeroContainer>
          <HeroHeader>{content.name}</HeroHeader>
          <HeroSubheader>{content.about}</HeroSubheader>
          <HeroBody>{content.summary}</HeroBody>
        </ResumeHeroContainer>
        <ResumeColumnsContainer>
          <ResumeLeftColumn>
            <ExperienceHeader>{content.experienceHeading}</ExperienceHeader>
            {content.experiences.map((experience) => (
              <ExperienceContainer key={experience.company}>
                <BodyBold>{experience.company}</BodyBold>
                <StyledBody>
                  {experience.role} |{' '}
                  <BodyItalic as="span">{experience.years}</BodyItalic>
                </StyledBody>
                {experience.role2 && (
                  <StyledBody>
                    {experience.role2} |{' '}
                    <BodyItalic as="span">{experience.years2}</BodyItalic>
                  </StyledBody>
                )}
              </ExperienceContainer>
            ))}
          </ResumeLeftColumn>
          <ResumeRightColumn>
            <ExperienceHeader>{content.educationHeading}</ExperienceHeader>
            {content.education.map((education) => (
              <ExperienceContainer key={education.school}>
                <BodyBold>{education.school}</BodyBold>
                <StyledBody>
                  {education.degree} |{' '}
                  {education.gpa && <Body as="span">{education.gpa} | </Body>}
                  <BodyItalic as="span">{education.years}</BodyItalic>
                </StyledBody>
                {education.degree2 && (
                  <StyledBody>
                    {education.degree2} |{' '}
                    {education.gpa2 && (
                      <Body as="span">{education.gpa2} | </Body>
                    )}
                    <BodyItalic as="span">{education.years2}</BodyItalic>
                  </StyledBody>
                )}
              </ExperienceContainer>
            ))}
            <ExperienceContainer>
              <ExperienceHeader>{content.skillsHeading}</ExperienceHeader>
              <ExperienceContainer>
                <Body>{content.skills}</Body>
              </ExperienceContainer>
            </ExperienceContainer>
          </ResumeRightColumn>
        </ResumeColumnsContainer>
      </ResumeInnerContainer>
    </ResumeOuterContainer>
  );
}
