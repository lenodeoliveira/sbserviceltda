import { screen } from '@testing-library/react'
import { GridTwoColumn } from '.'
import { renderTheme } from '../../styles/render-theme'

import mock from './mock'

describe('<GridTwoColumn />', () => {
  it('Should render two columns grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
