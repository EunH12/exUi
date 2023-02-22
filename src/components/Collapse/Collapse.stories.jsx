import MCollapse from './Collapse'

export default {
  title: 'Collapse',
  component: MCollapse
}
const DividerTemplate = (args) => <MCollapse {...args} />
export const Default = DividerTemplate.bind({})
