import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PokeBag = () => {
  const { bag, removeFromBag } = useContext(PokemonContext);

  if (bag.length === 0) return <p>Your bag is empty.</p>;

  return (
    <div className="flex flex-wrap justify-center">
      {bag.map(pokemon => (
        <div key={pokemon.id} className="bg-white border rounded-lg shadow-md p-4 m-2 max-w-xs">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.nickname || pokemon.name}
            className="w-full h-36 object-cover mb-2"
          />
          <h3 className="text-lg font-bold mb-2 text-gray-800 capitalize">
            {pokemon.nickname || pokemon.name}
          </h3>
          <button
            onClick={() => removeFromBag(pokemon.id)}
            className="bg-red-500 text-white py-1 px-3 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default PokeBag;
