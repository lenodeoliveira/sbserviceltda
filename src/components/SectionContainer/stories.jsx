import { SectionContainer } from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: '' },
  },
}

export const Template = (args) => {
  return (
    <>
      <SectionContainer {...args} />
    </>
  )
}
