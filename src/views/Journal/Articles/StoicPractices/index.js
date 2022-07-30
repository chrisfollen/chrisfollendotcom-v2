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
import HeroImage from '../../../../assets/blog/blog-6.jpg';
import { PATH_JOURNAL } from '../../../../constants/paths';

export default function StoicPractices() {
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
            alt="photo of valley in Zion National Park"
          />
          <ArticleBody>{getCopy.intro}</ArticleBody>
          {getCopy.practices.map((practice) => (
            <ArticleSection key={practice.heading}>
              <ArticleSubhead>{practice.heading}</ArticleSubhead>
              <ArticleBody
                dangerouslySetInnerHTML={{ __html: practice.body }}
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
