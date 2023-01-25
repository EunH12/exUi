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
import { useState, useCallback, useEffect } from "react";
import { P as PropTypes, a as jsxs, j as jsx } from "../Avatar/7e74f388.js";
import { s as styled } from "../dist/fe6993dd.js";
import { setColor, setSize } from "../Theme/index.js";
const InputCss = styled.input`
position: relative;
box-sizing: border-box;
flex-grow: 1;
width: 100%;
height: 100%;
padding: 0;
color: ${() => setColor.gray700};
border: none;

::placeholder {
  color: ${() => setColor.gray400};
}

&:disabled {
  cursor: not-allowed;
}

${(props) => {
  return __spreadProps(__spreadValues({}, setSize[props.size]), {
    display: props.block ? "block" : "inline-block",
    "&:focus": {
      outline: "none"
    }
  });
}}
`;
const InputWrap = styled.label`
position: relative;
box-sizing: border-box;
display: inline-flex;
gap: 8px;
align-items: center;
justify-content: center;
padding: 0 16px;
overflow: hidden;
border: 1px solid ${() => setColor.gray200};
border-radius: 4px;

&.disabled {
  cursor: not-allowed;
  background: ${() => setColor.gray100};
}

&.error {
  border: ${() => `1px solid ${setColor.warning}`};
}

${(props) => {
  let baseColor = setColor.primary;
  if (props.setColor) {
    baseColor = props.setColor;
  }
  return __spreadProps(__spreadValues({}, setSize[props.size]), {
    display: props.block ? "block" : "inline-flex",
    width: props.width ? `${props.width}px` : "auto",
    padding: props.children ? "0 8px" : "0 16px",
    "&:focus-within": {
      border: `1px solid ${baseColor}`
    }
  });
}}
`;
const InputPrefix = styled.p`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
margin: 0;
`;
const InputCount = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin: 0;
color: ${() => setColor.gray400};
white-space: nowrap;

${(props) => {
  var _a, _b;
  return {
    width: props.type === "textarea" ? "100%" : "auto",
    marginTop: props.type === "textarea" ? "8px" : "",
    fontSize: (_b = (_a = setSize) == null ? void 0 : _a[props.size]) == null ? void 0 : _b.fontSize
  };
}}
`;
const TextareaWrap = styled.div`
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const TextareaCss = styled.textarea`
padding: 8px;
color: #3f3f46;
resize: none;
border: 1px solid ${() => setColor.gray200};
border-radius: 4px;

&:disabled {
  cursor: not-allowed;
  background: ${() => setColor.gray100};
}

&.error {
  border: 1px solid ${() => setColor.warning};
}

${(props) => {
  let baseColor = setColor.primary;
  if (props.setColor) {
    baseColor = props.setColor;
  }
  return __spreadProps(__spreadValues({}, setSize[props.size]), {
    display: props.block ? "block" : "inline-flex",
    width: props.width ? `${props.width}px` : "auto",
    height: props.height ? `${props.height}px` : "auto",
    "&:focus": {
      outline: "none",
      border: `1px solid ${baseColor}`
    }
  });
}}
`;
Input.propTypes = {
  size: PropTypes.string,
  block: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  formatter: PropTypes.string,
  isCount: PropTypes.bool,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};
Input.defaultProps = {
  type: "text",
  size: "medium",
  block: false,
  isCount: false,
  disabled: false,
  handleChange: () => {
  }
};
const numberFormat = (value) => {
  const isNumber = /^\d+$/.test(value);
  if (isNumber && (value || value === 0)) {
    value += "";
    const list = value.replaceAll(",", "").split(".");
    const prefix = list[0].charAt(0) === "-" ? "-" : "";
    let num = prefix ? list[0].slice(1) : list[0];
    let result = "";
    while (num.length > 3) {
      result = `,${num.slice(-3)}${result}`;
      num = num.slice(0, num.length - 3);
    }
    if (num) {
      result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
  } else {
    return "";
  }
};
const telFormat = (num) => {
  const replaceType = num.length <= 7 ? "$1-$2$3" : "$1-$2-$3";
  return num.replace(/(^02.{0}|^01.{1}|^[0-9]{3})([0-9]*)([0-9]{4})/, replaceType);
};
function Input(props) {
  var _a, _b;
  const [value, setValue] = useState(props.value);
  const setPropsData = (targetValue) => {
    let returnValue = targetValue.toString();
    if (returnValue.includes(",")) {
      returnValue = returnValue.replaceAll(",", "");
    }
    if (returnValue.includes("-")) {
      returnValue = returnValue.replaceAll("-", "");
    }
    if (props.type === "number" || typeof props.value === "number" || props.formatter === "number") {
      const isNumber = /^\d+$/.test(returnValue);
      returnValue = isNumber ? Number(returnValue) : "";
    }
    if (props.formatter === "tel") {
      const isNumber = /^\d+$/.test(returnValue);
      returnValue = isNumber ? returnValue : "";
    }
    return returnValue;
  };
  const setFormat = useCallback(async (targetValue) => {
    if (props.formatter && props.type !== "textarea") {
      let returnValue;
      if (props.formatter === "number") {
        returnValue = numberFormat(targetValue);
      } else if (props.formatter === "tel") {
        returnValue = telFormat(targetValue);
      }
      setValue(returnValue);
    } else {
      setValue(targetValue);
    }
  }, [props.formatter, props.type]);
  useEffect(() => {
    setFormat(props.value);
  }, [setFormat, props.value]);
  function handleChange(e) {
    const targetValue = setPropsData(e.target.value);
    setFormat(e.target.value);
    props == null ? void 0 : props.handleChange(targetValue, e);
  }
  function CountComponent() {
    var _a2;
    if (props.isCount && props.maxLength) {
      return /* @__PURE__ */ jsxs(InputCount, {
        type: props.type,
        size: props.size,
        children: [((_a2 = props == null ? void 0 : props.value) == null ? void 0 : _a2.length) || 0, "/", props.maxLength]
      });
    } else {
      return false;
    }
  }
  const inputProps = __spreadValues({}, props);
  delete inputProps.children;
  return props.type === "textarea" ? /* @__PURE__ */ jsxs(TextareaWrap, {
    children: [/* @__PURE__ */ jsx(TextareaCss, __spreadProps(__spreadValues({}, props), {
      value,
      className: props.error ? "error" : "",
      onChange: handleChange
    })), /* @__PURE__ */ jsx(CountComponent, {})]
  }) : /* @__PURE__ */ jsxs(InputWrap, __spreadProps(__spreadValues({}, props), {
    className: [props.disabled ? "disabled" : "", props.error ? "error" : ""].join(""),
    children: [/* @__PURE__ */ jsx(InputPrefix, {
      children: (_a = props == null ? void 0 : props.children) == null ? void 0 : _a.find((item) => item.key === "prefix")
    }), /* @__PURE__ */ jsx(InputCss, __spreadProps(__spreadValues({}, inputProps), {
      value,
      onChange: handleChange
    })), /* @__PURE__ */ jsx(InputPrefix, {
      children: (_b = props == null ? void 0 : props.children) == null ? void 0 : _b.find((item) => item.key === "suffix")
    }), /* @__PURE__ */ jsx(CountComponent, {})]
  }));
}
export { Input as MInput };
