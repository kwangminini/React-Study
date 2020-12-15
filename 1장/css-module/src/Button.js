import React from 'react';
import Style from './Button.module.css';
export default function Button({size}) {
  if (size === 'big') {
    return <button className={`${Style.big} ${Style.button}`}>큰 버튼</button>
  } else {
    return <button className={`${Style.small} ${Style.button}`}>작은 버튼</button>
  }
}