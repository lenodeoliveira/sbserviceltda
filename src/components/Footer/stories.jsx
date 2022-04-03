import { Footer } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    children: 'SB Serviços de Radiologia e Telerradiologia',
  },
  argsTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <>
      <Footer {...args} />
    </>
  )
}
