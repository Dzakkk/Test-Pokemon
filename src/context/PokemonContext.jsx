import React, { createContext, useState, useEffect } from 'react';
import { PokeData } from '../utils/PokeData';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bag, setBag] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const { pokemonData, typeData } = await PokeData();
        setPokemonData(pokemonData);
        setTypeData(typeData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToBag = (pokemon) => {
    setBag((prevBag) => [...prevBag, pokemon])
  };


  const removeFromBag = (pokemonId) => {
    setBag(prevBag => prevBag.filter(pokemon => pokemon.id !== pokemonId));
  };



  return (
    <PokemonContext.Provider
      value={{
        pokemonData,
        typeData,
        bag,
        loading,
        error,
        addToBag,
        removeFromBag,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
