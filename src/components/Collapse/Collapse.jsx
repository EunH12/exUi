import PropTypes from 'prop-types'
import { setColor } from '@/components/Theme'
import { StyleCollapse } from './style'

Collapse.propTypes = {
  accordion: PropTypes.bool,
  margin: PropTypes.number,
  children: PropTypes.node
}
Collapse.defaultProps = {
  margin: 8,
  lineColor: setColor.gray200
}

function Collapse (props) {
  return (
    <StyleCollapse {...props}>
      {props.children}
    </StyleCollapse>
  )
}
export default Collapse
