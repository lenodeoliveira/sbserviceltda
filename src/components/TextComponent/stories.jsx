import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur 
      voluptatum laboru numquam blanditiis harum quisquam eius sed odit fugiat iusto 
      fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. 
      Veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laboru 
      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, 
      eaque rerum! Provident similique accusantium nemo autem. Veritatis`,
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
