import { Base } from '.'
import linksMock from '../../components/NavLinks/mock'
import gridMock from '../../components/GridSection/mock'
import { GridSection } from '../../components/GridSection'

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
        <GridSection {...gridMock} background />
        <GridSection {...gridMock} />
      </>
    ),
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#',
    },
  },
}

export const Template = (args) => {
  return (
    <>
      <Base {...args} />
    </>
  )
}
