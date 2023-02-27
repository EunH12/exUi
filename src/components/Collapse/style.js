import styled from 'styled-components'

// export const StyleCollapse = styled.div`
// ${(props) => ({
// margin: `${props.margin}px 0`
// })}
// `
export const TitlePart = styled.div`
cursor: pointer;
display: flex;
align-items:center;
`

export const StyleCollapseChild = styled.div`
padding-top: 16px;
`
export const PreIcons = styled.div`
display: block;
font-size: 0;
margin-right: ${props => props.isIcon ? '4px' : '0'};
transition: all 0.5s ease-out;
&.rotate {
  transform: rotate(90deg);
}
`
