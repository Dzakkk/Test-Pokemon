import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/";

export const PokeData = async () => {
  try {
    const [pokemonResponse, typeResponse] = await Promise.all([
      axios.get(`${baseUrl}pokemon?offset=0&limit=386`),
      axios.get(`${baseUrl}type/`),
    ]);

    const pokemonData = await Promise.all(
      pokemonResponse.data.results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      })
    );

    const typeData = typeResponse.data.results;

    return { pokemonData, typeData };
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
