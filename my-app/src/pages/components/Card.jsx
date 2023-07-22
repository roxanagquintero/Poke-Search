import React, { useEffect, useState } from "react";
import "../style.css";



import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Card(props) {
  const { pokemonData } = props;
  //note: the color function is not working. the data works and is returning the types(fire,water,etc)
  //not sure why switch is not working(it worked before)
  //maybe something about timing???
  const colorPicker = (PokeType) => {
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
            case "water":
            return "rgba(0, 128, 255, 0.1)"; //blue
          default:
            return "white";
        }
      };
  
  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>  
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {pokemonData.length !== 0 ? (pokemonData.map((pokemon, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
             <div
              className='card'
             style={{
               marginTop: "10px",
                backgroundColor: colorPicker(pokemon.MoreInfo?.types[0]?.type?.name),
             }}
           >
             <div>
               <h1 style={{display:'fixed'}}>#{pokemon.id}</h1>
               <img
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                 // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                 style={{
                   flex: 1,
                   resizeMode: "contain",
                 }}
               />
               <h2>{pokemon.name}</h2>
             </div>
             </div>
          </Grid>))) 
          :( <div style={{
            marginTop: "100px",
            
          }}>
            <p>loading...</p>
          </div>)
        }
      </Grid>
    </Box>
    
  
    </> 
  );
}
