import { screen } from '@testing-library/react'
import { NavLinks } from '.'
import { renderTheme } from '../../styles/render-theme'
import { theme } from '../../styles/theme'

import mock from './mock'

describe('<NavLinks />', () => {
  it('Should render links', () => {
    renderTheme(<NavLinks links={mock} />)
    expect(screen.getAllByRole('link')).toHaveLength(mock.length)
  })

  it('Should not render links', () => {
    renderTheme(<NavLinks />)
    expect(screen.queryAllByText(/link/i)).toHaveLength(0)
  })

  it('Should render links', () => {
    renderTheme(<NavLinks links={mock} />)
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    })
  })

  it('Should match snapshot', () => {
    renderTheme(<NavLinks links={mock} />)
    expect(screen.getAllByRole('link')).toMatchSnapshot()
  })
})
