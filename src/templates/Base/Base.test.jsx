import { screen } from '@testing-library/react'
import { Base } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<Base />', () => {
  it('Should render', () => {
    renderTheme(<Base>Children</Base>)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })
})
