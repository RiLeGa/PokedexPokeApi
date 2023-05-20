import React, { useState } from 'react'
import {CardPokemon} from './CardPokemon';

export const Cards = ({results}) => {
    console.log(results);
  return (
    <>
    {
    
    results.map( (pokemon => {
               
               return (
                <li 
                key={pokemon.name}
                style={{
                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "20%",
                    height:"450px",
                    margin:"20px",
                    border:"2px solid white"
                   }} 
                >
                   <CardPokemon 
                   url={pokemon.url}
                    />
                </li>
               )
               
           }))}
           </>
  )
}
