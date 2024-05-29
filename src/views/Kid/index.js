import React, { useEffect } from 'react';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { content } from './copy';
import Footer from '../../components/Footer';
import {
  Author,
  Description,
  DescriptionEmphasized,
  Heading,
  InnerContainer,
  StyledBookList,
  StyledListItem,
  Title
} from './style';

export default function Kid() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <InnerContainer>
          <Heading>{content.heading}</Heading>

          <Description as="p">
            {content.description}
            <DescriptionEmphasized>
              {content.description2}
            </DescriptionEmphasized>
            {content.description3}
          </Description>

          <StyledBookList>
            {content.books.map((book) => (
              <StyledListItem key={book.title}>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
              </StyledListItem>
            ))}
          </StyledBookList>
        </InnerContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
