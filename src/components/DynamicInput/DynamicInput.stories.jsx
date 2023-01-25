import MInput from './DynamicInput'

export default {
  title: 'FORM/DynamicInput',
  component: MInput,
  argTypes: {
    size: {
      options: ['tiny', 'small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
}

const InputTemplate = (args) => <MInput {...args} />
export const Default = InputTemplate.bind({})
Default.args = {
  label: 'dynamic',
  placeholder: 'test',
  value: [''],
  handleChange: (e) => { console.log(e) },
  onCreate: (i, prevState, setData) => console.log(i, prevState, setData, '추가할 때'),
  onRemove: (i, prevState, setData) => console.log(i, prevState, setData, '삭제할 때')
}
