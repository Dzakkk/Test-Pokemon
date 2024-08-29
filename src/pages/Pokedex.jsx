import React, { useContext, useState, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "../components/Card";
import Search from "../components/Search";
import Filter from "../components/Filter";
import RenameModal from "../components/RenameModal";
import NotifModal from "../components/NotifModal";

const Pokedex = () => {
  const { pokemonData, loading, error, addToBag, typeData } = useContext(PokemonContext);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [notification, setNotification] = useState(null);

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

  const handleCatch = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleRename = (nickname) => {
    addToBag({ ...selectedPokemon, nickname });
    setNotification(`${nickname} has been added to your bag!`);
    setSelectedPokemon(null);
  };

  const closeNotification = () => {
    setNotification(null);
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
          <Card key={pokemon.name} pokemon={pokemon} onCatch={handleCatch} />
        ))}
      </div>
      {selectedPokemon && (
        <RenameModal
          pokemon={selectedPokemon}
          onRename={handleRename}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
      {notification && (
        <NotifModal 
            massage={notification}
            onClose={closeNotification}
        />
      )}
    </div>
  );
};

export default Pokedex;
