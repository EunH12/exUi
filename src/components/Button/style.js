import styled from 'styled-components'
import { setColor, setSize } from '@/components/Theme'

const setSizeJoin = () => {
  const object = {}
  Object.keys(setSize).forEach((item) => {
    object[item] = {
      padding: item === 'large' ? '0 32px' : '0 24px',
      ...setSize[item]
    }
  })
  return object
}
const buttonSize = setSizeJoin()

const setPrimary = (type, props) => {
  let baseColor = setColor.primary
  if (props.setColor) {
    baseColor = props.setColor
  }
  const cssList = {
    primary: {
      color: '#fff',
      backgroundColor: baseColor
    },
    primaryOutline: {
      color: baseColor,
      border: `1px solid ${baseColor}`,
      backgroundColor: '#fff',
      '&:hover': {
        '&::before': {
          backgroundColor: 'transparent'
        }
      }
    },
    secondary: {
      color: '#fff',
      backgroundColor: setColor.secondary
    },
    secondaryOutline: {
      color: setColor.secondary,
      backgroundColor: '#fff',
      border: `1px solid ${setColor.gray300}`,
      '&:hover': {
        '&::before': {
          backgroundColor: 'transparent'
        }
      }
    },
    warning: {
      color: '#fff',
      backgroundColor: setColor.warning
    },
    warningOutline: {
      color: setColor.warning,
      border: `1px solid ${setColor.warning}`,
      backgroundColor: '#fff',
      '&:hover': {
        '&::before': {
          backgroundColor: 'transparent'
        }
      }
    },
    tertiary: {
      color: baseColor,
      backgroundColor: `rgba(${parseInt(baseColor.substring(1, 3), 16)},${parseInt(baseColor.substring(3, 5), 16)},${parseInt(baseColor.substring(5, 7), 16)}, 0.2)` // 88, 99, 203 / 72, 63, 170
    }
  }
  return cssList[type]
}

export const ButtonWrap = styled.button`
position: relative;
box-sizing: border-box;
overflow: hidden;
font-size: 0;
cursor: pointer;
border: none;
border-radius: 4px;

&::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-color: rgb(0 0 0 / 10%);
  opacity: 0;
}

&:hover {
  &::before {
    opacity: 1;
  }
}

&:disabled {
  &::before {
    background: none;
  }
}

${(props) => {
  let setStyle, setPadding
  if (props.outline && props.type !== 'tertiary') {
    setStyle = `${props.type}Outline`
  } else {
    setStyle = props.type
  }
  if (props.isIcon) {
    if (typeof props.size === 'number') {
      setPadding = {
        padding: 0,
        width: props.size,
        height: props.size
      }
    } else {
      setPadding = { ...setSize[props.size], padding: 0 }
    }
  } else {
    setPadding = buttonSize[props.size]
  }
  return ({
    ...setPrimary(setStyle, props),
    display: props.block ? 'block' : 'inline-block',
    width: props.block ? '100%' : 'auto',
    ...setPadding
    })
  }
}

`
