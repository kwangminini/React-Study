import React from 'react';
import './Button.css';
export default function Button({
  size
}) {
  if (size === 'big') {
    return /*#__PURE__*/React.createElement("div", {
      className: "button big"
    }, "\uD070 \uBC15\uC2A4");
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "button small"
    }, "\uC791\uC740 \uBC15\uC2A4");
  }
}