import PropTypes from 'prop-types'
import { setColor } from '@/components/Theme'
import { StyleDivider } from './style'

Divider.propTypes = {
  dashed: PropTypes.bool,
  vertical: PropTypes.bool,
  margin: PropTypes.number,
  lineColor: PropTypes.string
}
Divider.defaultProps = {
  margin: 8,
  lineColor: setColor.gray200
}

function Divider (props) {
  return <StyleDivider {...props} className={props.vertical ? 'vertical' : 'basic'} />
}
export default Divider
