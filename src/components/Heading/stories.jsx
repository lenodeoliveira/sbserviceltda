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

export const Light = (args) => <Heading {...args} />
export const DarkGreen = (args) => <Heading {...args} />

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
}

DarkGreen.args = {
  children: 'Any',
  darkGreen: false,
}
