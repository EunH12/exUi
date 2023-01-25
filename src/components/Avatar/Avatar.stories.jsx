import MAvatar from './avatar'
export default {
  title: 'Avatar/Avatar',
  component: MAvatar
}

const AvatarTemplate = (args) => <MAvatar {...args} />
export const Default = AvatarTemplate.bind({})
export const SlotType = AvatarTemplate.bind({})
SlotType.args = {
  children: 'slot'
}
