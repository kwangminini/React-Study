import React, { useState } from 'react';
import Counter from './Counter';
import ReactDOM from 'react-dom';
export default function App() {
    const [color, setColor] = useState('blue');
    function onClick() {
        setColor('red');
    }
    return (
        <>
            <Counter />
            <button style={{ backgroundColor: color }} onClick={onClick}>좋아요</button>
            {ReactDOM.createPortal(
                <>
                    <p>Portal</p>
                </>,
                document.getElementById('something')
            )}
        </>
    );
}