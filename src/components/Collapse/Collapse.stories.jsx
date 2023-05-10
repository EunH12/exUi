import MCollapse from './Collapse'

export default {
  title: 'Collapse',
  component: MCollapse
}
const CollapseTemplate = (args) => <MCollapse {...args} />
export const Default = CollapseTemplate.bind({})
Default.args = {
  title: '타이틀',
  children: 'Primary',
  isIcon: true
}
