import React, {useState} from 'react';
import WidthPrinter from './WidthPrinter';

export default function App3(){
    const [userId, setUserId] = useState(0);
    return(
        <>
            {userId === 0 && <WidthPrinter/>}
            <button onClick={()=>setUserId(userId+1)}>userId 변경</button>
        </>
    );
}