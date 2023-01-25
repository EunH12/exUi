import MIcons from './icon'

export default {
  title: 'Icon',
  component: MIcons
}
const IconTemplate = (args) => <MIcons {...args} />
export const Default = IconTemplate.bind({})
Default.args = {
  name: 'link'
}
