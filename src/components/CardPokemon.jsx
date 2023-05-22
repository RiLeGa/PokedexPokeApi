import React from 'react';
import { UseFetch } from './UseFetch';

export const CardPokemon = ({ url }) => {

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
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: backgroundGradient,
      width: '100%',
      height: '350px',
      border: '10px solid yellow',
      borderRadius: '15px',
      position: 'relative',
    };
  
    return (
      <article style={cardStyle}>
        {cargando ? (
          <div className="loading-spinner">
            {/* Muestra un spinner o una animación de carga */}
          </div>
        ) : (
          <div >
            
            <div 
            style={{
              display:"flex"
            }}>
              {
                data.types.map(tipo => (
                  <h2
                    key={tipo.type.name}
                    style={{
                      fontFamily: "fantasy",
                      textTransform: "uppercase",
                      width: "20%",
                      textAlign: "center",
                      fontSize: "10px",
                      backgroundImage: getTypeGradient(tipo.type.name),
                      border: "1px solid black",
                      color: "black"  // Agrega el estilo de color de texto
                    }}
                  >{tipo.type.name}
                  </h2>
                ))
              }
            </div>
          
            <h2 style={{ fontFamily:"fantasy", position: 'absolute', top: '-0.5em', right: '1em' }}>#{data.id}</h2>
            <img 
            style={{
              width:"200px"
            }}
            src={data.sprites.other.home.front_default} alt="" />
            <h2 
            style={{
              fontFamily:"fantasy",
              textTransform:"uppercase",
              width:"100%",
              textAlign:"center"
            }}
            >{data.forms[0].name}</h2>
             <div 
             style={{
              display:"flex"
             }}>
          
        </div>
            
          </div>
        )}
      </article>
    );
  };
  