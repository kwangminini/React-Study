import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';


ReactDOM.render(
  <React.StrictMode>
    <User onChangeTitle={()=>{}} male={true} />
  </React.StrictMode>,
  document.getElementById('root')
);
