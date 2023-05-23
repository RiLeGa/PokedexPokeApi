import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { UseFetch } from "./UseFetch";
import { CardPokemon } from "./CardPokemon";
import { CardBack } from "./CardBack";

const Main = () => {

  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0`
  );
  const estado = UseFetch(url);

  const { cargando, data } = estado;

  const [poke, setPoke] = useState([]);
  const [tablaPoke, setTablaPoke] = useState(data);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoDeBusqueda) => {
    let resultadoDeBusqueda = tablaPoke.filter((elemento) =>
      elemento.name.toString().toLowerCase().includes(terminoDeBusqueda.toLowerCase())
    );
    setPoke(resultadoDeBusqueda);
  };

  useEffect(() => {
    if (data) {
      setPoke(data.results);
      setTablaPoke(data.results);
    }
  }, [data]);
  

  return (
    <main>
      <h1>Tu Pokedex</h1>

      <section>
        <input
          value={search}
          onChange={handleChange}
          className="search"
          type="text"
          name=""
          placeholder="Buscar Pokemon"
        />
      </section>

      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "none",
          padding: 0,
          width: "100vw",
        }}
      >
        {cargando ? (
          <h1 style={{ color: "black" }}>Cargando...</h1>
        ) : ( poke &&
          poke.map((pokemon) => (
            <div className="card" key={pokemon.name}>
              <CardPokemon url={pokemon.url} />
              <CardBack url={pokemon.url} />
            </div>
          ))
        )}
      </Container>
    </main>
  );
};

export default Main;
