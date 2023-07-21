import React, { useEffect, useState } from "react";
import "../style.css";

export default function Card(props) {
  const { pokemonData } = props;
  //note: the color function is not working. the data works and is returning the types(fire,water,etc)
  //not sure why switch is not working(it worked before)
  //maybe something about timing???
  const colorPicker = async (name) => {
    let PokeType = "";
    const pokemonAPI = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        PokeType = data.types[0].type.name;

        switch (PokeType) {
          case "fairy":
            return "rgba(255, 120, 196, 0.37)"; //pink
          case "grass":
            return "rgba(56, 97, 46, 0.37)"; //light sage
          case "bug":
            return "rgba(19, 97, 0, 0.37)"; //medium sage
          case "ghost":
            return "rgba(39, 0, 69, 0.35)"; //dark violet
          case "dark":
            return "rgba(0, 0, 0, 0.63)"; //black/grey
          case "flying":
            return "rgba(99, 186, 186, 0.46)"; //black/grey
          case "fire":
            return "rgba(230, 0, 0, 0.41)"; //black/grey
          default:
            return "white";
        }
      });
    console.log("poketype", PokeType);
  };

  return (
    <>
      {pokemonData.legth !== 0 ? (
        pokemonData.map((pokemon) => {
          return (
            <div
              className="card"
              style={{
                backgroundColor: colorPicker(pokemon.name),
                marginTop: "10px",
              }}
            >
              <h1>{pokemon.id}</h1>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                style={{
                  flex: 1,
                  //   width: "90px",
                  //   height: "100px",
                  resizeMode: "contain",
                }}
              />
              <h2>{pokemon.name}</h2>
            </div>
          );
        })
      ) : (
        <>
          <p>loading...</p>
        </>
      )}
    </>
  );
}
