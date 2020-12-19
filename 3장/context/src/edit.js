import React, {useState, createContext} from 'react';
import Greeting from './Greeting';

const UserContext = createContext({userName:'unknown', helloCount: 0});
const SetUserContext =createContext(()=>{});

export default function Edit(){
    const [user, setUser] = useState({userName:'mike', helloCount: 0});
    return(
        <SetUserContext.Provider value={setUser}>
            <UserContext.Provider value={user}>
                <Greeting UserContext={UserContext} SetUserContext={SetUserContext}/>
            </UserContext.Provider>
        </SetUserContext.Provider>
    );
}