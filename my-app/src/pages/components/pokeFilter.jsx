import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PokeFilter(props) {
  const { pokemonData, setFilterName } = props;

  function DropDown(data) {
    console.log('drowpdown',data)

    const optionsWithAll = [
      { name: "Display All" }, // Add the "Display All" option
      ...data.data,
    ];

    return (
      <>
        <Autocomplete
          disablePortal
          id={`combo-box-${data.label.toLowerCase()}`}
          options={optionsWithAll}
          getOptionLabel={(option) => option[data.searchby]}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label={data.label} />
          )}
          onChange={(event, newValue) => {
            setFilterName(newValue && newValue.name !== "Display All" ? newValue.name : "");
          }}
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
