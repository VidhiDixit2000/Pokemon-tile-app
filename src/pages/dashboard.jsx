import React, { useEffect,useState,useContext } from 'react';
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Dashboard.module.css";
import SearchBar from '../components/SearchBar';



const Dashboard = () => {
  const [pika, setpika] = useState([]);
  const[loading,setloader]=useState(false);
  const[offset,setoffset]=useState(0);
  
  async function callapi(){
    setloader(true);
    try{
      
  const response= await fetch (`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
  const json= await response.json();
  console.log("json---"+JSON.stringify(json));
  const pokdet=await Promise.all(json.results.map(element => fetch(element.url).then(link=>link.json())));
  setpika(pokdet);

    }catch(error){
      console.log("error hai bhai"+error);
    }
   setloader(false);
  }
useEffect(()=>{callapi();},[offset]);

console.log("offsetinitial", offset);
function handlePrevious(event){
  setoffset(offset-10<=0 ? 0 : offset-10);
  console.log("offsetp", offset);
}
function handleNext(event){
  setoffset(offset+10);
  console.log("offsetn", offset);
}

  return (

    <div className={styles.container}>
      <h2>Pokémon Dashboard</h2>
      <SearchBar setPokemonList={setpika} PokemonList={pika}></SearchBar>
      <div>
        {loading ? "Loading....":
      (pika.length !==0 ?
       (
        <div className={styles.grid}>
        {pika.map((element,index) => 
                  <PokemonCard key={index} pokemondet={element} ></PokemonCard>

        )}
 
        </div>
      ) : (<p>No Pokémon data available.</p>)
      )
  }
      </div>
      <div>
        <button 
        onClick={handlePrevious} disabled={offset===0}>Previous
        
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )

}
export default Dashboard
