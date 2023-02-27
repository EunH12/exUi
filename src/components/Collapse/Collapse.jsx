import PropTypes from 'prop-types'
import { useState } from 'react'
import { setColor } from '@/components/Theme'
import { MArrowRightIcon } from '@/components/icon'
import { StyleCollapseChild, PreIcons, TitlePart } from './style'

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
      let iconNode
      if (Array.isArray(props.children)) {
        iconNode = props?.children?.find(item => item.key === 'preIcon')
      } else if (props?.children?.key === 'iconNode') {
        iconNode = props.children
      } else {
        iconNode = <MArrowRightIcon size={14}/>
      }
      return <PreIcons isIcon={props.isIcon} className={openValue ? 'rotate' : ''}>
        {iconNode}
      </PreIcons>
    } else {
      return false
    }
  }
  return (
    <>
      <TitlePart onClick={() => setValueOpenValue(!openValue)}>
        <PreIcon/>
        {props.title}
      </TitlePart>
      {
        openValue
          ? <StyleCollapseChild>
              {props.children}
            </StyleCollapseChild>
          : ''
      }
    </>
  )
}
export default Collapse
