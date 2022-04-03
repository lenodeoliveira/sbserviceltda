import P from 'prop-types'
import * as Styled from './styles'
import { TextComponent } from '../TextComponent/'
import { SectionContainer } from '../SectionContainer/'
import moment from 'moment'

export const Footer = ({ children }) => {
  const year = moment().format('YYYY')
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{`${children} ${year}`} </TextComponent>
      </SectionContainer>
    </Styled.Container>
  )
}

Footer.propTypes = {
  children: P.node.isRequired,
}
