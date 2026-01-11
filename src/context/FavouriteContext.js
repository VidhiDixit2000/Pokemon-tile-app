import React,{createContext, useState,useEffect} from 'react';
const favData = createContext();
const FavouriteContext = ({children}) => {
const exfavList=JSON.parse(localStorage.getItem('favlist') ?? '[]');
const [favlist, setfav] = useState(exfavList);
//check if pokemonId is already in fav list , if not , add it in the local storage. If yes, remove it from local storage 
const Togglefav=(pokemonId)=>{

   const isFav=favlist.find((fav)=>fav===pokemonId)
   if(isFav){
   setfav([...favlist.filter((fav)=>fav!==pokemonId)]);
   }
   else{
  
    setfav([...favlist,pokemonId]);
   }
  };
   useEffect(() => {
     localStorage.setItem('favlist', JSON.stringify([...favlist]));
   }, [favlist]);


  return (
    <div>
        <favData.Provider value={{favlist,Togglefav}}>
            {children}
        </favData.Provider>
        </div>
  )
}
export {favData,FavouriteContext}

