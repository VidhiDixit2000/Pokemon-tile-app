import React,{createContext, useState} from 'react';


const Data=createContext();
const AuthContext = ({children}) => {
const userDetails=localStorage.getItem('userdet');
const [user, setuser] = useState(userDetails ?? null);
const login=(userDetails)=>{

    setuser(userDetails);
    localStorage.setItem('userdet',JSON.stringify(userDetails));
}
const logout=()=>{
    setuser(null);
    localStorage.setItem(null);
}
  return (
    <div>
        <Data.Provider value={{logout, login, user}}>
            {children}
        </Data.Provider>
        </div>
  )
}
export {AuthContext,Data}

