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
    expect(screen.getByRole('link', { name: 'Children' })).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0A1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.77rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #2F5233;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Children
      </a>
    `)
  })
})
