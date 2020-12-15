import React from 'react';
import ReactDOM from 'react-dom';
import Box from './Box';
import Button from './Button';
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
  size: "big"
}), /*#__PURE__*/React.createElement(Button, {
  size: "small"
}), /*#__PURE__*/React.createElement(Box, {
  size: "big"
}), /*#__PURE__*/React.createElement(Box, {
  size: "small"
})), document.getElementById('root'));