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
import { s as styled } from "../dist/fe6993dd.js";
import "react";
import "../Theme/index.js";
const StyleEllipsis = styled.div`
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: ${(props) => props.lineClamp};

${(props) => {
  let returnValue;
  if (props.lineClamp > 1) {
    returnValue = {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical"
    };
  } else {
    returnValue = { whiteSpace: "nowrap" };
  }
  return returnValue;
}}

`;
Ellipsis.propTypes = {
  lineClamp: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.object
};
Ellipsis.defaultProps = {
  lineClamp: 1
};
function Ellipsis(props) {
  return /* @__PURE__ */ jsx(StyleEllipsis, __spreadProps(__spreadValues({}, props), {
    children: props.children
  }));
}
export { Ellipsis as MEllipsis };
