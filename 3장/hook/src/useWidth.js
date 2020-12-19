import {useState, useEffect} from 'react';

export default function useWidth(){
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
    return width;
}