import MTag from './tag'

export default {
  title: 'Tag',
  component: MTag,
  argTypes: {
    type: {
      options: ['primary', 'outline'],
      control: { type: 'select' }
    }
  }
}
const TagTemplate = (args) => <MTag {...args} />
export const Default = TagTemplate.bind({})
Default.args = {
  children: 'Tag'
}

export const Outline = TagTemplate.bind({})
Outline.args = {
  type: 'outline',
  children: 'Outline Tag',
  closeable: true,
  close: () => {
    console.log('닫기')
  }
}

export const Custom = TagTemplate.bind({})
Custom.args = {
  children: 'Custom',
  color: '#a54444'
}
