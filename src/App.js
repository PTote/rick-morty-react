import React, { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Characters } from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  let url;

  if (busqueda) {
    url = `https://rickandmortyapi.com/api/character/?name=${busqueda}`;
  } else {
    url = "https://rickandmortyapi.com/api/character";
  }

  // const url =
  //   "https://rickandmortyapi.com/api/character" + `/?name=${busqueda}`;

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(url);
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log("Busqueda: " + e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <input
          type="text"
          name="nombre"
          autoComplete="off"
          value={busqueda}
          onChange={handleChange}
        ></input>
        <button>Buscar</button>
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;
