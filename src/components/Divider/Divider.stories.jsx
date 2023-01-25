import MDivider from './divider'

export default {
  title: 'Divider',
  component: MDivider
}
const DividerTemplate = (args) => <MDivider {...args} />
export const Default = DividerTemplate.bind({})
