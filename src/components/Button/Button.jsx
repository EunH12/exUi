import PropTypes from 'prop-types'
import { ButtonWrap } from './style'

Button.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number // icon Type only
  ]),
  name: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  block: PropTypes.bool,
  click: PropTypes.func,
  setColor: PropTypes.string,
  outline: PropTypes.bool,
  isIcon: PropTypes.bool,
  style: PropTypes.object
}

Button.defaultProps = {
  size: 'medium',
  type: 'primary',
  name: '버튼',
  block: false
}

function Button (props) {
  return (
    <ButtonWrap {...props} onClick={props?.click}>
      {props.children || props.name}
    </ButtonWrap>
  )
}

export default Button
