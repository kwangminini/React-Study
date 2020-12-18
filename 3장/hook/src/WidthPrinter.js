import React, {useState, useEffect} from 'react';

export default function WidthPrinter(){
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        console.log("1");
        const onResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', onResize);
        return () => {
            console.log("2");
            window.removeEventListener('resize', onResize);
        }
    },[]);
    return(
    <div>{`width is ${width}`}</div>
    );
}