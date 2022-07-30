import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { content } from './copy';
import {
  AboutChrisContainer,
  AboutChrisHeading,
  AboutChrisPhoto,
  AboutChrisTextContainer,
  HeadingText,
  HeadingTextContainer,
  HeroContainer,
  HeroImageWrapper,
  HobbiesContainer,
  HobbiesTitleContainer,
  ManifestoText,
  QuoteAuthor,
  QuoteContainer,
  QuoteText,
  QuoteTextContainer,
  StyledBreakLine,
  StyledBreakLineNoMargin
} from './style';
import ChrisPhoto from '../../assets/chris.jpg';
import { Body, Category } from '../../Typography/style';
import HobbyCard from './components/HobbyCard';
import Resume from './components/Resume';
import Footer from '../../components/Footer';

export default function About() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <HeroContainer>
          <HeadingTextContainer>
            <HeadingText>{content.manifestoTitle}</HeadingText>
            <StyledBreakLine />
            <ManifestoText
              dangerouslySetInnerHTML={{ __html: content.manifestoText }}
            />
          </HeadingTextContainer>
          <HeroImageWrapper />
          <QuoteContainer>
            <QuoteTextContainer>
              <QuoteText>{content.quote}</QuoteText>
              <QuoteAuthor>{content.quoteAuthor}</QuoteAuthor>
            </QuoteTextContainer>
          </QuoteContainer>
        </HeroContainer>
        <InnerPageContainer>
          <AboutChrisContainer>
            <AboutChrisPhoto src={ChrisPhoto} />
            <AboutChrisTextContainer>
              <AboutChrisHeading>{content.aboutMeHeading}</AboutChrisHeading>
              <Body as="p">{content.aboutMe}</Body>
            </AboutChrisTextContainer>
          </AboutChrisContainer>
          <HobbiesContainer>
            <HobbiesTitleContainer>
              <Category>{content.hobbiesAndInterestsHeader}</Category>
              <StyledBreakLineNoMargin />
            </HobbiesTitleContainer>
            <Grid
              container
              columnSpacing={6}
              rowSpacing={8}
              alignItems="stretch"
            >
              {content.hobbiesAndInterests.map((hobby) => (
                <Grid item key={hobby.heading} sm={4}>
                  <HobbyCard
                    image={hobby.image}
                    title={hobby.heading}
                    copy={hobby.body}
                    linkText={hobby.linkText}
                    linkPath={hobby.linkPath}
                    copy2={hobby.body2}
                  />
                </Grid>
              ))}
            </Grid>
          </HobbiesContainer>
          <Resume />
        </InnerPageContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
