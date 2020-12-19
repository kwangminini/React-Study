import React, {useState, createContext, useContext} from 'react';
const UserContext = createContext('unknown');

function App() {
  const [name,setName] = useState('mike');
  return (
    <div>
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile/>
        <div>하단 메뉴</div>
        <input type="text" onChange={e=>setName(e.target.value)}/>
      </UserContext.Provider>

    </div>
  );
}

const Profile = React.memo(()=>{
  console.log('Profile render');
  return(
    <div>
      <Greeting/>
    </div>
  );
});

function Greeting(){
  const userName = useContext(UserContext);
  return(
    <p>{userName}</p>
  );
}

export default App;
