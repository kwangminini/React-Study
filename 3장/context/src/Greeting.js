import React, {useContext} from 'react';

export default function Greeting({SetUserContext, UserContext}){
    const setUser = useContext(SetUserContext);
    const {userName, helloCount} = useContext(UserContext);
    return(
        <div>
            <p>{`${userName}`}</p>
            <p>{helloCount}</p>
            <button onClick={()=>setUser({userName, helloCount: helloCount+1})}>인사기기</button>
        </div>
    );

}