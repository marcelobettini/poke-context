import React, { useState, useEffect } from "react";
import PokemonContext from "./PokemonContext";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";

import "./App.css";



function App() {
  //todo este estado lo pasaremos a través del Context.Provider en el código jsx
  const [data, setData] = useState([])
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);


  function handleErrors(res) {
    if (!res.ok) throw Error(res.status)
    return res.json();
  }
  //con Vite basta con poner el archivo en la carpeta exterior, con webpack habría que incluirla en la carpeta public
  useEffect(() => {
    fetch("http://localhost:3001/pokemon.json")
      .then(res => handleErrors(res))
      .then(data => setData(data))
      .catch(error => console.log(error))
  }, [])

  if (!data) {
    return <div>Fetching Pokemons...</div>;
  }
  return (
    <PokemonContext.Provider value={{
      data, setData, filter, setFilter, selectedPokemon, setSelectedPokemon
    }
    }>
      <div style={{ margin: 'auto', display: "flex", flexDirection: "column", width: '60vw' }}>
        <h1>Pokemon Search</h1>
        <PokemonFilter />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            marginTop: '2em',
            gap: "1.5rem",
          }}
        >
          <PokemonTable />
          <PokemonInfo />
        </div>
      </div >
    </PokemonContext.Provider >

  );
}

export default App;