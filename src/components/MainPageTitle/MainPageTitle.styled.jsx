import styled from '@emotion/styled';

export const Title = styled.h1`
  /* margin-top: 50px; */

  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--green-color);
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 44px;
  }
`;
