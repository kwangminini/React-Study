import React, { useRef, useEffect, useState } from 'react';

// function App() {
//   const inputRef = useRef();
//   useEffect(()=>{
//     inputRef.current.focus();
//   })
//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//     </div>
//   );
// }

// export default App;

// export default function App(){
//   const boxListRef = useRef({});
//   function onClick(){
//     let maxRight = 0;
//     let maxId = '';
//     for(const box of BOX_LIST){
//       const ref = boxListRef.current[box.id];
//       if(ref){
//         const rect = ref.getBoundingClientRect();
//         console.log(`rect::::: ${JSON.stringify(rect)}`);
//         if (maxRight < rect.right){
//           maxRight = rect.right;
//           maxId = box.id;
//         }
//       }
//     }
//     alert(`오른쪽 끝 요소는 ${maxId} 입니다.`);
//   }
//   return(
//     <div>
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         width: '100vw',
//         height:'100%'
//       }}>
//         {BOX_LIST.map(item =>(
//           <div key={item.id}
//           ref={ref => (boxListRef.current[item.id] = ref)}
//           style={{
//             flex : '0 0 auto',
//             width: item.width,
//             height: 100,
//             backgroundColor: 'yellow',
//             border: 'solid 1px red'
//           }}>{`box_${item.id}`}</div>
//         ))}
//       </div>
//       <button onClick={onClick}>오른쪽 끝 요소는?</button>
//     </div>
//   );
// }


// const BOX_LIST = [
//   {id: 1, width: 70},
//   {id: 2, width: 100},
//   {id: 3, width: 80},
//   {id: 4, width: 100},
//   {id: 5, width: 90},
//   {id: 6, width: 60},
//   {id: 7, width: 120},
// ]

export default function App(){
  const inputRef = useRef();
  const [showText, setShowText] = useState(true);
  return(
    <div>
      {showText && <input type='text' ref={inputRef}/>}
      <button onClick={()=>setShowText(!showText)}>텍스트 보이기/가리기</button>
      <button onClick={()=> inputRef.current && inputRef.current.focus()} >텍스트로 이동</button>
    </div>
  )
}