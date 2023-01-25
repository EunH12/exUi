import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import MInput from '../Input/input'
import MButton from '../Button/button'
import MPlusIcon from '@/components/Icon/iconList/plus'
import MMinusIcon from '@/components/Icon/iconList/minus'
import { InputRow, DynamicWrap } from './style'
import { setColor } from '@/components/Theme'
DynamicInput.propTypes = {
  value: PropTypes.array,
  children: PropTypes.node,
  max: PropTypes.number,
  inputOptions: PropTypes.object,
  handleChange: PropTypes.func,
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
  isKeyObject: PropTypes.object
}

DynamicInput.defaultProps = {
  type: 'text',
  size: 'medium',
  block: false,
  isCount: false,
  disabled: false,
  handleChange: () => {}
}

function DynamicInput (props) {
  const [valueList, setValue] = useState(props.value)
  const handleChange = (value, index) => {
    setValue((prevState) => {
      const setData = [...prevState]
      setData[index] = value
      return setData
    })
  }
  useEffect(() => {
    props?.handleChange(valueList)
  }, [valueList])
  const inputRemove = (i) => {
    setValue((prevState) => {
      const setData = [...prevState]
      setData?.splice(i, 1)
      props?.onRemove(i, prevState, setData)
      return setData
    })
    props?.onRemove(i)
  }
  const inputAdd = (i) => {
    setValue((prevState) => {
      const setData = [...prevState]
      setData?.splice(i + 1, 0, '')
      props?.onCreate(i, prevState, setData)
      return setData
    })
  }
  const inputList = () => {
    return valueList.map((item, index) => {
      const inputProps = { ...props }
      delete inputProps.onCreate
      delete inputProps.onRemove
      return (
        <InputRow key={index}>
          {props.children ? props.children : <MInput {...inputProps} value={item} handleChange={(value) => handleChange(value, index)}/>}
          <MButton size={36} type="outline" isIcon click={() => inputRemove(index)} disabled={index === 0}><MMinusIcon color={setColor.gray500} /></MButton>
          <MButton size={36} type="outline" isIcon click={() => inputAdd(index)} disabled={valueList.length === props.max}><MPlusIcon color={setColor.gray500} /></MButton>
        </InputRow>
      )
    })
  }

  return (
    <DynamicWrap>
      {inputList()}
    </DynamicWrap>
  )
}

export default DynamicInput
