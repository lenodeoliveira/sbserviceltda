import { GridPartner } from '.'
import { renderTheme } from '../../styles/render-theme'

import mock from './mock'

describe('<GridPartner />', () => {
  it('Should render GridPartner', () => {
    const { container } = renderTheme(<GridPartner {...mock} />)
    expect(container).toMatchSnapshot()
  })
})
