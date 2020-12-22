import React from 'react';
import ReactDOM from 'react-dom';
import App3 from './App3';
import UseReducer from './useReducer';
import UseImperativeHandle from './UseImperativeHandle';

ReactDOM.render(
  <React.StrictMode>
    <UseImperativeHandle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

