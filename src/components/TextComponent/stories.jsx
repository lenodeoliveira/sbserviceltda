import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur 
      voluptatum laboru numquam blanditiis harum quisquam eius seds`,
  },
  argsTypes: {
    children: { type: 'string' },
  },
}

export const Template = (args) => {
  return (
    <>
      <TextComponent {...args} />
    </>
  )
}
