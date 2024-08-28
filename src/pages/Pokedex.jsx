import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card";
import Search from "../components/Search";
import Filter from "../components/Filter";

const Pokedex = () => {
  const { pokemonData, loading, error, addToBag, typeData } = useContext(PokemonContext);

  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    filterPokemons(searchTerm, selectedType);
  }, [pokemonData, searchTerm, selectedType]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filterPokemons = (searchTerm, type) => {
    let filtered = pokemonData;
    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (type) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === type)
      );
    }
    setFilteredPokemons(filtered);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!pokemonData || pokemonData.length === 0)
    return <p>No Pokémon data found.</p>;

  return (
    <div>
      <h1 className="text-center font-bold p-6 text-5xl">Pokédex</h1>
      <div className="flex justify-center gap-4 mb-4">
        <Search onSearch={handleSearch} />
        <Filter types={typeData} onTypeChange={handleTypeChange} />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} onCatch={addToBag} />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
