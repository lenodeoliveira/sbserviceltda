import P from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridPartner = ({ title, description, grid, background, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={`${el.srcImage} ${el.altText}`}>
              <Styled.Image alt={el.altText} src={el.srcImage} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  )
}

GridPartner.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImage: P.string,
    }),
  ).isRequired,
  sectionId: P.string,
}
