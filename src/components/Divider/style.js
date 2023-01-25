import styled from 'styled-components'

export const StyleDivider = styled.div`
${(props) => ({
margin: props.vertical ? `0 ${props.margin}px` : `${props.margin}px 0`,
borderColor: props.lineColor,
borderStyle: props.dashed ? 'dashed' : 'solid'
})}
&.basic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-width: 1px 0 0;
}

&.vertical {
  display: inline-block;
  height: 1em;
  vertical-align: middle;
  border-width: 0 1px 0 0;
}
`
