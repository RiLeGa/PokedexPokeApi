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
                    width: "250px",
                    height:"350px",
                    margin:"20px",
                    borderRadius:"15px"
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
