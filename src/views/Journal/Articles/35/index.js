import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OuterPageContainer } from '../../../../components/OuterPageContainer/style';
import { PageColumn } from '../../../../components/PageColumn/style';
import { content } from './copy';
import Footer from '../../../../components/Footer';
import {
  ArticleBody,
  ArticleDate,
  ArticleContainer,
  ArticleImage,
  ArticleTitle,
  ArticleNumberedList,
  ArticleListItem,
  BackLink,
  StyledBodyLink
} from '../style';

import { PATH_JOURNAL } from '../../../../constants/paths';

export default function ThirtyFiveLessons() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <ArticleContainer>
          <ArticleTitle>{content.title}</ArticleTitle>
          <ArticleDate>{content.date}</ArticleDate>
          <ArticleImage src={content.heroImage} alt={content.imageAltText} />
          <ArticleBody>
            {' '}
            {content.intro.copy1}{' '}
            <StyledBodyLink to={content.intro.internalLink}>
              {content.intro.linkText}
            </StyledBodyLink>{' '}
            {content.intro.copy2}{' '}
          </ArticleBody>
          <ArticleNumberedList>
            {content.lessons.map((lesson) => (
              <ArticleListItem key={lesson}>{lesson}</ArticleListItem>
            ))}
          </ArticleNumberedList>
          <BackLink>
            <Link to={PATH_JOURNAL}>{content.backLink}</Link>
          </BackLink>
        </ArticleContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
