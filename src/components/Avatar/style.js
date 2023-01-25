import styled from 'styled-components'

export const AvatarWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  overflow: hidden;
  font-size: ${props => props.size * 0.4}px;
  line-height: 0;
  color: ${props => props.fontColor};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.isBorder ? '1px solid #fff' : 'none'};
  border-radius: ${props => props.round ? '50%' : '6px'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

// style css
export const AvatarGroupWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;

  > * {
    margin: 0 -6px;
  }
`
export const RestStyle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  font-size: ${props => props.size * 0.4}px;
  color: #fff;
  background-color: ${props => props.restBackgroundColor};
  border: ${props => !props.noBorder ? '1px solid #fff' : 'none'};
  border-radius: ${props => props.round ? '50%' : '6px'};
`
