import noImage from '../../assets/images/noImage.svg'
import PropTypes from 'prop-types'
import { AvatarWrap } from './style'
import { setColor } from '@/components/Theme'

Avatar.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  name: PropTypes.string,
  round: PropTypes.bool,
  isBorder: PropTypes.bool,
  children: PropTypes.node
}

Avatar.defaultProps = {
  size: 40,
  backgroundColor: setColor.gray300,
  fontColor: setColor.black,
  round: true,
  isBorder: false
}

function Avatar (props) {
  const SetImage = () => {
    const image = <img src={props.src || noImage} onError={(e) => {
      e.target.onerror = null // prevents looping
      e.target.src = noImage
    }} />
    const name = `${props?.name?.charAt(0)}`
    return (!props.src && props?.name) ? name : image
  }
  return (
    <AvatarWrap {...props}>
      {props?.children ? props?.children : <SetImage />}
    </AvatarWrap>
  )
}

export default Avatar
