import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { debounce } from "lodash";

const SearchBar = ({ setPokemonList, PokemonList }) => {
  const [query, setQuery] = useState("");

  const debounceSearch = debounce((e) => {
    const initialPika = [...PokemonList];
    
    setQuery(e.target.value);
    console.log("Searching...");
    if(query.trim()!==""){
        const Searchresult = PokemonList.filter((pika) =>
      pika.name.toLowerCase().includes(query.toLowerCase())
    );
    setPokemonList(Searchresult);
    console.log(e.target.value);
}else{

    setPokemonList(initialPika);
    }
    
    
  }, 300);

  const handleChange = (e) => {
    debounceSearch(e);
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="Search..."
        className={styles.searchInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
