import MAvatarGroup from './avatarGroup'

export default {
  title: 'Avatar/AvatarGroup',
  component: MAvatarGroup
}

const AvatarGroupTemplate = (args) => <MAvatarGroup {...args} />
export const Default = AvatarGroupTemplate.bind({})
Default.args = {
  data: [
    { name: '아' },
    { backgroundColor: '#90bfc5', name: '바' },
    { name: '타' },
    { name: '입' },
    { name: '니', src: 'test.jpg' },
    { name: '다' }
  ],
  max: 4
}
