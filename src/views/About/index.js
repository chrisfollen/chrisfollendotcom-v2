import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { getCopy } from './copy';
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
import Placeholder2 from '../../assets/placeholder2.jpg';
import { Body, Category } from '../../Typography/style';
import HobbyCard from './components/HobbyCard';
import Resume from './components/Resume';

export default function About() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <HeroContainer>
          <HeadingTextContainer>
            <HeadingText>{getCopy.manifestoTitle}</HeadingText>
            <StyledBreakLine />
            <ManifestoText
              dangerouslySetInnerHTML={{ __html: getCopy.manifestoText }}
            />
          </HeadingTextContainer>
          <HeroImageWrapper />
          <QuoteContainer>
            <QuoteTextContainer>
              <QuoteText>{getCopy.quote}</QuoteText>
              <QuoteAuthor>{getCopy.quoteAuthor}</QuoteAuthor>
            </QuoteTextContainer>
          </QuoteContainer>
        </HeroContainer>
        <InnerPageContainer>
          <AboutChrisContainer>
            <AboutChrisPhoto src={Placeholder2} />
            <AboutChrisTextContainer>
              <AboutChrisHeading>{getCopy.aboutMeHeading}</AboutChrisHeading>
              <Body>{getCopy.aboutMe}</Body>
            </AboutChrisTextContainer>
          </AboutChrisContainer>
          <HobbiesContainer>
            <HobbiesTitleContainer>
              <Category>{getCopy.hobbiesAndInterestsHeader}</Category>
              <StyledBreakLineNoMargin />
            </HobbiesTitleContainer>
            <Grid
              container
              columnSpacing={4}
              rowSpacing={6}
              alignItems="stretch"
            >
              {getCopy.hobbiesAndInterests.map((hobby) => (
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
      </PageColumn>
    </OuterPageContainer>
  );
}
