import React, { useState, useMemo } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function PokeFilter(props) {
  const {
    pokemonData,
    setFilterNames,
    setFilterNumbers,
    setFilterHabitats,
    setFilterGenerations,
  } = props;
  const [selectedNameOptions, setSelectedNameOptions] = useState([]);
  const [selectedNumberOptions, setSelectedNumberOptions] = useState([]);
  const [selectedHabitatOptions, setSelectedHabitatOptions] = useState([]);
  const [selectedGenerationOptions, setSelectedGenerationOptions] = useState(
    []
  );

  // Create arrays of unique habitats and generations
  const uniqueHabitats = useMemo(
    () =>
      Array.from(new Set(pokemonData.map((pokemon) => pokemon.habitat.name))),
    [pokemonData]
  );
  const uniqueGenerations = useMemo(
    () =>
      Array.from(
        new Set(pokemonData.map((pokemon) => pokemon.generation.name))
      ),
    [pokemonData]
  );

  function DropDown(data) {
    const optionsWithAll = [{ name: "Display All" }, ...data.data];

    const uniqueOptions =
      data.searchby === "habitat"
        ? uniqueHabitats
        : data.searchby === "generation"
        ? uniqueGenerations
        : data.data;

    return (
      <Autocomplete
        disablePortal
        id={`combo-box-${data.label.toLowerCase()}`}
        options={optionsWithAll}
        getOptionLabel={(option) => option[data.searchby]}
        sx={{ minWidth: 200, marginBottom: 10,  marginRight:5}}
        renderInput={(params) => <TextField {...params} label={data.label} />}
        onChange={(event, newValue) => {
          if (data.searchby === "name") {
            setSelectedNameOptions(newValue ? newValue : []);
            setFilterNames(
              (newValue && newValue.map((item) => item.name)) || []
            );
          } else if (data.searchby === "id") {
            setSelectedNumberOptions(newValue ? newValue : []);
            setFilterNumbers(
              (newValue && newValue.map((item) => item.id.toString())) || []
            );
          } else if (data.searchby === "habitat") {
            setSelectedHabitatOptions(newValue ? newValue : []);
            setFilterHabitats(
              (newValue && newValue.map((item) => item.name)) || []
            );
          } else if (data.searchby === "generation") {
            setSelectedGenerationOptions(newValue ? newValue : []);
            setFilterGenerations(
              (newValue && newValue.map((item) => item.name)) || []
            );
          }
        }}
        value={
          data.searchby === "name"
            ? selectedNameOptions
            : data.searchby === "id"
            ? selectedNumberOptions
            : data.searchby === "habitat"
            ? selectedHabitatOptions
            : data.searchby === "generation"
            ? selectedGenerationOptions
            : null
        }
        multiple // Enable multiple selection
      />
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "10vh",
        flexWrap: "wrap",
      }}
    >
      {DropDown({ data: pokemonData, searchby: "name", label: "Name" })}
      {DropDown({ data: pokemonData, searchby: "id", label: "Number" })}
      <Autocomplete
        disablePortal
        id="habitat-combo-box"
        options={uniqueHabitats}
        renderOption={(props, option) => <li {...props}>{option}</li>}
        sx={{ minWidth: 200, marginBottom: 10,  marginRight:5}}
        renderInput={(params) => <TextField {...params} label="Habitat" />}
        onChange={(event, newValue) => {
          setSelectedHabitatOptions(newValue ? newValue : []);
          setFilterHabitats(newValue || []);
        }}
        value={selectedHabitatOptions}
        multiple
      />

      <Autocomplete
        disablePortal
        id="generation-combo-box"
        options={uniqueGenerations}
        renderOption={(props, option) => <li {...props}>{option}</li>}
        sx={{ minWidth: 200, marginBottom: 10, marginRight:5 }}
        renderInput={(params) => <TextField {...params} label="Generation" />}
        onChange={(event, newValue) => {
          setSelectedGenerationOptions(newValue ? newValue : []);
          setFilterGenerations(newValue || []);
        }}
        value={selectedGenerationOptions}
        multiple
      />
    </div>
  );
}
