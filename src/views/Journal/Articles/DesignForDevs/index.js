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
  ArticleSection,
  StyledBodyExternalLink
} from '../style';
import HeroImage from '../../../../assets/blog/blog-5.jpg';
import { PATH_JOURNAL } from '../../../../constants/paths';

export default function DesignForDevs() {
  useEffect(() => {
    document.title = getCopy.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <ArticleContainer>
          <ArticleTitle>{getCopy.title}</ArticleTitle>
          <ArticleDate>{getCopy.date}</ArticleDate>
          <ArticleImage src={HeroImage} alt="palm trees" />
          <ArticleBody>{getCopy.intro}</ArticleBody>
          {getCopy.resources.map((resource) => (
            <ArticleSection key={resource.heading}>
              <ArticleSubhead>
                <StyledBodyExternalLink href={resource.link}>
                  {resource.heading}
                </StyledBodyExternalLink>
              </ArticleSubhead>
              <ArticleBody
                dangerouslySetInnerHTML={{ __html: resource.body }}
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
