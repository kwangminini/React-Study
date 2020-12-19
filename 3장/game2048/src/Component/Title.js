import React from 'react';
import cn from 'classnames';

export default function Title({id, x, y, value, isMerged, isNew}){
    return(
        <div key={id} className={cn(`tile tile-${value} tile-position-${x}-${y}`,{
            'title-merged': isMerged,
            'title-new':isNew
        })}>
            <div className="tile-inner">{value}</div>
        </div>
    )
}