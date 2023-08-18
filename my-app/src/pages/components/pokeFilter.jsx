import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PokeFilter(props) {
  const { pokemonData } = props;

  function DropDown(data) {
    console.log('drowpdown',data)
    return (
      <>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data.data}
          getOptionLabel={(option) => option[data.searchby]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={data.label} />
          )}
        />
      </>
    );
  }
  return (
    <>
      <div>
        <DropDown data={pokemonData} searchby="name" label="Name" />
        <DropDown data={pokemonData} searchby="id" label="Number" />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={pokemonData}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.habitat.name}
            </li>
          )}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Habitat' />
          )}
        />
         <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={pokemonData}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.generation.name}
            </li>
          )}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Generation' />
          )}
        />
      </div>
    </>
  );
}
