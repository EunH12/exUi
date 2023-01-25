import PropTypes from 'prop-types'
import { StyleIcon } from '../style'
import { setColor } from '@/components/Theme'

MLinkIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
MLinkIcon.defaultProps = {
  size: 24,
  color: setColor.black
}

function MLinkIcon (props) {
  return <StyleIcon {...props}>
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.53516 11.4642L11.4294 4.56992C13.4797 2.51966 16.8038 2.51966 18.8541 4.56992C20.9043 6.62017 20.9043 9.94428 18.8541 11.9945L10.8991 19.9495C9.53228 21.3163 7.3162 21.3163 5.94937 19.9495C4.58253 18.5827 4.58253 16.3666 5.94937 14.9997L13.9043 7.04479C14.5877 6.36137 15.6958 6.36137 16.3792 7.04479C17.0626 7.72821 17.0626 8.83625 16.3792 9.51966L9.4849 16.414"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </StyleIcon>
}
export default MLinkIcon
