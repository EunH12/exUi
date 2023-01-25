import MButton from './button'

export default {
  title: 'FORM/Button',
  component: MButton,
  argTypes: {
    type: {
      options: ['primary', 'warning', 'secondary', 'tertiary'],
      control: { type: 'radio' }
    },
    size: {
      options: ['tiny', 'small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
}
const ButtonTemplate = (args) => <MButton {...args}/>
export const Primary = ButtonTemplate.bind({})
Primary.args = {
  children: 'Primary'
}

export const Outline = ButtonTemplate.bind({})
Outline.args = {
  type: 'primary',
  outline: true,
  children: 'Outline'
}

export const Warning = ButtonTemplate.bind({})
Warning.args = {
  type: 'warning',
  children: 'warning'
}

export const Secondary = ButtonTemplate.bind({})
Secondary.args = {
  type: 'secondary',
  children: 'secondary'
}

export const Tertiary = ButtonTemplate.bind({})
Tertiary.args = {
  type: 'tertiary',
  children: 'Tertiary'
}

export const Custom = ButtonTemplate.bind({})
Custom.args = {
  children: 'Custom',
  type: 'primary',
  setColor: '#4bc059'
}
