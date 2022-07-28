import React, { useEffect } from 'react';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { getCopy } from './copy';
import {
  HeadingText,
  HeadingTextContainer,
  HeroContainer,
  ImageWrapper,
  ManifestoText,
  QuoteAuthor,
  QuoteContainer,
  QuoteText,
  QuoteTextContainer,
  StyledBreakLine
} from './style';

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
          <ImageWrapper />
          <QuoteContainer>
            <QuoteTextContainer>
              <QuoteText>{getCopy.quote}</QuoteText>
              <QuoteAuthor>{getCopy.quoteAuthor}</QuoteAuthor>
            </QuoteTextContainer>
          </QuoteContainer>
        </HeroContainer>
        <div style={{ height: '1500px', backgroundColor: 'blue' }} />
      </PageColumn>
    </OuterPageContainer>
  );
}
