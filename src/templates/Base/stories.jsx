import { Base } from '.'
import mock from './mock'
export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    children: 'Base',
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
