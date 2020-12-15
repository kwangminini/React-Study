import React from 'react';
import './Box.css';
export default function Box({
  size
}) {
  if (size === 'big') {
    return /*#__PURE__*/React.createElement("div", {
      className: "box big"
    }, "\uD070 \uBC15\uC2A4");
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "box small"
    }, "\uC791\uC740 \uBC15\uC2A4");
  }
}