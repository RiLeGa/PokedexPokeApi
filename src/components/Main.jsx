import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { UseFetch } from './UseFetch'
import { Cards } from './Cards'

const Main = () => {

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`);
    const estado = UseFetch(url)
    const {cargando, data} = estado
    cargando?console.log('cargando'):console.log(data.results);
    

    return (
        <main
        style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw"
          }}>
            <h1>Tu Pokedex</h1>
            <Container 
            style={{
                display: "flex",
                flexWrap:"wrap",
                justifyContent: "center",
                alignItems: "center",
                maxWidth:"none",
                width: "100vw"
              }}
              >

                {

                    cargando
                    ?
                    <h1>Cargando...</h1>
                    :
                    <Cards results={data.results} ></Cards>

                }
            
           </Container>

        </main>
    )
}

export default Main