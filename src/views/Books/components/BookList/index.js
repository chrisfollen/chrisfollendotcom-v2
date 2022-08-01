import React from 'react';
import PropTypes from 'prop-types';
import {
  Author,
  ListHeading,
  ListWrapper,
  StyledBookList,
  StyledBreakLine,
  StyledListItem,
  Title
} from './style';

export default function BookList({ type, books }) {
  return (
    <ListWrapper>
      <StyledBreakLine />
      <ListHeading>{type}</ListHeading>
      <StyledBookList>
        {books.map((book) => (
          <StyledListItem key={book.title}>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
          </StyledListItem>
        ))}
      </StyledBookList>
    </ListWrapper>
  );
}

BookList.propTypes = {
  type: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};
