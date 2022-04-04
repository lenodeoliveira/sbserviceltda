import styled, { css } from 'styled-components'
import { Container as SectionContainer } from '../SectionContainer'

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    p {
      font-size: 1.8rem;
    }
    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`
