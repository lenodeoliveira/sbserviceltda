import { GridContent } from '.'
import { renderTheme } from '../../styles/render-theme'

import mock from './mock'

describe('<GridContent />', () => {
  it('Should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />)
    expect(container).toMatchSnapshot()
  })

  it('Should render grid content background', () => {
    const { container } = renderTheme(<GridContent {...mock} background={undefined} />)
    expect(container).toMatchSnapshot()
  })
})
