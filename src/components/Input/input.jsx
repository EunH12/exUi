import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { InputCss, InputWrap, InputPrefix, InputCount, TextareaWrap, TextareaCss } from './style'

Input.propTypes = {
  size: PropTypes.string,
  block: PropTypes.bool,

  width: PropTypes.number,
  height: PropTypes.number,

  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  formatter: PropTypes.string,
  isCount: PropTypes.bool,
  maxLength: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,

  handleChange: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
}

Input.defaultProps = {
  type: 'text',
  size: 'medium',
  block: false,
  isCount: false,
  disabled: false,
  handleChange: () => {}
}

// formatter
const numberFormat = (value) => {
  const isNumber = /^\d+$/.test(value)
  if (isNumber && (value || value === 0)) {
    value += ''
    const list = value.replaceAll(',', '').split('.')
    const prefix = list[0].charAt(0) === '-' ? '-' : ''
    let num = prefix ? list[0].slice(1) : list[0]
    let result = ''
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`
      num = num.slice(0, num.length - 3)
    }
    if (num) {
      result = num + result
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`
  } else {
    return ''
  }
}
const telFormat = (num) => {
  const replaceType = num.length <= 7 ? '$1-$2$3' : '$1-$2-$3'
  return num.replace(/(^02.{0}|^01.{1}|^[0-9]{3})([0-9]*)([0-9]{4})/, replaceType)
}

function Input (props) {
  // data set
  const [value, setValue] = useState(props.value)
  const setPropsData = (targetValue) => {
    let returnValue = targetValue.toString()
    if (returnValue.includes(',')) {
      returnValue = returnValue.replaceAll(',', '')
    }
    if (returnValue.includes('-')) {
      returnValue = returnValue.replaceAll('-', '')
    }
    if (props.type === 'number' || typeof props.value === 'number' || props.formatter === 'number') {
      const isNumber = /^\d+$/.test(returnValue)
      returnValue = isNumber ? Number(returnValue) : ''
    }
    if (props.formatter === 'tel') {
      const isNumber = /^\d+$/.test(returnValue)
      returnValue = isNumber ? returnValue : ''
    }
    return returnValue
  }
  const setFormat = useCallback(async (targetValue) => {
    if (props.formatter && props.type !== 'textarea') {
      let returnValue
      if (props.formatter === 'number') {
        returnValue = numberFormat(targetValue)
      } else if (props.formatter === 'tel') {
        returnValue = telFormat(targetValue)
      }
      setValue(returnValue)
    } else {
      setValue(targetValue)
    }
  }, [props.formatter, props.type])

  useEffect(() => {
    setFormat(props.value)
  }, [setFormat, props.value])

  function handleChange (e) {
    const targetValue = setPropsData(e.target.value)
    setFormat(e.target.value)
    props?.handleChange(targetValue, e)
  }

  function CountComponent () {
    if (props.isCount && props.maxLength) {
      return <InputCount type={props.type} size={props.size}>{props?.value?.length || 0}/{props.maxLength}</InputCount>
    } else {
      return false
    }
  }
  const prefixSet = Array.isArray(props?.children)
  function PrefixSet () {
    let prefixNode = null
    if (props.prefix) {
      prefixNode = props.prefix
    } else if (props?.children && prefixSet) {
      prefixNode = props?.children?.find(item => item.key === 'prefix')
    } else if (props?.children?.key === 'prefix') {
      prefixNode = props.children
    }
    return (
      prefixNode
        ? <InputPrefix>
          {prefixNode}
        </InputPrefix>
        : false
    )
  }
  function SuffixSet () {
    let suffixNode = null
    if (props.suffix) {
      suffixNode = props.suffix
    } else if (props?.children && prefixSet) {
      suffixNode = props?.children?.find(item => item.key === 'suffix')
    } else if (props?.children?.key === 'suffix') {
      suffixNode = props.children
    }
    return (
      suffixNode
        ? <InputPrefix>
          {suffixNode}
        </InputPrefix>
        : false
    )
  }
  // input props set
  const inputProps = {
    ...props
  }
  delete inputProps.children
  return (
    props.type === 'textarea'
      ? <TextareaWrap>
          <TextareaCss {...props} value={value} className={props.error ? 'error' : ''} onChange={handleChange}></TextareaCss>
            <CountComponent/>
        </TextareaWrap>
      : <InputWrap {...props} className={[props.disabled ? 'disabled' : '', props.error ? 'error' : ''].join('')}>
          <PrefixSet/>
          <InputCss {...inputProps} value={value} onChange={handleChange} />
          <SuffixSet/>
          <CountComponent/>
        </InputWrap>
  )
}

export default Input
