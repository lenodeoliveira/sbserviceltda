import P from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridSection = ({ title, description, grid, background }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background}>
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}

GridSection.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string,
    }),
  ).isRequired,
}
