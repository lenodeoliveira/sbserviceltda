import { screen } from '@testing-library/react'
import { TextComponent } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<TextComponent />', () => {
  it('Should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>)
    expect(container).toMatchSnapshot()
  })
})
