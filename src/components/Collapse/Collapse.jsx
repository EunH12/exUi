import PropTypes from 'prop-types'
import { useState } from 'react'
import { setColor } from '@/components/Theme'
import { StyleCollapse, StyleCollapseChild, PreIcons } from './style'

Collapse.propTypes = {
  accordion: PropTypes.bool,
  title: PropTypes.string.isRequired,
  margin: PropTypes.number,
  children: PropTypes.node,
  isIcon: PropTypes.bool
}
Collapse.defaultProps = {
  margin: 8,
  lineColor: setColor.gray200
}

function Collapse (props) {
  const [openValue, setValueOpenValue] = useState(false)
  function PreIcon () {
    if (props.isIcon) {
      return <PreIcons isIcon={props.isIcon}>
        오
      </PreIcons>
    } else {
      return false
    }
  }
  return (
    <StyleCollapse margin={props.margin} onClick={() => setValueOpenValue(!openValue)}>
      <PreIcon/>
      {props.title}
      {
        openValue
          ? <StyleCollapseChild>
              {props.children}
            </StyleCollapseChild>
          : ''
      }
    </StyleCollapse>
  )
}
export default Collapse
