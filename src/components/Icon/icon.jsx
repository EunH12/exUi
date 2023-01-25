import PropTypes from 'prop-types'
import { setColor } from '@/components/Theme'
import { StyleIconWrap } from './style'

// icons
import MLinkIcon from './iconList/link'
import MCloseIcon from './iconList/close'
import MMinusIcon from './iconList/minus'
import MPlusIcon from './iconList/plus'

Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
}
Icon.defaultProps = {
  size: 24,
  color: setColor.black,
  name: 'Link'
}

// icon set
const componentList = {
  link: MLinkIcon,
  close: MCloseIcon,
  minus: MMinusIcon,
  plus: MPlusIcon
}

function Icon (props) {
  const IconSet = componentList[props.name]
  return <StyleIconWrap {...props}>{props.children ? props.children : <IconSet {...props} />}</StyleIconWrap>
}
export default Icon
