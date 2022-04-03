import P from 'prop-types'
import * as Styled from './styles'
import { Heading } from '../Heading/'

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size="small" uppercase={true}>
      <Styled.Container href={link}>{srcImage ? <img src={srcImage} alt={text} /> : text}</Styled.Container>
    </Heading>
  )
}

LogoLink.propTypes = {
  text: P.string.isRequired,
  link: P.string.isRequired,
  srcImage: P.string,
}
