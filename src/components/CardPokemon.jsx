import React, { useEffect, useState } from 'react'
import { UseFetch } from './UseFetch'


export const CardPokemon = ({url}) => {

    const estado = UseFetch(url)
    const {cargando, data} = estado
    
      return (
        <div>
          {
            cargando
            ?
            <h1>Cargando...</h1>
            :
            <div className="name">
              <img src={data.sprites.front_default} alt="" srcset="" />
              <h2>{data.id}</h2>
              <h2>{data.forms[0].name}</h2>
            </div>
          }
        </div>
      )
    }

