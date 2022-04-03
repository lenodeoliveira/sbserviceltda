import { SectionBackground } from '.'

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
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
      <SectionBackground {...args} />
    </>
  )
}
