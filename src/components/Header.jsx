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

      
      <Logo/>


        <h2
        style={{
          color:"yellow",
        }} >  Pokedex</h2>

      
        
    </header>
    </>
  );
};
