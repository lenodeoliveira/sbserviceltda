import P from 'prop-types'
import * as Styled from './styles'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { GoTop } from '../../components/GoTop'

export const Base = ({ links = [], logoData, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer>SB Serviços de Radiologia e Telerradiologia</Footer>
      </Styled.Container>
      <GoTop />
    </>
  )
}

Base.propTypes = {
  children: P.node,
  ...Menu.propTypes,
}
