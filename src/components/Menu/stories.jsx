import { Menu } from '.'
import linksMock from '../NavLinks/mock'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImage: '',
    },
  },
  argsTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <>
      <Menu {...args} />
    </>
  )
}
