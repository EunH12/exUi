import styled from 'styled-components'
import { setColor, setSize } from '@/components/Theme'

export const InputCss = styled.input`
position: relative;
box-sizing: border-box;
flex-grow: 1;
width: 100%;
height: 100%;
padding: 0;
color: ${() => setColor.gray700};
border: none;

::placeholder {
  color: ${() => setColor.gray400};
}

&:disabled {
  cursor: not-allowed;
}

${(props) => {
  return ({
      ...setSize[props.size],
      display: props.block ? 'block' : 'inline-block',
      '&:focus': {
        outline: 'none'
      }
    })
  }
}
`
export const InputWrap = styled.label`
position: relative;
box-sizing: border-box;
display: inline-flex;
gap: 8px;
align-items: center;
justify-content: center;
padding: 0 16px;
overflow: hidden;
border: 1px solid ${() => setColor.gray200};
border-radius: 4px;

&.disabled {
  cursor: not-allowed;
  background: ${() => setColor.gray100};
}

&.error {
  border: ${() => `1px solid ${setColor.warning}`};
}

${(props) => {
  let baseColor = setColor.primary
  if (props.setColor) {
    baseColor = props.setColor
  }
  return ({
      ...setSize[props.size],
      display: props.block ? 'block' : 'inline-flex',
      width: props.width ? `${props.width}px` : 'auto',
      padding: props.children ? '0 8px' : '0 16px',
      '&:focus-within': {
        border: `1px solid ${baseColor}`
      }
    })
  }
}
`
export const InputPrefix = styled.p`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
margin: 0;
`
export const InputCount = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin: 0;
color: ${() => setColor.gray400};
white-space: nowrap;

${(props) => {
  return ({
    width: props.type === 'textarea' ? '100%' : 'auto',
    marginTop: props.type === 'textarea' ? '8px' : '',
    fontSize: setSize?.[props.size]?.fontSize
  })
}}
`
export const TextareaWrap = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const TextareaCss = styled.textarea`
padding: 8px;
color: #3f3f46;
resize: none;
border: 1px solid ${() => setColor.gray200};
border-radius: 4px;

&:disabled {
  cursor: not-allowed;
  background: ${() => setColor.gray100};
}

&.error {
  border: 1px solid ${() => setColor.warning};
}

${(props) => {
  let baseColor = setColor.primary
  if (props.setColor) {
    baseColor = props.setColor
  }
  return ({
      ...setSize[props.size],
      display: props.block ? 'block' : 'inline-flex',
      width: props.width ? `${props.width}px` : 'auto',
      height: props.height ? `${props.height}px` : 'auto',
      '&:focus': {
        outline: 'none',
        border: `1px solid ${baseColor}`
      }
    })
  }
}
`
