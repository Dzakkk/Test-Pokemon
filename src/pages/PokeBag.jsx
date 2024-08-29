import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import DeleteModal from "../components/DeleteModal";
import NotifModal from "../components/NotifModal";

const typeColor = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#999999",
  shadow: "#555555",
};

const PokeBag = () => {
  const { bag, removeFromBag } = useContext(PokemonContext);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [goodbyeMessage, setGoodbyeMessage] = useState(null);

  const handleRemove = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const confirmRemove = () => {
    removeFromBag(selectedPokemon.name || selectedPokemon.nickname);
    setGoodbyeMessage(
      `Good bye, ${selectedPokemon.nickname || selectedPokemon.name}. !`
    );
    setSelectedPokemon(null);
  };

  const closeGoodbyeModal = () => {
    setGoodbyeMessage(null);
  };

  if (bag.length === 0) return <p>Your bag is empty.</p>;

  return (
    <div className="flex flex-wrap justify-center">
      {bag.map((pokemon) => (
        <div
          key={pokemon.id}
          className="bg-white border rounded-lg shadow-md p-4 m-2 max-w-xs"
        >
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.nickname || pokemon.name}
            className="w-full h-36 object-cover mb-2"
          />
          <h3 className="text-lg text-center font-bold mb-2 text-gray-800 capitalize">
            {pokemon.nickname || pokemon.name}
          </h3>
          <div className="flex flex-wrap justify-center">
            {pokemon.types.map((type) => (
              <span
                key={type.type.name}
                className="px-2 py-1 m-1 text-sm text-gray-900 font-medium bg-gray-200 rounded-lg"
                style={{
                  backgroundColor: typeColor[type.type.name] || "#CCCCCC",
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <h2 className="text-sm text-center font-semibold text-gray-900 capitalize m-1">
            {parseFloat(pokemon.height / 10)} m |
            {parseFloat(pokemon.weight / 10)} kg
          </h2>
          <div className="flex justify-center w-full">
            <button
              onClick={() => handleRemove(pokemon)}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              Release
            </button>
          </div>
        </div>
      ))}
      {selectedPokemon && (
        <DeleteModal
          pokemon={selectedPokemon}
          onConfirm={confirmRemove}
          onCancel={() => setSelectedPokemon(null)}
        />
      )}
      {goodbyeMessage && (
        <NotifModal massage={goodbyeMessage} onClose={closeGoodbyeModal} />
      )}
    </div>
  );
};

export default PokeBag;
