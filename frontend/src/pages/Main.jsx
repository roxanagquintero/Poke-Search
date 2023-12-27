import React, { useEffect, useState } from "react";
import SideBarComponent from "./components/menu";
import Card from "./components/Card";
import PokeInfo from "./components/pokeInfo";
import PokeFilter from "./components/pokeFilter";

export default function Main() {
  const [pokemonData, setPokemonData] = useState([]);
  const [filterNames, setFilterNames] = useState([]);
  const [filterNumbers, setFilterNumbers] = useState([]);
  const [filterHabitats, setFilterHabitats] = useState([]);
  const [filterGenerations, setFilterGenerations] = useState([]);
  const GetPokemonData = async () => {
    let pokemonArray = [];
    for (let pokemonNum = 1; pokemonNum < 58; pokemonNum++) {
      const pokemonAPI = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonNum}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("data1", data);

          pokemonArray.push(data);

          // console.log('pokemonarray',pokemonArray)
        })
        .then(() => {
          pokemonArray.forEach((poke) => {
            const pokemonAPI2 = fetch(
              `https://pokeapi.co/api/v2/pokemon/${poke.name}`,
              {
                method: "GET",
              }
            )
              .then((response) => response.json())
              .then((data2) => {
                poke.MoreInfo = data2;
              });
            console.log("data2", pokemonArray);
          });
        });
    }
    // console.log("pokemon array", pokemonArray);
    setPokemonData(pokemonArray);
  };
  // Create arrays of unique habitats and generations
  const uniqueHabitats = Array.from(
    new Set(pokemonData.map((pokemon) => pokemon.habitat.name))
  );
  const uniqueGenerations = Array.from(
    new Set(pokemonData.map((pokemon) => pokemon.generation.name))
  );

  const filteredPokemon = pokemonData.filter(
    (pokemon) =>
      (filterNames.length === 0 || filterNames.includes(pokemon.name)) &&
      (filterNumbers.length === 0 ||
        filterNumbers.includes(pokemon.id.toString())) &&
      (filterHabitats.length === 0 ||
        filterHabitats.includes(pokemon.habitat.name)) &&
      (filterGenerations.length === 0 ||
        filterGenerations.includes(pokemon.generation.name))
  );

  useEffect(() => {
    // `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${}.png`

    //For pokemons 1-10
    if (!pokemonData.length) {
      GetPokemonData();
    }
  }, []);
  return (
    <>
      <div className="container">
        <SideBarComponent />
        <div style={{ maxWidth: "100%" }}>
          <div>
            <PokeFilter
              pokemonData={pokemonData}
              setFilterNames={setFilterNames}
              setFilterNumbers={setFilterNumbers}
              setFilterHabitats={setFilterHabitats}
              setFilterGenerations={setFilterGenerations}
            />
          </div>
          <div>
            {filteredPokemon.length !== 0 ? (
              <Card pokemonData={filteredPokemon} />
            ) : (
              <p>No Pokemons found.</p>
            )}
          </div>
        </div>
        <div className="right-content"></div>
      </div>
    </>
  );
}
