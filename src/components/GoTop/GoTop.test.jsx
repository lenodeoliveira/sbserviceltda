import { screen } from '@testing-library/react'
import { GoTop } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<GoTop />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<GoTop>Children</GoTop>)
    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute('href', '#')
    expect(container).toMatchSnapshot()
  })
})
