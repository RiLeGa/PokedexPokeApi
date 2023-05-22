import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { UseFetch } from './UseFetch'
import {CardPokemon} from './CardPokemon';
import {CardBack} from './CardBack';

const Main = () => {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`);
    const estado = UseFetch(url)
    const {cargando, data} = estado
    

    const [search, setSearch] = useState("")

    const searcher = (e) => {
      setSearch(e.target.value)
      console.log(e.target.value);
    }

    const devolucion = !search ? data : data.results.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(search.toLowerCase()));
  
    return (

        <main>
            <h1>Tu Pokedex</h1>

            <section>
              <input value={search} onChange={searcher} className="search" type="text" name="" placeholder="Buscar Pokemon" />
            </section>

            <Container 
            style={{
                display: "flex",
                flexWrap:"wrap",
                justifyContent: "center",
                alignItems: "center",
                maxWidth:"none",
                padding: 0,
                width: "100vw"
              }}
              >

{cargando ? (
  <h1 style={{ color: "black" }}>Cargando...</h1>
) : devolucion && devolucion.results ? (
  devolucion.results.map((pokemon => {
                      
                            return(
                            <div className='card'
                            key={pokemon.name}
                            >
                               <CardPokemon 
                               url={pokemon.url}
                                />
                              <CardBack
                               url={pokemon.url}
                              />
                            </div>) }))
                        ) : (
                          <h1 style={{ color: "black" }}>No se encontraron resultados.</h1>
                        )

                    }
                
            
           </Container>

        </main>
    )
}

export default Main