import { GridSection } from '.'
import { renderTheme } from '../../styles/render-theme'

import mock from './mock'

describe('<GridSection />', () => {
  it('Should render a GridSection', () => {
    const { container } = renderTheme(<GridSection {...mock} />)
    expect(container).toMatchSnapshot()
  })
})
