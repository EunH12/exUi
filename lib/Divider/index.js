import { P as PropTypes, j as jsx } from '../Avatar/7e74f388.js'
import { setColor } from '../Theme/index.js'
import { s as styled } from '../dist/fe6993dd.js'
import 'react'
const __defProp = Object.defineProperty
const __defProps = Object.defineProperties
const __getOwnPropDescs = Object.getOwnPropertyDescriptors
const __getOwnPropSymbols = Object.getOwnPropertySymbols
const __hasOwnProp = Object.prototype.hasOwnProperty
const __propIsEnum = Object.prototype.propertyIsEnumerable
const __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value
const __spreadValues = (a, b) => {
  for (var prop in b || (b = {})) {
    if (__hasOwnProp.call(b, prop)) { __defNormalProp(a, prop, b[prop]) }
  }
  if (__getOwnPropSymbols) {
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) { __defNormalProp(a, prop, b[prop]) }
    }
  }
  return a
}
const __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b))
const StyleDivider = styled.div`
${(props) => ({
  margin: props.vertical ? `0 ${props.margin}px` : `${props.margin}px 0`,
  borderColor: props.lineColor,
  borderStyle: props.dashed ? 'dashed' : 'solid'
})}
&.basic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-width: 1px 0 0;
}

&.vertical {
  display: inline-block;
  height: 1em;
  vertical-align: middle;
  border-width: 0 1px 0 0;
}
`
Divider.propTypes = {
  dashed: PropTypes.bool,
  vertical: PropTypes.bool,
  margin: PropTypes.number,
  lineColor: PropTypes.string
}
Divider.defaultProps = {
  margin: 8,
  lineColor: setColor.gray200
}
function Divider (props) {
  return /* @__PURE__ */ jsx(StyleDivider, __spreadProps(__spreadValues({}, props), {
    className: props.vertical ? 'vertical' : 'basic'
  }))
}
export { Divider as MDivider }
