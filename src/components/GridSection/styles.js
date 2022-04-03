import styled, { css } from 'styled-components'
import { Title as HeadingContainer } from '../Heading/styles'
import { Container as TextComponent } from '../TextComponent/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
  `}
`
export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.medium};
  `}
`
export const GridElement = styled.div`
  ${() => css`
    ${HeadingContainer} {
    }
  `}
`
