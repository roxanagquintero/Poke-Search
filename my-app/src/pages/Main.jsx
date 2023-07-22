import React, { useEffect, useState } from "react";
import SideBarComponent from "./components/menu";
import Card from "./components/Card";
import PokeInfo from "./components/pokeInfo";

export default function Main() {
  const [pokemonData, setPokemonData] = useState([]);

  const GetPokemonData = async () => {
    let pokemonArray = [];
    for (let pokemonNum = 1; pokemonNum < 10; pokemonNum++) {
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
            <Card pokemonData={pokemonData} />
          </div>
        </div>

        <div className="right-content"></div>
        {/* <PokeInfo /> */}
      </div>
    </>
  );
}
