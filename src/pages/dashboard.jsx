import React, { useEffect, useState, useCallback } from 'react';
import PokemonCard from "../components/PokemonCard";
import styles from "../styles/Dashboard.module.css";
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
  const [pika, setpika] = useState([]);
  const [loading, setloader] = useState(false);
  const [offset, setoffset] = useState(0);

  const callapi = useCallback(async () => {
    setloader(true);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`
      );
      const json = await response.json();

      const pokdet = await Promise.all(
        json.results.map(element =>
          fetch(element.url).then(link => link.json())
        )
      );

      setpika(pokdet);
    } catch (error) {
      console.log("error hai bhai", error);
    } finally {
      setloader(false);
    }
  }, [offset]);

  useEffect(() => {
    callapi();
  }, [callapi]);

  function handlePrevious() {
    setoffset(prev => (prev - 10 <= 0 ? 0 : prev - 10));
  }

  function handleNext() {
    setoffset(prev => prev + 10);
  }

  return (
    <div className={styles.container}>
      <h2>Pokémon Dashboard</h2>

      <SearchBar setPokemonList={setpika} PokemonList={pika} />

      <div>
        {loading ? (
          "Loading...."
        ) : pika.length !== 0 ? (
          <div className={styles.grid}>
            {pika.map((element, index) => (
              <PokemonCard key={index} pokemondet={element} />
            ))}
          </div>
        ) : (
          <p>No Pokémon data available.</p>
        )}
      </div>

      <div>
        <button onClick={handlePrevious} disabled={offset === 0}>
          Previous
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Dashboard;
