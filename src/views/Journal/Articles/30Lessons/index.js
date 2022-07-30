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
  BackLink
} from '../style';

import { PATH_JOURNAL } from '../../../../constants/paths';

export default function ThirtyLessons() {
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
          <ArticleBody>{content.body}</ArticleBody>
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
