import styled, { css } from 'styled-components';

export const bodyBase = css`
  font-family: 'Libre Caslon Text', serif;
  font-size: 1rem;
  line-height: 28px;
  color: ${({ theme }) => theme.palette.black};
`;

export const headingBase = css`
  font-family: 'Fjalla One', sans-serif;
  color: ${({ theme }) => theme.palette.black};
`;

export const Heading1 = styled.h1`
  ${headingBase};
  font-size: 6.25rem;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.75rem;
    line-height: 120%;
  }
`;

export const Heading2 = styled.h2`
  ${headingBase};
  font-size: 5.5rem;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3.375rem;
    line-height: 120%;
  }
`;

export const Heading3 = styled.h3`
  ${headingBase};
  font-size: 2.625rem;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.875rem;
    line-height: 120%;
  }
`;

export const Heading4 = styled.h4`
  ${headingBase};
  font-size: 1.875rem;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
    line-height: 130%;
  }
`;

export const Title = styled.h2`
  ${headingBase};
  font-size: 2.375rem;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
    line-height: 130%;
  }
`;

export const Subhead = styled.h2`
  ${headingBase};
  font-size: 1.5rem;
  line-height: 130%;
`;

export const Category = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.75rem;
  line-height: 20px;
  letter-spacing: 16%;
  color: ${({ theme }) => theme.palette.grey};
  text-transform: uppercase;
`;

export const Body = styled.p`
  ${bodyBase};
`;

export const BodyItalic = styled.p`
  ${bodyBase};
  font-style: italic;
`;

export const BodyBold = styled.p`
  ${bodyBase};
  font-weight: bold;
`;

export const BodyBoldItalic = styled.p`
  ${bodyBase};
  font-style: italic;
  font-weight: bold;
`;
