// controllers/pokemonController.crlt.js

import fetch from 'node-fetch';

const getPokemonById = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

export { getPokemonById };
