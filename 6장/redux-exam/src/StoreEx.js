import React from 'react';
import {createStore} from 'redux';
import produce from 'immer';

function createReducer(initialState, handlerMap){
    return function (state = initialState, action){
      return produce(state, draft => {
        const handler = handlerMap[action.type];
        if (handler){
          handler(draft, action);
        }
      });
    };
};

export default function App(){
    return <div> store exam</div>
}

const INITIAL_STATE = {value:0};
const reducer = createReducer(INITIAL_STATE, {
    INCREMENT: state => (state.value += 1)
});

const store = createStore(reducer);
let prevState;
store.subscribe(()=>{
    const state = store.getState();
    console.log(`state:::${JSON.stringify(state)}`);
    if (state === prevState){
        console.log('상태값 같음');
    }else{
        console.log('상태값 변경');
    }
    prevState = state;
});

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'OTHER_ACTION'});
store.dispatch({type: 'INCREMENT'});

