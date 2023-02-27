import PropTypes from 'prop-types'
import { setColor } from '@/components/Theme'
import { StyleIcon } from '../style'

MArrowRightIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
MArrowRightIcon.defaultProps = {
  size: 24,
  color: setColor.black
}

function MArrowRightIcon (props) {
  return <StyleIcon {...props}>
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
      d="M37.3165 27.1727L23.3548 9.33359C23.1907 9.12031 22.9337 9 22.6657 9H18.4384C18.072 9 17.8696 9.42109 18.0939 9.70547L32.6079 28.25L18.0939 46.7945C18.0434 46.859 18.012 46.9364 18.0034 47.0178C17.9949 47.0993 18.0094 47.1815 18.0453 47.2551C18.0812 47.3287 18.1372 47.3907 18.2067 47.434C18.2762 47.4773 18.3565 47.5002 18.4384 47.5H22.6657C22.9337 47.5 23.1907 47.3742 23.3548 47.1664L37.3165 29.3328C37.8142 28.693 37.8142 27.807 37.3165 27.1727Z"
      fill={props.color}
    />
    </svg>
  </StyleIcon>
}
export default MArrowRightIcon
