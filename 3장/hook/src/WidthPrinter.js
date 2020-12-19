import React, {useState, useEffect} from 'react';
import useWidth from './useWidth';
export default function WidthPrinter(){
    const width = useWidth();
    return(
    <div>{`width is ${width}`}</div>
    );
}