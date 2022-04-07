import P from 'prop-types'
import * as Styled from './styles'
import { SectionBackground } from '../SectionBackground'
import { Heading } from '../Heading'
import { TextComponent } from '../TextComponent'

export const GridContent = ({ title, text, background = false, sectionId = '' }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
      </Styled.Container>
    </SectionBackground>
  )
}

GridContent.propTypes = {
  title: P.string,
  text: P.string,
  background: P.bool,
  sectionId: P.string,
}
