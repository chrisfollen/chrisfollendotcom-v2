import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OuterPageContainer } from '../../../../components/OuterPageContainer/style';
import { PageColumn } from '../../../../components/PageColumn/style';
import { getCopy } from './copy';
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
import HeroImage from '../../../../assets/blog/blog-1.jpg';
import { PATH_JOURNAL } from '../../../../constants/paths';

export default function ThirtyLessons() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <ArticleContainer>
          <ArticleTitle>{getCopy.title}</ArticleTitle>
          <ArticleDate>{getCopy.date}</ArticleDate>
          <ArticleImage src={HeroImage} alt="author" />
          <ArticleBody>{getCopy.body}</ArticleBody>
          <ArticleNumberedList>
            {getCopy.lessons.map((lesson) => (
              <ArticleListItem key={lesson}>{lesson}</ArticleListItem>
            ))}
          </ArticleNumberedList>
          <BackLink>
            <Link to={PATH_JOURNAL}>{getCopy.backLink}</Link>
          </BackLink>
        </ArticleContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
