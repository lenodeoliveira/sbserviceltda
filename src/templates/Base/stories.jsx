import { Base } from '.'
import mock from './mock'
import { GridSection } from '../../components/GridSection'
import gridMock from '../../components/GridSection/mock'

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: (
      <>
        <GridSection {...gridMock} background />
        <GridSection {...gridMock} />
        <GridSection {...gridMock} background />
        <GridSection {...gridMock} />
      </>
    ),
    ...mock,
  },
}

export const Template = (args) => {
  return (
    <>
      <Base {...args} />
    </>
  )
}
