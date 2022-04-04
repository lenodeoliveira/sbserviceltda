import { Base } from '.'
import { renderTheme } from '../../styles/render-theme'
import { mockBase } from './mock'

describe('<Base />', () => {
  it('Should render a Base component', () => {
    const { container } = renderTheme(<Base {...mockBase} />)
    expect(container).toMatchSnapshot()
  })
})
