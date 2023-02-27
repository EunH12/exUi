import styled from 'styled-components'

export const StyleCollapse = styled.div`
${(props) => ({
margin: `${props.margin}px 0`
})}
cursor: pointer;
`
export const StyleCollapseChild = styled.div`
padding-top: 16px;
`
export const PreIcons = styled.div`
${(props) => ({
marginRight: props.isIcon ? '4px' : '0'
})}
display: inline-block;
`
