import PropTypes from 'prop-types'
import { setColor } from '@/components/Theme'
import { StyleIcon } from '../style'

MCloseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
MCloseIcon.defaultProps = {
  size: 24,
  color: setColor.black
}

function MCloseIcon (props) {
  return <StyleIcon {...props}>
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.8333 28L45.1887 10.8883C45.4293 10.6039 45.227 10.1719 44.8551 10.1719H40.4911C40.234 10.1719 39.9879 10.2867 39.8184 10.4836L27.9786 24.5984L16.1387 10.4836C15.9747 10.2867 15.7286 10.1719 15.4661 10.1719H11.102C10.7301 10.1719 10.5278 10.6039 10.7684 10.8883L25.1239 28L10.7684 45.1117C10.7145 45.1751 10.6799 45.2526 10.6688 45.3351C10.6576 45.4175 10.6704 45.5015 10.7055 45.5769C10.7406 45.6523 10.7966 45.7161 10.8669 45.7606C10.9372 45.8052 11.0188 45.8286 11.102 45.8281H15.4661C15.7231 45.8281 15.9692 45.7133 16.1387 45.5164L27.9786 31.4016L39.8184 45.5164C39.9825 45.7133 40.2286 45.8281 40.4911 45.8281H44.8551C45.227 45.8281 45.4293 45.3961 45.1887 45.1117L30.8333 28Z" fill={props.color}/>
    </svg>
  </StyleIcon>
}
export default MCloseIcon
