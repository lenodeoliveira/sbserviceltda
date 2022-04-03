import { LogoLink } from '.'

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImage: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
}

export const ImageOnly = (args) => {
  return (
    <>
      <LogoLink {...args} />
    </>
  )
}

export const TextOnly = (args) => {
  return (
    <>
      <LogoLink {...args} />
    </>
  )
}

TextOnly.args = {
  srcImage: '',
}
