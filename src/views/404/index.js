import React, { useEffect } from 'react';
import {
  HeroText,
  NotFoundContainer,
  InnerNotFoundPageContainer,
  Subheader,
  StyledBody,
  StyledBodyLink
} from './style';
import { content } from './copy';

export default function NotFound() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <NotFoundContainer>
      <InnerNotFoundPageContainer>
        <HeroText>{content.header}</HeroText>
        <Subheader>{content.subheader}</Subheader>
        <StyledBody>{content.bodyCopy1}</StyledBody>
        <StyledBody>
          {content.bodyCopy2}
          <StyledBodyLink to={content.linkPath}>
            {content.linkText}
          </StyledBodyLink>
          {content.bodyCopy3}
        </StyledBody>
      </InnerNotFoundPageContainer>
    </NotFoundContainer>
  );
}
