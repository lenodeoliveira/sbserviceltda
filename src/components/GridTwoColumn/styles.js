import styled, { css } from 'styled-components'
import { Title } from '../Heading/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    margin-left: 3rem;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
      margin-left: 0;
    }
    ${Title} {
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`
export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`
export const ImageContainer = styled.div`
  ${() => css`
    width: 100%;
  `}
`
export const Image = styled.img`
  ${() => css`
    width: 100%;
    border-radius: 2.4%;
  `}
`
