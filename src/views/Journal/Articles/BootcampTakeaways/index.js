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
  BackLink,
  ArticleSubhead,
  ArticleSection
} from '../style';
import HeroImage from '../../../../assets/blog/blog-3.jpg';
import { PATH_JOURNAL } from '../../../../constants/paths';

export default function BootcampTakeaways() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <ArticleContainer>
          <ArticleTitle>{getCopy.title}</ArticleTitle>
          <ArticleDate>{getCopy.date}</ArticleDate>
          <ArticleImage
            src={HeroImage}
            alt="empty road at Glacier National Park"
          />
          <ArticleBody>{getCopy.intro}</ArticleBody>
          {getCopy.suggestions.map((suggestion) => (
            <ArticleSection key={suggestion.heading}>
              <ArticleSubhead>{suggestion.heading}</ArticleSubhead>
              <ArticleBody
                dangerouslySetInnerHTML={{ __html: suggestion.body }}
              />
            </ArticleSection>
          ))}
          <BackLink>
            <Link to={PATH_JOURNAL}>{getCopy.backLink}</Link>
          </BackLink>
        </ArticleContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
