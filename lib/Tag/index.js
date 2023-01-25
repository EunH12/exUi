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
import { P as PropTypes, a as jsxs, j as jsx } from "../Avatar/7e74f388.js";
import { s as styled } from "../dist/fe6993dd.js";
import { setColor } from "../Theme/index.js";
import { MButton as Button } from "../Button/index.js";
import { c as MCloseIcon } from "../iconList/09697965.js";
import "react";
import "../Icon/a13874c2.js";
const setPrimary = (props) => {
  let baseColor = setColor.primary;
  if (props.color) {
    if (props.color.includes("#")) {
      baseColor = props.color;
    } else {
      baseColor = setColor[props.color];
    }
  }
  const cssList = {
    primary: {
      color: "#fff",
      backgroundColor: baseColor
    },
    outline: {
      color: baseColor,
      border: `1px solid ${setColor.gray200}`,
      backgroundColor: setColor.gray100
    }
  };
  return cssList[props.type];
};
const setTagCloseColor = (props) => {
  let baseColor = "#fff";
  if (props.type !== "primary") {
    baseColor = setColor[props.color || "primary"];
  }
  return baseColor;
};
const TagWrap = styled.div`
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
height: 25px;
padding: 0 12px;
font-size: 12px;
line-height: 1;
border-radius: 100px;

> button {
  margin-right: -4px;
  margin-left: 2px;
}

${(props) => {
  return __spreadValues({}, setPrimary(props));
}}

`;
Tag.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  close: PropTypes.func,
  closeable: PropTypes.bool
};
Tag.defaultProps = {
  type: "primary",
  outline: false
};
function Tag(props) {
  return /* @__PURE__ */ jsxs(TagWrap, __spreadProps(__spreadValues({}, props), {
    children: [/* @__PURE__ */ jsx("span", {
      children: props.children
    }), props.closeable ? /* @__PURE__ */ jsx(Button, {
      size: 14,
      setColor: "transparent",
      isIcon: true,
      click: props.close,
      children: /* @__PURE__ */ jsx(MCloseIcon, {
        size: 14,
        color: setTagCloseColor(props)
      })
    }) : null]
  }));
}
export { Tag as MTag };
