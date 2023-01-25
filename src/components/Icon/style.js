import styled from 'styled-components'

export const StyleIconWrap = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 0;
line-height: 1;
`
export const StyleIcon = styled.span`
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 0;

${(props) => {
  return {
    fill: props.color,
    stroke: props.color
  }
}}
`
