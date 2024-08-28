import React from "react";

const typeColor = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  unknown: '#999999',
  shadow: '#555555',
};

const Card = ({ pokemon, onCatch }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md p-4 m-2 max-w-xs">
      <h3 className="text-gray-800 text-center">{pokemon.id}</h3>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full h-36 object-cover mb-2"
      />
      <h3 className="text-lg font-bold text-center mb-2 text-gray-700 capitalize">
        {pokemon.name}
      </h3>
      <div className="flex flex-wrap justify-center">
        {pokemon.types.map((type) => (
          <span
            key={type.type.name}
            className="px-2 py-1 m-1 text-sm text-gray-900 font-medium bg-gray-200 rounded-lg"
            style={{ backgroundColor: typeColor[type.type.name] || '#CCCCCC' }}
          >
            {type.type.name}
          </span>
        ))}
      </div>
      <h2 className="text-sm text-center font-semibold text-gray-900 capitalize m-1">
        {parseFloat(pokemon.height / 10)} m |
        {parseFloat(pokemon.weight / 10)} kg
      </h2>
      <button
        onClick={() => onCatch(pokemon)}
        className="bg-blue-500 w-full text-white py-1 px-2 rounded hover:bg-blue-900 transition"
      >
        Catch
      </button>
    </div>
  );
};

export default Card;
