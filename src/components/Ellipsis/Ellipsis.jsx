import PropTypes from 'prop-types'
import { StyleEllipsis } from './style'

Ellipsis.propTypes = {
  lineClamp: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.object
}
Ellipsis.defaultProps = {
  lineClamp: 1
}

function Ellipsis (props) {
  return <StyleEllipsis {...props}>{props.children}</StyleEllipsis>
}
export default Ellipsis
