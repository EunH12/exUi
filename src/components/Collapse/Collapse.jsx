import PropTypes from 'prop-types'
import { useState } from 'react'
import { setColor } from '@/components/Theme'
import { StyleCollapse, StyleCollapseChild } from './style'

Collapse.propTypes = {
  accordion: PropTypes.bool,
  title: PropTypes.string,
  margin: PropTypes.number,
  children: PropTypes.node
}
Collapse.defaultProps = {
  margin: 8,
  lineColor: setColor.gray200
}

function Collapse (props) {
  const [openValue, setValueOpenValue] = useState(false)
  return (
    <StyleCollapse {...props} onClick={() => setValueOpenValue(!openValue)}>
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
