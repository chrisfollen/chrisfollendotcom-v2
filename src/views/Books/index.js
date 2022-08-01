import React, { useEffect } from 'react';
import { OuterPageContainer } from '../../components/OuterPageContainer/style';
import { PageColumn } from '../../components/PageColumn/style';
import { content } from './copy';
import Footer from '../../components/Footer';
import { Description, Heading, InnerContainer } from './style';
import BookList from './components/BookList';

export default function Books() {
  useEffect(() => {
    document.title = content.pageTitle;
  }, []);

  return (
    <OuterPageContainer>
      <PageColumn>
        <InnerContainer>
          <Heading>{content.heading}</Heading>
          <Description>{content.description}</Description>
          {content.bookLists.map((bookList) => (
            <BookList
              key={bookList.type}
              type={bookList.type}
              books={bookList.books}
            />
          ))}
        </InnerContainer>
        <Footer />
      </PageColumn>
    </OuterPageContainer>
  );
}
