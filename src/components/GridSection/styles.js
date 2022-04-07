import styled, { css } from 'styled-components'
import { Container as TextComponent } from '../TextComponent/styles'
import { Title as Heading } from '../Heading/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
      margin-left: 7.3rem;
    }
    & > ${Heading} {
      display: flex;
      justify-content: center;
      margin-top: -10%;
    }
    @media ${theme.media.lteMedium} {
      & > ${Heading} {
        font-size: ${theme.font.sizes.large};
        margin-top: 0;
      }
      ${TextComponent} {
        margin-bottom: ${theme.spacings.xhuge};
        margin-left: 0;
      }
      text-align: center;
    }
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.medium}; */
    grid-template-columns: 1fr 1fr 1fr 2fr;
    margin-left: 1.3rem;
    text-align: center;
    overflow: hidden;
    width: 100%;
    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
      margin-left: 0;
    }
  `}
`
export const GridElement = styled.div`
  ${({ theme }) => css`
    @media ${theme.media.lteMedium} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
