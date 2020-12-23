import React from 'react';
import {createStore, applyMiddleware} from 'redux';

const saveToLocalStorage = store => next => action => {
  if(action.meta?.localStorageKey){
    localStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
  }
}

const myReducer = (state = {name: 'mike'}, action) =>{
  console.log('myReducer');
  if (action.type === 'someAction'){
    return {name : 'mike2'};
  }
  return state;
}
const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
store.dispatch({type: 'someAction', title: 'asdf', meta: {localStorageKey: 'myKey'}});
function App() {
  return (
    <div className="App">
      Redux Test
    </div>
  );
}

export default App;
