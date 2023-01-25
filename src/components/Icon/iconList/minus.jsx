import PropTypes from 'prop-types'
import { setColor } from '@/components/Theme'
import { StyleIcon } from '../style'

MMinusIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
MMinusIcon.defaultProps = {
  size: 24,
  color: setColor.black
}

function MMinusIcon (props) {
  return <StyleIcon {...props}>
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 12H18" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </StyleIcon>
}
export default MMinusIcon
