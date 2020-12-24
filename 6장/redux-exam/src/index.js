import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocalStorageMiddle from './LocalStorageMiddle';
import Immer from './ImmerEx';
import StoreEx from './StoreEx';
ReactDOM.render(
  <React.StrictMode>
    <StoreEx />
  </React.StrictMode>,
  document.getElementById('root')
);

