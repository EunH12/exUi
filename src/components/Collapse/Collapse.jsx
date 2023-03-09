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

function Collapse ({ children, title, isIcon }) {
  const [openValue, setValueOpenValue] = useState(false)
  function PreIcon () {
    if (isIcon) {
      let iconNode
      if (Array.isArray(children)) {
        iconNode = children?.find(item => item.key === 'preIcon')
      } else if (children?.key === 'iconNode') {
        iconNode = children
      } else {
        iconNode = <MArrowRightIcon size={14}/>
      }
      return <PreIcons isIcon={isIcon} className={openValue ? 'rotate' : ''}>
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
        {title}
      </TitlePart>
      {
        openValue
          ? <StyleCollapseChild>
              {children}
            </StyleCollapseChild>
          : ''
      }
    </>
  )
}
export default Collapse
