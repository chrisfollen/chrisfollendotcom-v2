import React, { useEffect } from 'react';
import { content } from './copy';
import {
  HeadingText,
  HomeContainer,
  ImageWrapper,
  NameText,
  StyledBodyText,
  VerticalLine
} from './style';

export default function Home() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <HomeContainer>
      <HeadingText dangerouslySetInnerHTML={{ __html: content.heading }} />
      <ImageWrapper />
      <StyledBodyText dangerouslySetInnerHTML={{ __html: content.aboutText }} />
      <NameText>{content.name}</NameText>
      <VerticalLine />
    </HomeContainer>
  );
}
