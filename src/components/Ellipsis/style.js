import styled from 'styled-components'

export const StyleEllipsis = styled.div`
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: ${(props) => props.lineClamp};

${(props) => {
  let returnValue
  if (props.lineClamp > 1) {
    returnValue = {
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical'
    }
  } else {
    returnValue = { whiteSpace: 'nowrap' }
  }
  return returnValue
}}

`
