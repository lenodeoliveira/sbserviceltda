import { screen } from '@testing-library/react'
import { SectionContainer } from '.'
import { renderTheme } from '../../styles/render-theme'

describe('<SectionContainer />', () => {
  it('Should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    )
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container).toMatchSnapshotIO
  })
})
