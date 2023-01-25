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
import { setSize, setColor } from "../Theme/index.js";
import "react";
const setSizeJoin = () => {
  const object = {};
  Object.keys(setSize).forEach((item) => {
    object[item] = __spreadValues({
      padding: item === "large" ? "0 32px" : "0 24px"
    }, setSize[item]);
  });
  return object;
};
const buttonSize = setSizeJoin();
const setPrimary = (type, props) => {
  let baseColor = setColor.primary;
  if (props.setColor) {
    baseColor = props.setColor;
  }
  const cssList = {
    primary: {
      color: "#fff",
      backgroundColor: baseColor
    },
    primaryOutline: {
      color: baseColor,
      border: `1px solid ${baseColor}`,
      backgroundColor: "#fff",
      "&:hover": {
        "&::before": {
          backgroundColor: "transparent"
        }
      }
    },
    secondary: {
      color: "#fff",
      backgroundColor: setColor.secondary
    },
    secondaryOutline: {
      color: setColor.secondary,
      backgroundColor: "#fff",
      border: `1px solid ${setColor.gray300}`,
      "&:hover": {
        "&::before": {
          backgroundColor: "transparent"
        }
      }
    },
    warning: {
      color: "#fff",
      backgroundColor: setColor.warning
    },
    warningOutline: {
      color: setColor.warning,
      border: `1px solid ${setColor.warning}`,
      backgroundColor: "#fff",
      "&:hover": {
        "&::before": {
          backgroundColor: "transparent"
        }
      }
    },
    tertiary: {
      color: baseColor,
      backgroundColor: `rgba(${parseInt(baseColor.substring(1, 3), 16)},${parseInt(baseColor.substring(3, 5), 16)},${parseInt(baseColor.substring(5, 7), 16)}, 0.2)`
    }
  };
  return cssList[type];
};
const ButtonWrap = styled.button`
position: relative;
box-sizing: border-box;
overflow: hidden;
font-size: 0;
cursor: pointer;
border: none;
border-radius: 4px;

&::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
  background-color: rgb(0 0 0 / 10%);
  opacity: 0;
}

&:hover {
  &::before {
    opacity: 1;
  }
}

&:disabled {
  &::before {
    background: none;
  }
}

${(props) => {
  let setStyle, setPadding;
  if (props.outline && props.type !== "tertiary") {
    setStyle = `${props.type}Outline`;
  } else {
    setStyle = props.type;
  }
  if (props.isIcon) {
    if (typeof props.size === "number") {
      setPadding = {
        padding: 0,
        width: props.size,
        height: props.size
      };
    } else {
      setPadding = __spreadProps(__spreadValues({}, setSize[props.size]), { padding: 0 });
    }
  } else {
    setPadding = buttonSize[props.size];
  }
  return __spreadValues(__spreadProps(__spreadValues({}, setPrimary(setStyle, props)), {
    display: props.block ? "block" : "inline-block",
    width: props.block ? "100%" : "auto"
  }), setPadding);
}}

`;
Button.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
  block: PropTypes.bool,
  click: PropTypes.func,
  setColor: PropTypes.string,
  outline: PropTypes.bool,
  isIcon: PropTypes.bool,
  style: PropTypes.object
};
Button.defaultProps = {
  size: "medium",
  type: "primary",
  name: "\uBC84\uD2BC",
  block: false
};
function Button(props) {
  return /* @__PURE__ */ jsx(ButtonWrap, __spreadProps(__spreadValues({}, props), {
    onClick: props == null ? void 0 : props.click,
    children: props.children || props.name
  }));
}
export { Button as MButton };
