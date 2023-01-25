import PropTypes from 'prop-types'
import { TagWrap, setTagCloseColor } from './style'
import MButton from '../Button/button'
import MCloseIcon from '../Icon/iconList/close'

Tag.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  close: PropTypes.func,
  closeable: PropTypes.bool
}

Tag.defaultProps = {
  type: 'primary',
  outline: false
}
function Tag (props) {
  return (
    <TagWrap {...props}>
      <span>{props.children}</span>
      {props.closeable
        ? <MButton size={14} setColor="transparent" isIcon click={props.close}><MCloseIcon size={14} color={setTagCloseColor(props)} /></MButton>
        : null}
    </TagWrap>
  )
}

export default Tag
