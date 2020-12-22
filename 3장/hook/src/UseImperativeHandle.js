import React, { useRef } from 'react';
import Profile2 from './Profile2';
export default function UseImperativeHandle(){
    const profileRef = useRef();
    const onClick = () =>{
        if(profileRef.current){
            profileRef.current.addAge(5);
        }
    }
    return(
        <div>
            <Profile2 ref={profileRef}/>
            <button onClick={onClick}>add age 5</button>
        </div>
    );
}