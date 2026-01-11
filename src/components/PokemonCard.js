import React , {useContext} from "react";
import styles from "../styles/PokemonCard.module.css";
import {favData} from "../context/FavouriteContext.js";
import { useNavigate } from "react-router-dom";
const PokemonCard = ({ pokemondet }) => {
  const {Togglefav,favlist}=useContext(favData);
  const Navigate= useNavigate();
  return (
    <div className={styles.card} onClick={()=>Navigate('/details',{state:{pokemondet}})}>
      <button onClick={() => Togglefav(pokemondet.id)}>
        {favlist.includes(pokemondet.id) ? "Remove from favourites" : "Mark as favourite"} </button>
      <img
        src={pokemondet.sprites.front_default}
        alt={pokemondet.name}
        className={styles.image}
      />

      <h3 className={styles.name}>
        {pokemondet.name.charAt(0).toUpperCase() + pokemondet.name.slice(1)}
      </h3>

      <p>ID: {pokemondet.id}</p>

      <p>
        Type: {pokemondet.types.map((t) => t.type.name).join(", ")}
      </p>
    </div>
  );
};

export default PokemonCard;
