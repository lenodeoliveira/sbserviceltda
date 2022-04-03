import { screen } from '@testing-library/react'
import { LogoLink } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<LogoLink />', () => {
  it('Should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="texto" />)
    const heading = screen.getByRole('heading', { name: 'texto' })
    expect(heading).toBeInTheDocument()
    expect(heading.firstChild).toHaveAttribute('href', '#target')
  })

  it('Should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="texto" srcImage="image.jpg" />)
    expect(screen.getByRole('img', { name: 'texto' })).toHaveAttribute('src', 'image.jpg')
  })

  it('Should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="texto" srcImage="image.jpg" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
