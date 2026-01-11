import React from 'react'
import { useLocation } from 'react-router-dom';
const Details = () => {
    const location=useLocation();
    const {pokemondet}=location.state;
    console.log(pokemondet);
    console.log("value receieved in details page");
  return (
    <div>
        <h2>{pokemondet.name.charAt(0).toUpperCase() + pokemondet.name.slice(1)} profile</h2>
        <h3>Name- {pokemondet.name}</h3>
        <h3>ID- {pokemondet.id}</h3>
    </div>
  )
}

export default Details
