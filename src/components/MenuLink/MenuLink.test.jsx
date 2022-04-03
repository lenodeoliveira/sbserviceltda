import { screen } from '@testing-library/react'
import { MenuLink } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>)
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_self')
  })

  it('Should render open in a new tab', () => {
    renderTheme(
      <MenuLink newTab={true} link="http://localhost">
        Children
      </MenuLink>,
    )
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank')
  })

  it('Should render open in a new tab', () => {
    renderTheme(
      <MenuLink newTab={false} link="http://localhost">
        Children
      </MenuLink>,
    )
    expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot()
  })
})
