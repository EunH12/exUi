var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { P as PropTypes, j as jsx } from "../Avatar/7e74f388.js";
import { setColor } from "../Theme/index.js";
import { s as styled } from "../dist/fe6993dd.js";
import { b as MLinkIcon, c as MCloseIcon, M as MMinusIcon, a as MPlusIcon } from "../iconList/09697965.js";
const StyleIconWrap = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 0;
line-height: 1;
`;
const StyleIcon = styled.span`
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 0;

${(props) => {
  return {
    fill: props.color,
    stroke: props.color
  };
}}
`;
Icon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
};
Icon.defaultProps = {
  size: 24,
  color: setColor.black,
  name: "Link"
};
const componentList = {
  link: MLinkIcon,
  close: MCloseIcon,
  minus: MMinusIcon,
  plus: MPlusIcon
};
function Icon(props) {
  const IconSet = componentList[props.name];
  return /* @__PURE__ */ jsx(StyleIconWrap, __spreadProps(__spreadValues({}, props), {
    children: props.children ? props.children : /* @__PURE__ */ jsx(IconSet, __spreadValues({}, props))
  }));
}
export { Icon as I, StyleIcon as S };
