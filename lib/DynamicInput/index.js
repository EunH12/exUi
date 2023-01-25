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
import { useState, useEffect } from "react";
import { P as PropTypes, j as jsx, a as jsxs } from "../Avatar/7e74f388.js";
import { MInput as Input } from "../Input/index.js";
import { MButton as Button } from "../Button/index.js";
import { M as MMinusIcon, a as MPlusIcon } from "../iconList/09697965.js";
import { s as styled } from "../dist/fe6993dd.js";
import { setColor } from "../Theme/index.js";
import "../Icon/a13874c2.js";
const InputRow = styled.div`
display: flex;
gap: 4px;
align-items: center;

+ & {
  margin-top: 8px;
}
`;
const DynamicWrap = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;
DynamicInput.propTypes = {
  value: PropTypes.array,
  children: PropTypes.node,
  max: PropTypes.number,
  inputOptions: PropTypes.object,
  handleChange: PropTypes.func,
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
  isKeyObject: PropTypes.object
};
DynamicInput.defaultProps = {
  type: "text",
  size: "medium",
  block: false,
  isCount: false,
  disabled: false,
  handleChange: () => {
  }
};
function DynamicInput(props) {
  const [valueList, setValue] = useState(props.value);
  const handleChange = (value, index) => {
    setValue((prevState) => {
      const setData = [...prevState];
      setData[index] = value;
      return setData;
    });
  };
  useEffect(() => {
    props == null ? void 0 : props.handleChange(valueList);
  }, [valueList]);
  const inputRemove = (i) => {
    setValue((prevState) => {
      const setData = [...prevState];
      setData == null ? void 0 : setData.splice(i, 1);
      props == null ? void 0 : props.onRemove(i, prevState, setData);
      return setData;
    });
    props == null ? void 0 : props.onRemove(i);
  };
  const inputAdd = (i) => {
    setValue((prevState) => {
      const setData = [...prevState];
      setData == null ? void 0 : setData.splice(i + 1, 0, "");
      props == null ? void 0 : props.onCreate(i, prevState, setData);
      return setData;
    });
  };
  const inputList = () => {
    return valueList.map((item, index) => {
      const inputProps = __spreadValues({}, props);
      delete inputProps.onCreate;
      delete inputProps.onRemove;
      return /* @__PURE__ */ jsxs(InputRow, {
        children: [props.children ? props.children : /* @__PURE__ */ jsx(Input, __spreadProps(__spreadValues({}, inputProps), {
          value: item,
          handleChange: (value) => handleChange(value, index)
        })), /* @__PURE__ */ jsx(Button, {
          size: 36,
          type: "outline",
          isIcon: true,
          click: () => inputRemove(index),
          disabled: index === 0,
          children: /* @__PURE__ */ jsx(MMinusIcon, {
            color: setColor.gray500
          })
        }), /* @__PURE__ */ jsx(Button, {
          size: 36,
          type: "outline",
          isIcon: true,
          click: () => inputAdd(index),
          disabled: valueList.length === props.max,
          children: /* @__PURE__ */ jsx(MPlusIcon, {
            color: setColor.gray500
          })
        })]
      }, index);
    });
  };
  return /* @__PURE__ */ jsx(DynamicWrap, {
    children: inputList()
  });
}
export { DynamicInput as MDynamicInput };
