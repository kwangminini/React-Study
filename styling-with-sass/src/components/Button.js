import React from 'react';
import './Button.scss';
import cn from 'classnames';
export default function Button({children, size, color, outline, fullWidth, ...rest}){
return <button className={cn('Button',size, color,{
    outline,
    fullWidth
})} {...rest}>{children}</button>
}

Button.defaultProps = {
    size :'medium',
    color: 'blue'
};