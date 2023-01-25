import PropTypes from 'prop-types'
import Avatar from './avatar'
import { v4 as uuidv4 } from 'uuid'
import { AvatarGroupWrap, RestStyle } from './style'
import { setColor } from '@/components/Theme'

AvatarGroup.propTypes = {
  size: PropTypes.number,
  data: PropTypes.array,
  round: PropTypes.bool,
  noBorder: PropTypes.bool,
  max: PropTypes.number,
  restBackgroundColor: PropTypes.string
}
AvatarGroup.defaultProps = {
  restBackgroundColor: setColor.gray300,
  data: [],
  round: true,
  noBorder: false,
  size: 40
}

const setRest = (props) => {
  let returnValue
  if (props.max) {
    if (props.data.length > props.max) {
      returnValue = <RestStyle key={uuidv4()} {...props}>+{props.data.length - props.max}</RestStyle>
    } else {
      returnValue = null
    }
  } else {
    returnValue = null
  }
  return returnValue
}
const setData = (props) => {
  const dataPart = props.data.map((item, index) => {
    if ((props.max && props.max - 1 > index) || !props.max || (props.max && props.max === props.data.length)) {
      const aroundOptions = {
        size: props?.size,
        round: props?.round || null,
        isBorder: !props?.noBorder
      }
      const iter = {
        ...item,
        ...aroundOptions
      }
      return <Avatar key={uuidv4()} {...iter}/>
    } else {
      return false
    }
  })
  return [dataPart, setRest(props)]
}
function AvatarGroup (props) {
  return (
    <AvatarGroupWrap {...props}>
      {setData(props)}
    </AvatarGroupWrap>
  )
}

export default AvatarGroup
