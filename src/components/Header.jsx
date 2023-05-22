import React from "react";
import Logo from './Logo';

export const Header = () => {
  return (
    <>
    <header 
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
      alignItems: "center",
      width: "100vw",
      padding: "5px",
      backgroundColor: "red"
    }}>

      <section style={{
        display: "flex"
      }}>
        <Logo/>
        <h2
        style={{
          color:"yellow",
        }} >  Pokedex</h2>
      </section>

        <section>
          <input
            style={{
              width:"250px",
              borderRadius:"15px",
              padding:"15px",
              position:"absolute",
              right:"10px",
              top:"25px"
            }}
          type="search" name="" id="" placeholder="Buscar Pokemon" />
        </section>
        
    </header>
    </>
  );
};
