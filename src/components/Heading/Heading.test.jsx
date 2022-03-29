import { Heading } from '.'
import { renderTheme } from '../../styles/render-theme'
import { screen } from '@testing-library/react'
import { theme } from '../../styles/theme'

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    })
  })

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    })
  })

  it('should render correct heading sizes', () => {
    renderTheme(<Heading size="small">texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    })
  })

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    })
  })

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">texto</Heading>)
    screen.getByRole('heading', { name: 'texto' })
    const h6 = container.querySelector('h6')

    expect(h6.tagName.toLowerCase()).toBe('h6')
  })
})
