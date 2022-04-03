import { screen } from '@testing-library/react'
import { Footer } from '.'
import { renderTheme } from '../../styles/render-theme'
import moment from 'moment'

const year = moment().format('YYYY')

describe('<Footer />', () => {
  it('Should render a Footer', () => {
    const { container } = renderTheme(<Footer>Children</Footer>)
    expect(screen.getByText(`Children ${year}`)).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
