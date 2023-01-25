import MInput from './input'

export default {
  title: 'FORM/Input',
  component: MInput,
  argTypes: {
    size: {
      options: ['tiny', 'small', 'medium', 'large'],
      control: { type: 'select' }
    }
  }
}

const InputDefaultTemplate = (args) => {
  return (
    <div>
      <p>아래엔 없어도, input에서 사용할 수 있는 props 다 사용 가능!</p>
      <p><strong>formatter 사용할때 주의사항!</strong></p>
      <p>
        1. type 제외 혹은 text or tel 로!!! 꼭!! number 로 할경우 &apos;, &apos; &apos;-&apos; 안들어가고 replace됨 <br />
        2. onChange function 의 arg는 (value, event) 인데 formatter가 추가된 경우 value와 event.target.value 값이 다름.<br/> (value 는 콤마 등이 제외된값, event.target.value는 포함된 값)
      </p>
      <MInput {...args} />
    </div>
  )
}
const InputTemplate = (args) => <MInput {...args} />
export const Default = InputDefaultTemplate.bind({})
Default.args = {
  label: 'name',
  size: 'medium',
  handleChange: (e) => { console.log(e) }
}

export const Error = InputTemplate.bind({})
Error.args = {
  error: true,
  value: 'Error',
  size: 'medium',
  handleChange: (e) => { console.log(e) }
}

export const Format = InputTemplate.bind({})
Format.args = {
  value: 'test',
  formatter: 'number',
  size: 'medium',
  handleChange: (e) => { console.log(e) }
}

export const TextArea = InputTemplate.bind({})
TextArea.args = {
  type: 'textarea',
  height: 150,
  isCount: true,
  maxLength: 150,
  handleChange: (e) => { console.log(e) }
}
