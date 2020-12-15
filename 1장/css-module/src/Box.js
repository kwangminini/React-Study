import React from 'react';
import Style from './Box.module.css';
import cn from 'classnames';
export default function Box({ size }) {
  const isBig = size === 'big';
  return <div className={cn(Style.box, {
    [Style.big]: isBig,
    [Style.small]: !isBig
  })}>큰 박스</div>
}