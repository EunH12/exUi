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
import r from "react";
import { s as styled } from "../dist/fe6993dd.js";
import { setColor } from "../Theme/index.js";
var noImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjI1MCIgY3k9IjI1MCIgcj0iMjUwIiBmaWxsPSIjRjRGNEY1Ii8+CjxtYXNrIGlkPSJtYXNrMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIyNTAiIHI9IjI1MCIgZmlsbD0iI0Y0RjRGNSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazApIj4KPHBhdGggZD0iTTI1MCAzMjAuNUMxMjYuNSAzMjAuNSA1OC41MDA2IDM3OS4wMDEgNTguNTAwNiA0ODVDNTguNTAwNiA0OTMuNTAxIDY1LjAwMDcgNTAwIDczLjUwMDEgNTAwSDQyNi41QzQzNSA1MDAgNDQxLjQ5OSA0OTMuNSA0NDEuNDk5IDQ4NUM0NDEuNDk5IDM3OSAzNzMuNSAzMjAuNSAyNTAgMzIwLjVaIiBmaWxsPSIjRDRENEQ4Ii8+CjwvZz4KPHBhdGggZD0iTTI1MCAyOTguNUMzMDUgMjk4LjUgMzQ5LjUgMjQ5Ljk5OSAzNDkuNSAxOTAuNUMzNDkuNSAxMzIuNSAzMDYuNSA4OSAyNTAgODlDMTkzLjUwMSA4OSAxNTAuNSAxMzIuNSAxNTAuNSAxOTAuNUMxNTAuNSAyNTAgMTk1IDI5OC41IDI1MCAyOTguNVoiIGZpbGw9IiNENEQ0RDgiLz4KPC9zdmc+Cg==";
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
const AvatarWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  font-size: ${(props) => props.size * 0.4}px;
  line-height: 0;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.isBorder ? "1px solid #fff" : "none"};
  border-radius: ${(props) => props.round ? "50%" : "6px"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AvatarGroupWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;

  > * {
    margin: 0 -6px;
  }
`;
const RestStyle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  font-size: ${(props) => props.size * 0.4}px;
  color: #fff;
  background-color: ${(props) => props.restBackgroundColor};
  border: ${(props) => !props.noBorder ? "1px solid #fff" : "none"};
  border-radius: ${(props) => props.round ? "50%" : "6px"};
`;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = r, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a.key !== void 0 && (e = "" + a.key);
  a.ref !== void 0 && (h = a.ref);
  for (b in a)
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      d[b] === void 0 && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
Avatar.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  name: PropTypes.string,
  round: PropTypes.bool,
  isBorder: PropTypes.bool,
  children: PropTypes.node
};
Avatar.defaultProps = {
  size: 40,
  backgroundColor: setColor.gray300,
  fontColor: setColor.black,
  round: true,
  isBorder: false
};
function Avatar(props) {
  const SetImage = () => {
    var _a;
    const image = /* @__PURE__ */ jsx("img", {
      src: props.src || noImage,
      onError: (e) => {
        e.target.onerror = null;
        e.target.src = noImage;
      }
    });
    const name = `${(_a = props == null ? void 0 : props.name) == null ? void 0 : _a.charAt(0)}`;
    return !props.src && (props == null ? void 0 : props.name) ? name : image;
  };
  return /* @__PURE__ */ jsx(AvatarWrap, __spreadProps(__spreadValues({}, props), {
    children: (props == null ? void 0 : props.children) ? props == null ? void 0 : props.children : /* @__PURE__ */ jsx(SetImage, {})
  }));
}
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
AvatarGroup.propTypes = {
  size: PropTypes.number,
  data: PropTypes.array,
  round: PropTypes.bool,
  noBorder: PropTypes.bool,
  max: PropTypes.number,
  restBackgroundColor: PropTypes.string
};
AvatarGroup.defaultProps = {
  restBackgroundColor: setColor.gray300,
  data: [],
  round: true,
  noBorder: false,
  size: 40
};
const setRest = (props) => {
  let returnValue;
  if (props.max) {
    if (props.data.length > props.max) {
      returnValue = /* @__PURE__ */ jsxs(RestStyle, __spreadProps(__spreadValues({}, props), {
        children: ["+", props.data.length - props.max]
      }), v4());
    } else {
      returnValue = null;
    }
  } else {
    returnValue = null;
  }
  return returnValue;
};
const setData = (props) => {
  const dataPart = props.data.map((item, index) => {
    if (props.max && props.max - 1 > index || !props.max || props.max && props.max === props.data.length) {
      const aroundOptions = {
        size: props == null ? void 0 : props.size,
        round: (props == null ? void 0 : props.round) || null,
        isBorder: !(props == null ? void 0 : props.noBorder)
      };
      const iter = __spreadValues(__spreadValues({}, item), aroundOptions);
      return /* @__PURE__ */ jsx(Avatar, __spreadValues({}, iter), v4());
    } else {
      return false;
    }
  });
  return [dataPart, setRest(props)];
};
function AvatarGroup(props) {
  return /* @__PURE__ */ jsx(AvatarGroupWrap, __spreadProps(__spreadValues({}, props), {
    children: setData(props)
  }));
}
export { Avatar as A, PropTypes as P, jsxs as a, AvatarGroup as b, jsx as j };
