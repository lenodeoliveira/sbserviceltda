import { GridPartner } from '.'
import mock from './mock'

export default {
  title: 'GridPartner',
  component: GridPartner,
  args: mock,
}

export const Template = (args) => {
  return (
    <>
      <GridPartner {...args} />
    </>
  )
}
