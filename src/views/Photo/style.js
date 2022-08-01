import styled from 'styled-components';
import { BodyItalic, Heading4 } from '../../Typography/style';

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 88px;
    height: 220px;
  }
`;

export const QuoteTextContainer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const QuoteText = styled(Heading4).attrs({ as: 'span' })`
  border-top: 1px solid ${({ theme }) => theme.palette.red};
  padding-right: 156px;
  padding-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 24px;
  }
`;

export const QuoteAuthor = styled(BodyItalic)`
  right: 0;
  padding-right: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
    padding-right: 24px;
  }
`;

export const GalleryContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 100px auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const GalleryColumnBase = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const GalleryColumnLeft = styled(GalleryColumnBase)`
  padding-right: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 0;
  }
`;

export const GalleryColumnRight = styled(GalleryColumnBase)`
  padding-left: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-left: 0;
  }
`;

export const GalleryPhoto = styled.img`
  max-width: 100%;
  height: auto;
  padding-bottom: 16px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
