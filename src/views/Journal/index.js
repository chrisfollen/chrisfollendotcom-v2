import React, { useEffect } from 'react';
import { InnerPageContainer } from '../../components/InnerPageContainer/style';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { content } from './copy';
import {
  HeadingContainer,
  StyledHeading,
  StyledBody,
  HeadingTextContainer,
  StyledBreakLine
} from './style';

import Footer from '../../components/Footer';

export default function Journal() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <HeadingContainer>
          <HeadingTextContainer>
            <StyledHeading>{content.heading}</StyledHeading>
            <StyledBreakLine />
            <StyledBody>{content.subheading}</StyledBody>
          </HeadingTextContainer>
        </HeadingContainer>
        <InnerPageContainer>kjhsdf</InnerPageContainer>

        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
