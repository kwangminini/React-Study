import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
export default function App(){
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    function onClick(){ //리액트 내부에서 관리되기 때문에 배치처리
        ReactDOM.unstable_batchedUpdates(()=>{
            setCount(v=>v+1);
            setCount2(v=>v+1);
        });
    }
    useEffect(()=>{ //배치로 처리 안됨
        window.addEventListener('click',onClick);
        return ()=>window.removeEventListener('click',onClick);
    });
    console.log('render called');
    // console.log(`count2::${count2}`);
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onClick}>증가</button>
        </div>
    )
}