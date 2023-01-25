import MEllipsis from './ellipsis'

export default {
  title: 'Ellipsis',
  component: MEllipsis
}
const EllipsisTemplate = (args) => <MEllipsis {...args} />
export const Default = EllipsisTemplate.bind({})
Default.args = {
  children: '텍스트를 넣어주세요 호이호이',
  style: { width: '150px' }
}
