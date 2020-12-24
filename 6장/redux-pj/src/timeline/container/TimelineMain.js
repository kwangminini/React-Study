import React, { useReducer, useEffect } from 'react';
import store from '../../common/store';
import { getNextTimeline } from '../../common/mockData';
import { actions } from '../state';
import TimelineList from '../component/TimelineList';
import { useDispatch, useSelector } from 'react-redux';

export default function TimelineMain(){
    const dispatch = useDispatch();
    const timelines = useSelector(state => state.timeline.timelines);
    const isLoading = useSelector(state => state.timeline.isLoading);
    // const [, forceUpdate] = useReducer(v=> v+1,0);
    // useEffect(()=>{
    //     let prevTimelines = store.getState().timeline.timelines;
    //     const unsubscribe = store.subscribe(()=>{
    //         const timelines = store.getState().timeline.timelines;
    //         if(prevTimelines !== timelines){
    //             forceUpdate();
    //         }
    //         prevTimelines = timelines;
    //     });
    //     return ()=>unsubscribe();
    // },[]); 
    function onAdd(){
        const timeline = getNextTimeline();
        store.dispatch(actions.addTimeline(timeline));
    }
    function onLike(e){
        const id = Number(e.target.dataset.id);
        const timeline = timelines.find(item => item.id === id);
        dispatch(actions.requestLike(timeline));
    }
    console.log('TimelineMain render');
    // const timelines = store.getState().timeline.timelines;
    return(
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike}/>
            {isLoading && <p>전송 중...</p>}
        </div>
    );
}