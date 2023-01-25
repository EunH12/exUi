import styled from 'styled-components'
import { setColor } from '@/components/Theme'

const setPrimary = (props) => {
  let baseColor = setColor.primary
  if (props.color) {
    if (props.color.includes('#')) {
      baseColor = props.color
    } else {
      baseColor = setColor[props.color]
    }
  }
  const cssList = {
    primary: {
      color: '#fff',
      backgroundColor: baseColor
    },
    outline: {
      color: baseColor,
      border: `1px solid ${setColor.gray200}`,
      backgroundColor: setColor.gray100
    }
  }
  return cssList[props.type]
}

export const setTagCloseColor = (props) => {
  let baseColor = '#fff'
  if (props.type !== 'primary') {
    baseColor = setColor[props.color || 'primary']
  }
  return baseColor
}

export const TagWrap = styled.div`
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
height: 25px;
padding: 0 12px;
font-size: 12px;
line-height: 1;
border-radius: 100px;

> button {
  margin-right: -4px;
  margin-left: 2px;
}

${(props) => {
  return ({
      ...setPrimary(props)
    })
  }
}

`
