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
import { P as PropTypes, j as jsx, a as jsxs } from "../Avatar/7e74f388.js";
import { setColor } from "../Theme/index.js";
import { S as StyleIcon } from "../Icon/a13874c2.js";
MPlusIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
MPlusIcon.defaultProps = {
  size: 24,
  color: setColor.black
};
function MPlusIcon(props) {
  return /* @__PURE__ */ jsx(StyleIcon, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsxs("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M6 12H18",
        stroke: props.color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /* @__PURE__ */ jsx("path", {
        d: "M12 18L12 6",
        stroke: props.color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })]
    })
  }));
}
MMinusIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
MMinusIcon.defaultProps = {
  size: 24,
  color: setColor.black
};
function MMinusIcon(props) {
  return /* @__PURE__ */ jsx(StyleIcon, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsx("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", {
        d: "M6 12H18",
        stroke: props.color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    })
  }));
}
MCloseIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
MCloseIcon.defaultProps = {
  size: 24,
  color: setColor.black
};
function MCloseIcon(props) {
  return /* @__PURE__ */ jsx(StyleIcon, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsx("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 56 56",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", {
        d: "M30.8333 28L45.1887 10.8883C45.4293 10.6039 45.227 10.1719 44.8551 10.1719H40.4911C40.234 10.1719 39.9879 10.2867 39.8184 10.4836L27.9786 24.5984L16.1387 10.4836C15.9747 10.2867 15.7286 10.1719 15.4661 10.1719H11.102C10.7301 10.1719 10.5278 10.6039 10.7684 10.8883L25.1239 28L10.7684 45.1117C10.7145 45.1751 10.6799 45.2526 10.6688 45.3351C10.6576 45.4175 10.6704 45.5015 10.7055 45.5769C10.7406 45.6523 10.7966 45.7161 10.8669 45.7606C10.9372 45.8052 11.0188 45.8286 11.102 45.8281H15.4661C15.7231 45.8281 15.9692 45.7133 16.1387 45.5164L27.9786 31.4016L39.8184 45.5164C39.9825 45.7133 40.2286 45.8281 40.4911 45.8281H44.8551C45.227 45.8281 45.4293 45.3961 45.1887 45.1117L30.8333 28Z",
        fill: props.color
      })
    })
  }));
}
MLinkIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};
MLinkIcon.defaultProps = {
  size: 24,
  color: setColor.black
};
function MLinkIcon(props) {
  return /* @__PURE__ */ jsx(StyleIcon, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsx("svg", {
      width: props.size,
      height: props.size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("path", {
        d: "M4.53516 11.4642L11.4294 4.56992C13.4797 2.51966 16.8038 2.51966 18.8541 4.56992C20.9043 6.62017 20.9043 9.94428 18.8541 11.9945L10.8991 19.9495C9.53228 21.3163 7.3162 21.3163 5.94937 19.9495C4.58253 18.5827 4.58253 16.3666 5.94937 14.9997L13.9043 7.04479C14.5877 6.36137 15.6958 6.36137 16.3792 7.04479C17.0626 7.72821 17.0626 8.83625 16.3792 9.51966L9.4849 16.414",
        stroke: props.color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    })
  }));
}
export { MMinusIcon as M, MPlusIcon as a, MLinkIcon as b, MCloseIcon as c };
