import React from 'react'
import { UseFetch } from './UseFetch';

export const CardBack = ({ url }) => {

    const { cargando, data, error } = UseFetch(url);
  
    const typeGradients = {
      fire: 'linear-gradient(to right, #FF5F6D, #FFC371)',
      water: 'linear-gradient(to right, #4ECDC4, #556270)',
      grass: 'linear-gradient(to right, #7FBB6A, #2E8B57)',
      electric: 'linear-gradient(to right, #FFD700, #FFA500)',
      psychic: 'linear-gradient(to right, #4e0979, #b300ff)'
      // Agrega más tipos y gradientes según sea necesario
    };
  
    const getTypeGradient = (type) => {
      return typeGradients[type] || 'linear-gradient(to right, #CCCCCC, #FFFFFF)';
    };
  
    const backgroundGradient = getTypeGradient(data?.types[0]?.type?.name);
  
    if (error) {
      return <div>Error al cargar el Pokémon.</div>;
    }
  
    const cardStyle = {
      backgroundImage: backgroundGradient
    };
  
    return (
      <article className='cardBack' style={cardStyle}>
        {cargando ? (
          <h2>Cargando...</h2>
        ) : (
          <div >
            
            <h2 
            style={{
              fontFamily:"fantasy",
              textTransform:"uppercase",
              width:"100%",
              textAlign:"center"
            }}
            >Weight</h2>
                <h3 style={{
              fontFamily:"fantasy",
              textTransform:"uppercase",
              width:"100%",
              textAlign:"center",
              fontSize:"15px"
            }}>
                  {data.weight}</h3>

            <h2
            style={{
              fontFamily:"fantasy",
              textTransform:"uppercase",
              width:"100%",
              textAlign:"center"
            }}
            >Abilities</h2>
              { data.abilities.map(tipo => (

                  <h3
                  style={{
                    fontFamily:"fantasy",
                    textTransform:"uppercase",
                    width:"100%",
                    textAlign:"center",
                    fontSize:"15px"
                  }}
                  >*{tipo.ability.name}*</h3>
                ))
              }
              <img 
            style={{
              width:"100px"
            }}
            src={data.sprites.front_default} alt="" />
          </div>
        )}
      </article>
    );
  };