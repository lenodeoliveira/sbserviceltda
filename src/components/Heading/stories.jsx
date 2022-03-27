import { Heading } from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Any',
  },
  argsTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => <Heading {...args} />
