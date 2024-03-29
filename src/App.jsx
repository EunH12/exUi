import { useState, useCallback, useMemo } from 'react'
import { MAvatar, MAvatarGroup, MDivider, MButton, MEllipsis, MInput, MIcons, MTag, MDynamicInput, MCollapse } from '@/components'
import { MCloseIcon, MMinusIcon } from '@/components/icon'
import { setColorOptions } from '@/components/Theme'

setColorOptions({
  primary: '#23412f',
  warning: '#d13c55',
  secondary: '#a59957'
})

function Inputs () {
  const [value, setValue] = useState({
    name: '',
    tel: '01012345',
    prefix: '',
    textarea: '',
    dynamic: ['1', '2']
  })
  // const [count, setCount] = useState(0)
  const test = useCallback((val, label) => {
    setValue((prevState) => {
      return { ...prevState, [label]: val }
    })
  }, [])
  const [value3, setValue3] = useState(3232)
  const changeAction = useCallback((val, label) => {
    setValue3(val)
  }, [])
  return ([
    <div key="input">
      <MInput
        label="name"
        value={value.name}
        placeholder="test"
        handleChange={changeAction}
      />
      <MInput
        label="tel"
        type="tel"
        maxLength={11}
        value={value.tel}
        formatter="tel"
        placeholder="tel"
        error
        handleChange={(value) => test(value, 'tel')}
      />
      <MInput
        label="format"
        type="tel"
        size="large"
        width={400}
        value={value3}
        handleChange={changeAction}
        formatter="number"
      />
      <MInput
        label="prefix"
        suffix="원"
        isCount
        disabled
        maxLength={30}
        value={value.prefix}
        handleChange={(value) => test(value, 'prefix')}
      >
        <span key="prefix">123</span>
        <span key="suffix">일</span>
      </MInput>
      <MInput
        type="textarea"
        isCount
        maxLength={140}
        value={value.textarea}
        handleChange={(value) => test(value, 'textarea')}
      >
      </MInput>
    </div>,
    <div key="dynamicInput">
     <MDynamicInput
       label="dynamic"
       value={value.dynamic}
       placeholder="test"
       handleChange={(value) => test(value, 'dynamic')}
       onCreate={(i, prevState, setData) => console.log(i, prevState, setData)}
       onRemove={(i, prevState, setData) => console.log(i, prevState, setData)}
     />
     <MDynamicInput
       label="dynamic"
       value={value.dynamic}
       max={4}
       placeholder="test"
       handleChange={(value) => test(value, 'dynamic')}
       onCreate={(i, prevState, setData) => console.log(i, prevState, setData)}
       onRemove={(i, prevState, setData) => console.log(i, prevState, setData)}
     >
        12312311
      </MDynamicInput>
     {value.dynamic}
    </div>
  ])
}
function App () {
  return ([
    <div key='avatar'>
      <MAvatar name="tet" />
      <MAvatar>
        123
      </MAvatar>
      <MAvatarGroup size={60} max={8} data={[{ src: 'test.jpg', backgroundColor: 'red' }, { backgroundColor: 'red', name: '오와' }, { name: '주', backgroundColor: 'blue' }, { name: '수', backgroundColor: 'blue' }, {}, {}, {}, {}]} />
    </div>,
    <div key="divider">
      <MDivider />
      음 <MDivider vertical/> 그렇고 <MDivider vertical dashed/> 요
      <MDivider dashed/>
    </div>,
    <div key="button">
      <MButton size='large' block click={() => alert(123)}>block large</MButton>
      <MButton click={() => alert(345)}>base</MButton>
      <MButton type="secondary">secondary</MButton>
      <MButton type="secondary" outline>secondary outline</MButton>
      <MButton outline>outline</MButton>
      <MButton type="warning" name="tet" />
      <MButton size="large" setColor="#4bc059">setColor large</MButton>
      <MButton type="warning">warning</MButton>
    </div>,
    <div key="ellipsis">
      <MEllipsis lineClamp={3} style={{ maxWidth: '50px' }}> 랄랄랄라라란어리ㅏㄴ어리ㅏㄴ얼 </MEllipsis>
    </div>,
    <div key="icon">
      <MIcons name="link" />
      <MCloseIcon />
      <MMinusIcon />
      <MIcons name="link" size={40} color="#44c2b5" />
      <MIcons>
        <MCloseIcon size={90} color="red" />
      </MIcons>
    </div>,
    <div key="tag">
      <MTag>tag</MTag>
      <MTag color="gray400">tag</MTag>
      <MTag color="#e0ad4e" closeable close={() => console.log('닫기')}>tag</MTag>
      <MTag type="outline">tag</MTag>
      <MTag type="outline" color="emphasizePurple">tag</MTag>
      <MTag type="outline" color="emphasizeOrange" closeable>tag</MTag>
    </div>,
    <Inputs key="input"/>,
    <div key="collapse">
      <MCollapse title="테스트" margin={10} isIcon>
        {/* <MIcons key="preIcon" name="link" /> */}
        123
      </MCollapse>
    </div>
  ])
}

export default App
